import React, { useState } from 'react';
import { paymentConfig, generatePayPalUrl } from '../../utils/paymentConfig';

const PayPalModal = ({ isOpen, onClose, onSuccess }) => {
  const [selectedAmount, setSelectedAmount] = useState(null);
  const [customAmount, setCustomAmount] = useState('');

  const handleAmountSelect = (amount) => {
    setSelectedAmount(amount);
    setCustomAmount('');
  };

  const handleCustomAmountChange = (e) => {
    setCustomAmount(e.target.value);
    setSelectedAmount(null);
  };

  const handleContinue = () => {
    const amount = customAmount || selectedAmount || 50;
    
    // Close modal and open PayPal
    onClose();
    window.open(generatePayPalUrl(amount), '_blank');
    
    // Show success message after delay
    setTimeout(() => {
      onSuccess('You will be redirected to PayPal to complete your donation. Thank you for your support!');
    }, 1000);
  };

  if (!isOpen) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div 
        className="modal-content animate-scale-in" 
        onClick={(e) => e.stopPropagation()}
      >
        <div className="text-center mb-6">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl text-white">💳</span>
          </div>
          <h3 className="font-serif text-2xl font-semibold text-gray-900 mb-2">Donate via PayPal</h3>
          <p className="text-gray-600">Secure payment processing</p>
        </div>
        
        <div className="space-y-6">
          {/* Amount Selection */}
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 border border-blue-200">
            <h4 className="font-semibold text-gray-900 mb-4">Choose Your Donation Amount</h4>
            <div className="grid grid-cols-2 gap-3 mb-4">
              {paymentConfig.paypalAmounts.map((amount) => (
                <button
                  key={amount.value}
                  onClick={() => handleAmountSelect(amount.value)}
                  className={`py-3 border-2 rounded-xl font-medium transition-colors ${
                    selectedAmount === amount.value
                      ? 'border-blue-500 bg-blue-50 text-blue-700'
                      : 'border-gray-200 hover:border-blue-500 hover:bg-blue-50'
                  }`}
                >
                  {amount.label}
                </button>
              ))}
            </div>
            <div className="flex items-center gap-3">
              <span className="text-gray-600 font-medium">$</span>
              <input 
                type="number" 
                placeholder="Custom amount"
                value={customAmount}
                onChange={handleCustomAmountChange}
                className="form-input flex-1"
                min="1"
                step="0.01"
              />
            </div>
          </div>
          
          {/* PayPal Button */}
          <div className="bg-gray-50 rounded-2xl p-6 text-center">
            <div className="mb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-blue-600 font-bold text-lg">PP</span>
              </div>
              <p className="text-gray-600 mb-4">Click below to proceed with PayPal</p>
            </div>
            <button 
              onClick={handleContinue}
              className="btn-primary w-full flex items-center justify-center gap-3"
            >
              <span>🔗</span>
              Continue with PayPal
            </button>
          </div>
          
          {/* Cancel Button */}
          <div className="text-center">
            <button 
              onClick={onClose}
              className="py-3 px-6 text-gray-600 hover:text-gray-800 transition-colors"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PayPalModal;