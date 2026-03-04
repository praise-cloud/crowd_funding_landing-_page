import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useModals } from './hooks/useModal';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import ScrollToTop from './components/ScrollToTop';
import GreyUsdModal from './components/modals/GreyUsdModal';
import PayPalModal from './components/modals/PayPalModal';
import SuccessModal from './components/modals/SuccessModal';
import './App.css';

function App() {
  const { modals, openModal, closeModal } = useModals();

  const handlePayPalClick = () => {
    openModal('paypal');
  };

  const handleGreyClick = () => {
    openModal('greyUsd');
  };

  const handleSponsorClick = () => {
    window.location.href = "mailto:precious@example.com";
  };

  const handleSuccess = (message) => {
    openModal('success');
  };

  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route
          path="/"
          element={
            <Layout
              onPayPalClick={handlePayPalClick}
              onGreyClick={handleGreyClick}
              onSponsorClick={handleSponsorClick}
              handleSuccess={handleSuccess}
            />
          }
        >
          <Route
            index
            element={
              <HomePage
                onPayPalClick={handlePayPalClick}
                onGreyClick={handleGreyClick}
                onSponsorClick={handleSponsorClick}
              />
            }
          />
        </Route>
      </Routes>

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
    </Router>
  );
}

export default App;