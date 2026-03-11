import React from 'react';

const SuccessModal = ({ isOpen, onClose, message, title = "Thank You!" }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div
        className="modal-content animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="text-center">
          <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="text-3xl text-white">{'\u2713'}</span>
          </div>
          <h3 className="font-serif text-2xl font-semibold text-gray-900 mb-3">{title}</h3>
          <p className="text-gray-600 mb-8">{message}</p>
          <button
            onClick={onClose}
            className="btn-success w-full"
          >
            Back to Campaign
          </button>
        </div>
      </div>
    </div>
  );
};

export default SuccessModal;