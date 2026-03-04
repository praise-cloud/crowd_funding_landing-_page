import { useState, useCallback, useEffect } from 'react';

export const useModal = (initialState = false) => {
  const [isOpen, setIsOpen] = useState(initialState);

  const openModal = useCallback(() => {
    setIsOpen(true);
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';
  }, []);

  const closeModal = useCallback(() => {
    setIsOpen(false);
    // Restore body scroll
    document.body.style.overflow = 'unset';
  }, []);

  const toggleModal = useCallback(() => {
    setIsOpen(prev => {
      const newState = !prev;
      document.body.style.overflow = newState ? 'hidden' : 'unset';
      return newState;
    });
  }, []);

  // Handle ESC key to close modal
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape' && isOpen) {
        closeModal();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, closeModal]);

  return {
    isOpen,
    openModal,
    closeModal,
    toggleModal
  };
};

// Hook for managing multiple modals
export const useModals = () => {
  const [modals, setModals] = useState({
    greyUsd: false,
    paypal: false,
    success: false
  });

  const openModal = useCallback((modalName) => {
    setModals(prev => ({ ...prev, [modalName]: true }));
    document.body.style.overflow = 'hidden';
  }, []);

  const closeModal = useCallback((modalName) => {
    setModals(prev => ({ ...prev, [modalName]: false }));
    // Only restore scroll if no other modals are open
    const anyOpen = Object.values({ ...modals, [modalName]: false }).some(Boolean);
    document.body.style.overflow = anyOpen ? 'hidden' : 'unset';
  }, [modals]);

  const closeAllModals = useCallback(() => {
    setModals({
      greyUsd: false,
      paypal: false,
      success: false
    });
    document.body.style.overflow = 'unset';
  }, []);

  // Handle ESC key to close all modals
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        const openModals = Object.entries(modals).filter(([_, isOpen]) => isOpen);
        if (openModals.length > 0) {
          // Close the most recently opened modal
          const [modalName] = openModals[openModals.length - 1];
          closeModal(modalName);
        }
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [modals, closeModal]);

  return {
    modals,
    openModal,
    closeModal,
    closeAllModals
  };
};