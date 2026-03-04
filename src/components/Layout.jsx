import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import { useModals } from '../hooks/useModal';
import GreyUsdModal from './modals/GreyUsdModal';
import PayPalModal from './modals/PayPalModal';
import SuccessModal from './modals/SuccessModal';

const Layout = ({ onPayPalClick, onGreyClick, onSponsorClick, handleSuccess }) => {
  const { modals, openModal, closeModal } = useModals();

  const handleContributeClick = () => {
    // Navigate to donate section
    const donateElement = document.getElementById('donate');
    if (donateElement) {
      donateElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[--soft-cream]">
      {/* Header */}
      <Header onContributeClick={handleContributeClick} />
      
      {/* Main Content */}
      <main>
        <Outlet context={{ onPayPalClick, onGreyClick, onSponsorClick, handleSuccess }} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Modals */}
      <GreyUsdModal 
        isOpen={modals.greyUsd}
        onClose={() => closeModal('greyUsd')}
        onSuccess={handleSuccess}
      />
      
      <PayPalModal 
        isOpen={modals.paypal}
        onClose={() => closeModal('paypal')}
        onSuccess={handleSuccess}
      />
      
      <SuccessModal 
        isOpen={modals.success}
        onClose={() => closeModal('success')}
        message="Your contribution has been received and will be processed shortly."
      />
    </div>
  );
};

export default Layout;