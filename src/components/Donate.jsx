import React, { useEffect, useState } from 'react';
import { isCampaignClosed } from '../utils/paymentConfig';

const Donate = ({ onPayPalClick, onGreyClick, onSponsorClick }) => {
  const [campaignClosed, setCampaignClosed] = useState(isCampaignClosed);

  useEffect(() => {
    setCampaignClosed(isCampaignClosed());
    const intervalId = setInterval(() => {
      setCampaignClosed(isCampaignClosed());
    }, 1000 * 60 * 60);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section id="donate" className="py-20 md:py-28 bg-gradient-to-br from-white to-[--soft-cream]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16 reveal" data-reveal>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Support <span className="gradient-text">Our Work</span>
          </h2>
          <p className="text-base sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Your contribution helps children receive urgent treatment, safe shelter, and family support services.
            Every donation keeps care moving without delay.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {/* PayPal Donation */}
          <div className="card text-center group hover:scale-105 transition-transform duration-300 reveal" data-reveal>
            <div className="w-16 h-16 bg-gradient-to-br from-rose-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
              <span className="text-2xl text-white">{'\u{1F4B3}'}</span>
            </div>
            <h3 className="font-serif text-2xl font-semibold text-gray-900 mb-4">PayPal</h3>
            <p className="text-gray-600 mb-6">
              Quick and secure donation using your PayPal account or credit card.
              Processed instantly with buyer protection.
            </p>
            <button
              onClick={onPayPalClick}
              disabled={campaignClosed}
              className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {campaignClosed ? 'Campaign Closed' : 'Donate with PayPal'}
            </button>
          </div>

          {/* Grey USD Transfer */}
          <div className="card text-center group hover:scale-105 transition-transform duration-300 reveal" data-reveal data-reveal-delay="120">
            <div className="w-16 h-16 bg-gradient-to-br from-slate-600 to-slate-700 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
              <span className="text-2xl text-white">{'\u{1F3E6}'}</span>
            </div>
            <h3 className="font-serif text-2xl font-semibold text-gray-900 mb-4">Grey USD</h3>
            <p className="text-gray-600 mb-6">
              Direct bank transfer using Grey's USD account.
              Upload your receipt for confirmation.
            </p>
            <button
              onClick={onGreyClick}
              disabled={campaignClosed}
              className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {campaignClosed ? 'Campaign Closed' : 'Transfer with Grey'}
            </button>
          </div>

          {/* Direct Sponsorship */}
          <div className="card text-center group hover:scale-105 transition-transform duration-300 reveal" data-reveal data-reveal-delay="240">
            <div className="w-16 h-16 bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
              <span className="text-2xl text-white">{'\u{1F91D}'}</span>
            </div>
            <h3 className="font-serif text-2xl font-semibold text-gray-900 mb-4">Direct Sponsorship</h3>
            <p className="text-gray-600 mb-6">
              Become a direct sponsor and receive private care updates and impact reports.
              Ideal for long-term partners.
            </p>
            <button
              onClick={onSponsorClick}
              className="btn-primary w-full"
            >
              Become a Sponsor
            </button>
          </div>
        </div>

        {campaignClosed && (
          <div className="mt-6 text-center reveal" data-reveal>
            <p className="text-sm text-red-600 font-medium">
              The donation window has closed. PayPal and Grey payments are no longer available.
            </p>
          </div>
        )}

        {/* Security Notice */}
        <div className="mt-16 text-center reveal" data-reveal>
          <div className="inline-flex items-center gap-2 text-sm text-gray-500">
            <span className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
              <span className="text-white text-xs">{'\u2713'}</span>
            </span>
            <span>All transactions are secure and encrypted</span>
          </div>
        </div>

        {/* Impact Statement */}
        <div className="mt-12 bg-gradient-to-r from-rose-50 to-orange-50 rounded-3xl p-6 md:p-8 border border-rose-100 reveal" data-reveal>
          <div className="text-center">
            <h3 className="font-serif text-2xl font-semibold text-gray-900 mb-4">
              Your Impact
            </h3>
            <p className="text-gray-700 max-w-3xl mx-auto mb-6">
              Every contribution, no matter the size, helps a child access timely care.
              Your support gives families hope during the most difficult moments.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-rose-600 mb-1">$50</div>
                <div className="text-sm text-gray-600">Covers essential lab testing</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600 mb-1">$150</div>
                <div className="text-sm text-gray-600">Provides a week of medications</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-600 mb-1">$500</div>
                <div className="text-sm text-gray-600">Supports critical care supplies</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Donate;