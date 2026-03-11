import React, { useState } from 'react';
import { PayPalButtons, PayPalScriptProvider } from '@paypal/react-paypal-js';
import { isCampaignClosed, paymentConfig } from '../../utils/paymentConfig';

const PayPalModal = ({ isOpen, onClose, onSuccess }) => {
  const [selectedAmount, setSelectedAmount] = useState(null);
  const [customAmount, setCustomAmount] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const clientId = (import.meta.env.VITE_PAYPAL_CLIENT_ID || paymentConfig.paypalClientId || '').trim();
  const currency = import.meta.env.VITE_PAYPAL_CURRENCY || 'USD';
  const intent = import.meta.env.VITE_PAYPAL_INTENT || 'capture';

  const handleAmountSelect = (amount) => {
    setSelectedAmount(amount);
    setCustomAmount('');
    setErrorMessage('');
  };

  const handleCustomAmountChange = (e) => {
    setCustomAmount(e.target.value);
    setSelectedAmount(null);
    setErrorMessage('');
  };

  const donationAmount = Number(customAmount || selectedAmount || 50);
  const isAmountInvalid = !Number.isFinite(donationAmount) || donationAmount <= 0;
  const campaignClosed = isCampaignClosed();

  if (!isOpen) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content animate-scale-in" onClick={(e) => e.stopPropagation()}>
        <div className="text-center mb-6">
          <div className="w-16 h-16 bg-gradient-to-br from-rose-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl text-white">PP</span>
          </div>
          <h3 className="font-serif text-2xl font-semibold text-gray-900 mb-2">Donate via PayPal</h3>
          <p className="text-gray-600">Secure payment processing</p>
        </div>

        <div className="space-y-6">
          <div className="bg-gradient-to-br from-rose-50 to-orange-50 rounded-2xl p-6 border border-rose-200">
            <h4 className="font-semibold text-gray-900 mb-4">Choose Your Donation Amount</h4>
            <div className="grid grid-cols-2 gap-3 mb-4">
              {paymentConfig.paypalAmounts.map((amount) => (
                <button
                  key={amount.value}
                  onClick={() => handleAmountSelect(amount.value)}
                  className={`py-3 border-2 rounded-xl font-medium transition-colors ${
                    selectedAmount === amount.value
                      ? 'border-rose-500 bg-rose-50 text-rose-700'
                      : 'border-gray-200 hover:border-rose-500 hover:bg-rose-50'
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

          <div className="bg-gray-50 rounded-2xl p-6 text-center">
            <div className="mb-4">
              <p className="text-gray-600 mb-4">Complete payment with PayPal</p>
            </div>

            {campaignClosed ? (
              <p className="text-sm text-red-600">
                The donation period has closed. PayPal payments are no longer available.
              </p>
            ) : !clientId ? (
              <p className="text-sm text-red-600">
                PayPal is not configured. Add `VITE_PAYPAL_CLIENT_ID` to your `.env` file.
              </p>
            ) : isAmountInvalid ? (
              <p className="text-sm text-red-600">Please enter a valid donation amount greater than $0.</p>
            ) : (
              <PayPalScriptProvider
                options={{
                  'client-id': clientId,
                  currency,
                  intent,
                  components: 'buttons'
                }}
              >
                <PayPalButtons
                  style={{ layout: 'vertical', shape: 'rect', label: 'paypal' }}
                  forceReRender={[donationAmount]}
                  createOrder={(_, actions) =>
                    actions.order.create({
                      purchase_units: [
                        {
                          amount: {
                            currency_code: 'USD',
                            value: donationAmount.toFixed(2)
                          }
                        }
                      ]
                    })
                  }
                  onApprove={async (_, actions) => {
                    const capture = await actions.order.capture();
                    const donorName = capture?.payer?.name?.given_name || 'Supporter';
                    onClose();
                    onSuccess(`Thank you, ${donorName}. Your PayPal donation was completed successfully.`);
                  }}
                  onError={() => {
                    setErrorMessage('Unable to process PayPal payment right now. Please try again.');
                  }}
                />
              </PayPalScriptProvider>
            )}
            {errorMessage && <p className="text-sm text-red-600 mt-3">{errorMessage}</p>}
          </div>

          <div className="text-center">
            <button onClick={onClose} className="py-3 px-6 text-gray-600 hover:text-gray-800 transition-colors">
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PayPalModal;
