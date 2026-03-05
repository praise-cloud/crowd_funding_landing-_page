import React from 'react';

const Funding = () => {
  const fundingItems = [
    { category: 'Final Semester Tuition', amount: 18000, icon: '🎓' },
    { category: 'Accommodation', amount: 14000, icon: '📝' },
    { category: 'Living Expenses', amount: 8000, icon: '🏆' },
    { category: 'Visa & Travel', amount: 3000, icon: '📚' },
    { category: 'Academic Equipment', amount: 2000, icon: '🚌' },
    { category: 'Administrative Reserve', amount: 5000, icon: '💰' }
  ];


  const totalGoal = fundingItems.reduce((sum, item) => sum + item.amount, 0);
  const fundingBreakdown = fundingItems.map((item) => ({
    ...item,
    percentage: (item.amount / totalGoal) * 100
  }));

  const currentAmount = 250;
  const progressPercentage = (currentAmount / totalGoal) * 100;

  return (
    <section id="funding" className="py-20 md:py-28 bg-gradient-to-br from-[--soft-cream] to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Funding <span className="gradient-text">Breakdown</span>
          </h2>
          <p className="text-base sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Every dollar contributes directly to my academic completion. Here's exactly how your support will be used.
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
                    className="bg-gradient-to-r from-blue-500 to-blue-600 h-full rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${progressPercentage}%` }}
                  ></div>
                </div>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-sm text-gray-600">{progressPercentage.toFixed(1)}% Complete</span>
                  <span className="text-sm text-gray-600">{(totalGoal - currentAmount).toLocaleString()} remaining</span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="text-center p-4 bg-blue-50 rounded-xl border border-blue-200">
                  <div className="text-2xl font-bold text-blue-600">{Math.round(progressPercentage)}%</div>
                  <div className="text-sm text-gray-600">Funded</div>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-xl border border-green-200">
                  <div className="text-2xl font-bold text-green-600">{Math.floor(currentAmount / 50)}</div>
                  <div className="text-sm text-gray-600">Donors</div>
                </div>
                <div className="text-center p-4 bg-purple-50 rounded-xl border border-purple-200">
                  <div className="text-2xl font-bold text-purple-600">24</div>
                  <div className="text-sm text-gray-600">Days Left</div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl p-5 sm:p-6 border border-orange-200">
              <div className="flex items-center mb-3">
                <span className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white text-sm">??</span>
                </span>
                <h4 className="font-semibold text-orange-800">Time Sensitive</h4>
              </div>
              <p className="text-orange-700 text-sm">
                The academic deadline is approaching fast. Without your support, I may have to defer my final semester.
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
                    className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${item.percentage}%` }}
                  ></div>
                </div>
                <div className="text-right text-sm text-gray-600">{item.percentage.toFixed(1)}% of goal</div>
              </div>
            ))}

            <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-6 text-white">
              <div className="flex justify-between items-center">
                <div>
                  <h4 className="font-serif text-xl font-semibold mb-1">Total Goal</h4>
                  <p className="text-blue-100 text-sm">Complete academic funding needed</p>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold">${totalGoal.toLocaleString()}</div>
                  <div className="text-blue-100 text-sm">USD</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 md:mt-16 bg-gradient-to-r from-green-50 to-blue-50 rounded-3xl p-6 md:p-8 border border-green-200">
          <div className="text-center">
            <h3 className="font-serif text-2xl font-semibold text-gray-900 mb-4">Your Impact Goes Beyond Numbers</h3>
            <p className="text-gray-700 max-w-3xl mx-auto mb-6">
              Your contribution does not just fund my education - it invests in my future ability to contribute to society,
              create innovative solutions, and help other students facing similar challenges.
            </p>
            <div className="flex justify-center">
              <div className="inline-flex items-center px-6 py-3 bg-white rounded-full shadow-sm border">
                <span className="text-green-600 mr-2">??</span>
                <span className="text-gray-700 font-medium">Every dollar makes a difference</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Funding;
