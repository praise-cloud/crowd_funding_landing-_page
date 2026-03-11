import React, { useEffect, useState } from 'react';
import { getDaysRemaining, isCampaignClosed } from '../utils/paymentConfig';

const Funding = () => {
  const [daysRemaining, setDaysRemaining] = useState(getDaysRemaining);
  const [campaignClosed, setCampaignClosed] = useState(isCampaignClosed);

  useEffect(() => {
    setDaysRemaining(getDaysRemaining());
    setCampaignClosed(isCampaignClosed());
    const intervalId = setInterval(() => {
      setDaysRemaining(getDaysRemaining());
      setCampaignClosed(isCampaignClosed());
    }, 1000 * 60 * 60);

    return () => clearInterval(intervalId);
  }, []);

  const fundingItems = [
    { category: 'Emergency Surgeries', amount: 25000, icon: '\u2695' },
    { category: 'Medications & Infusions', amount: 12000, icon: '\u2697' },
    { category: 'Diagnostics & Imaging', amount: 8000, icon: '\u{1F50E}' },
    { category: 'Hospital Care', amount: 15000, icon: '\u{1F3E5}' },
    { category: 'Family Travel & Lodging', amount: 7000, icon: '\u{1F6FA}' },
    { category: 'Emergency Reserve', amount: 8000, icon: '\u{1F4B0}' }
  ];

  const totalGoal = fundingItems.reduce((sum, item) => sum + item.amount, 0);
  const fundingBreakdown = fundingItems.map((item) => ({
    ...item,
    percentage: (item.amount / totalGoal) * 100
  }));

<<<<<<< HEAD
  const currentAmount = 12500;
=======
  const currentAmount = 1000;
>>>>>>> 3046d6bb0d2432f7e244340e4438dac430e256fb
  const progressPercentage = (currentAmount / totalGoal) * 100;

  return (
    <section id="funding" className="py-20 md:py-28 bg-gradient-to-br from-[--soft-cream] to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Funding <span className="gradient-text">Breakdown</span>
          </h2>
          <p className="text-base sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Every dollar moves quickly toward urgent care, recovery support, and emergency reserves for children in crisis.
          </p>
          <p className="text-sm text-gray-500 mt-3">
            Figures shown represent the current funding plan and target coverage for the next 90 days.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16">
          <div className="space-y-8">
            <div className="card">
              <h3 className="font-serif text-2xl font-semibold text-gray-900 mb-6">Funding Progress</h3>

              <div className="mb-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-gray-700">${currentAmount.toLocaleString()} raised</span>
                  <span className="text-sm font-medium text-gray-700">Goal: ${totalGoal.toLocaleString()}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-rose-500 to-orange-500 h-full rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${progressPercentage}%` }}
                  ></div>
                </div>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-sm text-gray-600">{progressPercentage.toFixed(1)}% Complete</span>
                  <span className="text-sm text-gray-600">{(totalGoal - currentAmount).toLocaleString()} remaining</span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="text-center p-4 bg-rose-50 rounded-xl border border-rose-200">
                  <div className="text-2xl font-bold text-rose-600">{Math.round(progressPercentage)}%</div>
                  <div className="text-sm text-gray-600">Funded</div>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-xl border border-green-200">
                  <div className="text-2xl font-bold text-green-600">{Math.floor(currentAmount / 75)}</div>
                  <div className="text-sm text-gray-600">Care Gifts</div>
                </div>
                <div className="text-center p-4 bg-orange-50 rounded-xl border border-orange-200">
                  <div className="text-2xl font-bold text-orange-600">{campaignClosed ? 'Closed' : daysRemaining}</div>
                  <div className="text-sm text-gray-600">{campaignClosed ? 'Campaign Status' : 'Days Left'}</div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl p-5 sm:p-6 border border-orange-200">
              <div className="flex items-center mb-3">
                <span className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white text-sm">!</span>
                </span>
                <h4 className="font-semibold text-orange-800">Time Sensitive</h4>
              </div>
              <p className="text-orange-700 text-sm">
                Many children need treatment within days. Delays can increase complications and recovery time.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="font-serif text-xl sm:text-2xl font-semibold text-gray-900 mb-6">How Funds Will Be Used</h3>

            {fundingBreakdown.map((item) => (
              <div key={item.category} className="card hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center">
                    <span className="text-2xl mr-3">{item.icon}</span>
                    <span className="font-semibold text-gray-900">{item.category}</span>
                  </div>
                  <span className="font-bold text-gray-900">${item.amount.toLocaleString()}</span>
                </div>

                <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                  <div
                    className="bg-gradient-to-r from-rose-500 to-orange-500 h-2 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${item.percentage}%` }}
                  ></div>
                </div>
                <div className="text-right text-sm text-gray-600">{item.percentage.toFixed(1)}% of goal</div>
              </div>
            ))}

            <div className="bg-gradient-to-r from-rose-500 to-orange-500 rounded-2xl p-6 text-white">
              <div className="flex justify-between items-center">
                <div>
                  <h4 className="font-serif text-xl font-semibold mb-1">Total Goal</h4>
                  <p className="text-orange-100 text-sm">90-day pediatric care coverage</p>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold">${totalGoal.toLocaleString()}</div>
                  <div className="text-orange-100 text-sm">USD</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 md:mt-16 bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-6 md:p-8 border border-green-200">
          <div className="text-center">
            <h3 className="font-serif text-2xl font-semibold text-gray-900 mb-4">Your Impact Goes Beyond Numbers</h3>
            <p className="text-gray-700 max-w-3xl mx-auto mb-6">
              Your contribution supports rapid diagnosis, treatment, and recovery for children who need urgent care,
              while easing the burden on families during the hardest moments.
            </p>
            <div className="flex justify-center">
              <div className="inline-flex items-center px-6 py-3 bg-white rounded-full shadow-sm border">
                <span className="text-green-600 mr-2">{'\u271A'}</span>
                <span className="text-gray-700 font-medium">Every gift keeps care moving</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Funding;