import React from 'react';

const Milestones = () => {
  const milestones = [
    {
      year: '2021',
      title: 'Started University Journey',
      description: 'Began Computer Science program with determination and passion for technology.',
      icon: '🎓',
      status: 'completed'
    },
    {
      year: '2022',
      title: 'Academic Excellence',
      description: 'Achieved 3.8 GPA and joined the Dean\'s List for outstanding academic performance.',
      icon: '⭐',
      status: 'completed'
    },
    {
      year: '2023',
      title: 'Internship & Projects',
      description: 'Completed software development internship and built multiple real-world applications.',
      icon: '💻',
      status: 'completed'
    },
    {
      year: '2024',
      title: 'Final Year Challenges',
      description: 'Facing financial constraints that threaten to delay graduation.',
      icon: '⚡',
      status: 'current'
    },
    {
      year: '2024',
      title: 'Graduation Goal',
      description: 'Complete final semester and graduate with Computer Science degree.',
      icon: '🎯',
      status: 'pending'
    },
    {
      year: '2025',
      title: 'Future Impact',
      description: 'Begin career as software engineer and give back to the community.',
      icon: '🚀',
      status: 'pending'
    }
  ];

  return (
    <section id="milestones" className="py-32 bg-gradient-to-br from-[--soft-cream] to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Academic <span className="gradient-text">Milestones</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From my first day at university to my final semester challenges, here's my complete academic journey.
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-200 to-green-200"></div>

          {/* Milestones */}
          <div className="space-y-16">
            {milestones.map((milestone, index) => (
              <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                {/* Content */}
                <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                  <div className={`card hover:shadow-xl transition-all duration-300 ${
                    milestone.status === 'current' ? 'ring-2 ring-blue-500 ring-opacity-50' : ''
                  }`}>
                    <div className="flex items-center mb-4">
                      <span className="text-3xl mr-3">{milestone.icon}</span>
                      <div className="flex-1">
                        <h3 className="font-serif text-xl font-semibold text-gray-900">{milestone.title}</h3>
                        <span className="text-sm text-gray-500">{milestone.year}</span>
                      </div>
                    </div>
                    <p className="text-gray-600 leading-relaxed">{milestone.description}</p>
                    
                    {/* Status Badge */}
                    <div className="mt-4">
                      {milestone.status === 'completed' && (
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                          <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></span>
                          Completed
                        </span>
                      )}
                      {milestone.status === 'current' && (
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                          <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2 animate-pulse"></span>
                          Current
                        </span>
                      )}
                      {milestone.status === 'pending' && (
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                          <span className="w-1.5 h-1.5 bg-gray-500 rounded-full mr-2"></span>
                          Pending
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Timeline Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                  <div className={`w-6 h-6 rounded-full border-4 border-white shadow-lg ${
                    milestone.status === 'completed' ? 'bg-green-500' :
                    milestone.status === 'current' ? 'bg-blue-500 animate-pulse' :
                    'bg-gray-300'
                  }`}></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Current Challenge */}
        <div className="mt-16 bg-gradient-to-r from-blue-50 to-green-50 rounded-3xl p-8 border border-blue-200">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl text-white">🎯</span>
            </div>
            <h3 className="font-serif text-2xl font-semibold text-gray-900 mb-4">
              The Final Hurdle
            </h3>
            <p className="text-gray-700 max-w-3xl mx-auto mb-6">
              I'm so close to achieving my dream of graduating with a Computer Science degree. With just 2 months left, 
              financial challenges threaten to delay everything I've worked for over the past 4 years.
            </p>
            <div className="flex justify-center">
              <div className="inline-flex items-center px-6 py-3 bg-white rounded-full shadow-sm border">
                <span className="text-blue-600 mr-2">💪</span>
                <span className="text-gray-700 font-medium">Your support can make this dream a reality</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Milestones;