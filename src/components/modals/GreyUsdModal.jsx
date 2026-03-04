import React, { useState } from 'react';
import { useFileUpload } from '../../hooks/useFileUpload';
import { copyToClipboard, paymentConfig } from '../../utils/paymentConfig';

const GreyUsdModal = ({ isOpen, onClose, onSuccess }) => {
  const [isCopying, setIsCopying] = useState(false);
  const { file, preview, error, isUploading, handleFileChange, removeFile, uploadFile } = useFileUpload();

  const accountDetails = paymentConfig.greyAccountDetails;

  const handleCopyDetails = async () => {
    setIsCopying(true);
    const details = `${accountDetails.accountName}
Account Number: ${accountDetails.accountNumber}
Wire Routing: ${accountDetails.wireRouting}
ACH Routing: ${accountDetails.achRouting}
Account Type: ${accountDetails.accountType}
Bank Name: ${accountDetails.bankName}
Address: ${accountDetails.address}`;

    const result = await copyToClipboard(details);

    if (result.success) {
      setTimeout(() => setIsCopying(false), 2000);
    } else {
      setIsCopying(false);
    }
  };

  const handleSubmit = async () => {
    if (!file) {
      alert('Please upload your payment receipt');
      return;
    }

    // Simulate upload process
    onClose();

    // Show success message
    setTimeout(() => {
      onSuccess('Your Grey USD payment has been submitted successfully! We will review your receipt and confirm within 24 hours.');
    }, 500);
  };

  if (!isOpen) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div
        className="modal-content animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="text-center mb-6">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl text-white">🏦</span>
          </div>
          <h3 className="font-serif text-2xl font-semibold text-gray-900 mb-2">Grey USD Transfer</h3>
          <p className="text-gray-600">Complete your donation via bank transfer</p>
        </div>

        <div className="space-y-6">
          {/* Account Details */}
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 border border-blue-200">
            <h4 className="font-semibold text-gray-900 mb-3">Account Details</h4>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Account Name:</span>
                <span className="font-mono text-sm font-semibold">{accountDetails.accountName}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Account Number:</span>
                <span className="font-mono text-sm font-semibold">{accountDetails.accountNumber}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Bank Name:</span>
                <span className="font-mono text-sm font-semibold">{accountDetails.bankName}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Wire Routing:</span>
                <span className="font-mono text-sm font-semibold">{accountDetails.wireRouting}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">ACH Routing:</span>
                <span className="font-mono text-sm font-semibold">{accountDetails.achRouting}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Account Type:</span>
                <span className="font-mono text-sm font-semibold">{accountDetails.accountType}</span>
              </div>
              <div className="flex justify-between items-start gap-4">
                <span className="text-gray-600">Address:</span>
                <span className="font-mono text-sm font-semibold text-right">{accountDetails.address}</span>
              </div>
            </div>
            <button
              onClick={handleCopyDetails}
              className={`w-full mt-4 py-2 rounded-xl text-sm font-medium transition-colors ${
                isCopying
                  ? 'bg-green-600 text-white'
                  : 'bg-blue-600 text-white hover:bg-blue-700'
              }`}
            >
              {isCopying ? '✓ Copied!' : '📋 Copy Account Details'}
            </button>
          </div>

          {/* File Upload */}
          <div>
            <label className="form-label">Upload Payment Receipt</label>
            <div
              className={`file-upload ${error ? 'border-red-300 bg-red-50' : ''}`}
              onClick={() => document.getElementById('receipt-upload').click()}
            >
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-xl">📄</span>
              </div>
              <p className="text-gray-600 mb-2">Click to upload receipt</p>
              <p className="text-sm text-gray-500">PNG, JPG, PDF up to 5MB</p>
              <input
                type="file"
                id="receipt-upload"
                accept=".png,.jpg,.jpeg,.pdf"
                className="hidden"
                onChange={handleFileChange}
              />
            </div>

            {error && (
              <div className="error-message mt-2">
                {error}
              </div>
            )}

            {preview && (
              <div className="mt-3">
                <div className="bg-green-50 border border-green-200 rounded-xl p-3 flex items-center justify-between">
                  <span className="text-green-800 text-sm">{preview}</span>
                  <button
                    onClick={removeFile}
                    className="text-green-600 hover:text-green-800 font-bold"
                  >
                    ✕
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3">
            <button
              onClick={onClose}
              className="btn-secondary flex-1"
            >
              Cancel
            </button>
            <button
              onClick={handleSubmit}
              disabled={!file || isUploading}
              className="btn-primary flex-1 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isUploading ? 'Uploading...' : 'Submit Payment'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GreyUsdModal;
