import React from 'react';

const Funding = () => {
  const fundingBreakdown = [
    { category: 'Final Semester Tuition', amount: '$2,500', percentage: 56, icon: '🎓' },
    { category: 'Examination Fees', amount: '$800', percentage: 18, icon: '📝' },
    { category: 'Graduation Requirements', amount: '$600', percentage: 13, icon: '🏆' },
    { category: 'Study Materials', amount: '$400', percentage: 9, icon: '📚' },
    { category: 'Transportation', amount: '$200', percentage: 4, icon: '🚌' }
  ];

  const totalGoal = 4500;
  const currentAmount = 1200;
  const progressPercentage = (currentAmount / totalGoal) * 100;

  return (
    <section id="funding" className="py-32 bg-gradient-to-br from-[--soft-cream] to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Funding <span className="gradient-text">Breakdown</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Every dollar contributes directly to my academic completion. Here's exactly how your support will be used.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Progress Overview */}
          <div className="space-y-8">
            <div className="card">
              <h3 className="font-serif text-2xl font-semibold text-gray-900 mb-6">Funding Progress</h3>
              
              {/* Progress Bar */}
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
                  <span className="text-sm text-gray-600">{totalGoal - currentAmount} remaining</span>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4">
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

            {/* Urgency Notice */}
            <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl p-6 border border-orange-200">
              <div className="flex items-center mb-3">
                <span className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white text-sm">⚠️</span>
                </span>
                <h4 className="font-semibold text-orange-800">Time Sensitive</h4>
              </div>
              <p className="text-orange-700 text-sm">
                The academic deadline is approaching fast. Without your support, I may have to defer my final semester.
              </p>
            </div>
          </div>

          {/* Funding Breakdown */}
          <div className="space-y-6">
            <h3 className="font-serif text-2xl font-semibold text-gray-900 mb-6">How Funds Will Be Used</h3>
            
            {fundingBreakdown.map((item, index) => (
              <div key={index} className="card hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center">
                    <span className="text-2xl mr-3">{item.icon}</span>
                    <span className="font-semibold text-gray-900">{item.category}</span>
                  </div>
                  <span className="font-bold text-gray-900">{item.amount}</span>
                </div>
                
                <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                  <div 
                    className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${item.percentage}%` }}
                  ></div>
                </div>
                <div className="text-right text-sm text-gray-600">{item.percentage}% of goal</div>
              </div>
            ))}

            {/* Total */}
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

        {/* Impact Statement */}
        <div className="mt-16 bg-gradient-to-r from-green-50 to-blue-50 rounded-3xl p-8 border border-green-200">
          <div className="text-center">
            <h3 className="font-serif text-2xl font-semibold text-gray-900 mb-4">
              Your Impact Goes Beyond Numbers
            </h3>
            <p className="text-gray-700 max-w-3xl mx-auto mb-6">
              Your contribution doesn't just fund my education—it invests in my future ability to contribute to society, 
              create innovative solutions, and help other students facing similar challenges.
            </p>
            <div className="flex justify-center">
              <div className="inline-flex items-center px-6 py-3 bg-white rounded-full shadow-sm border">
                <span className="text-green-600 mr-2">💚</span>
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