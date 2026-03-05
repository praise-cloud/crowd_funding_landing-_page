import React from 'react';

const Donate = ({ onPayPalClick, onGreyClick, onSponsorClick }) => {
  return (
    <section id="donate" className="py-20 md:py-28 bg-gradient-to-br from-white to-[--soft-cream]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Support My <span className="gradient-text">Academic Journey</span>
          </h2>
          <p className="text-base sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Your contribution will directly support my final semester tuition, examination fees, and graduation requirements. 
            Every donation brings me closer to achieving my dream.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {/* PayPal Donation */}
          <div className="card text-center group hover:scale-105 transition-transform duration-300">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
              <span className="text-2xl text-white">💳</span>
            </div>
            <h3 className="font-serif text-2xl font-semibold text-gray-900 mb-4">PayPal</h3>
            <p className="text-gray-600 mb-6">
              Quick and secure donation using your PayPal account or credit card. 
              Processed instantly with buyer protection.
            </p>
            <button 
              onClick={onPayPalClick}
              className="btn-primary w-full"
            >
              Donate with PayPal
            </button>
          </div>

          {/* Grey USD Transfer */}
          <div className="card text-center group hover:scale-105 transition-transform duration-300">
            <div className="w-16 h-16 bg-gradient-to-br from-gray-600 to-gray-700 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
              <span className="text-2xl text-white">🏦</span>
            </div>
            <h3 className="font-serif text-2xl font-semibold text-gray-900 mb-4">Grey USD</h3>
            <p className="text-gray-600 mb-6">
              Direct bank transfer using Grey's USD account. 
              Upload your receipt for confirmation.
            </p>
            <button 
              onClick={onGreyClick}
              className="btn-primary w-full"
            >
              Transfer with Grey
            </button>
          </div>

          {/* Direct Sponsorship */}
          <div className="card text-center group hover:scale-105 transition-transform duration-300">
            <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-green-700 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
              <span className="text-2xl text-white">🤝</span>
            </div>
            <h3 className="font-serif text-2xl font-semibold text-gray-900 mb-4">Direct Sponsorship</h3>
            <p className="text-gray-600 mb-6">
              Become a direct sponsor and receive regular updates on my progress. 
              Perfect for long-term support.
            </p>
            <button 
              onClick={onSponsorClick}
              className="btn-primary w-full"
            >
              Become a Sponsor
            </button>
          </div>
        </div>

        {/* Security Notice */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 text-sm text-gray-500">
            <span className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
              <span className="text-white text-xs">✓</span>
            </span>
            <span>All transactions are secure and encrypted</span>
          </div>
        </div>

        {/* Impact Statement */}
        <div className="mt-12 bg-gradient-to-r from-blue-50 to-green-50 rounded-3xl p-6 md:p-8 border border-blue-100">
          <div className="text-center">
            <h3 className="font-serif text-2xl font-semibold text-gray-900 mb-4">
              Your Impact
            </h3>
            <p className="text-gray-700 max-w-3xl mx-auto mb-6">
              Every contribution, no matter the size, makes a significant difference in my academic journey. 
              Your support will help me complete my final semester and graduate with honors.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600 mb-1">$50</div>
                <div className="text-sm text-gray-600">Covers 1 week of study materials</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600 mb-1">$100</div>
                <div className="text-sm text-gray-600">Covers 1 examination fee</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600 mb-1">$250</div>
                <div className="text-sm text-gray-600">Covers 1 month of tuition</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Donate;
