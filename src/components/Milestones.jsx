import React from 'react';

const Milestones = () => {
  const milestones = [
    {
      year: '2021',
      title: 'Started University Journey',
      description: 'Began Computer Science program with determination and passion for technology.',
      icon: '\u{1F393}',
      status: 'completed'
    },
    {
      year: '2022',
      title: 'Academic Excellence',
      description: "Achieved 3.8 GPA and joined the Dean's List for outstanding academic performance.",
      icon: '\u2B50',
      status: 'completed'
    },
    {
      year: '2023',
      title: 'Internship & Projects',
      description: 'Completed software development internship and built multiple real-world applications.',
      icon: '\u{1F4BB}',
      status: 'completed'
    },
    {
      year: '2024',
      title: 'Final Year Challenges',
      description: 'Facing financial constraints that threaten to delay graduation.',
      icon: '\u26A1',
      status: 'current'
    },
    {
      year: '2024',
      title: 'Graduation Goal',
      description: 'Complete final semester and graduate with Computer Science degree.',
      icon: '\u{1F3AF}',
      status: 'pending'
    },
    {
      year: '2025',
      title: 'Future Impact',
      description: 'Begin career as software engineer and give back to the community.',
      icon: '\u{1F680}',
      status: 'pending'
    }
  ];

  return (
    <section id="milestones" className="py-20 md:py-28 bg-gradient-to-br from-[--soft-cream] to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Academic <span className="gradient-text">Milestones</span>
          </h2>
          <p className="text-base sm:text-xl text-gray-600 max-w-3xl mx-auto">
            From my first day at university to my final semester challenges, here is my complete academic journey.
          </p>
        </div>

        <div className="relative pl-8 md:pl-0">
          {/* Timeline line: left on mobile, centered on desktop */}
          <div className="absolute left-3 top-0 h-full w-1 bg-gradient-to-b from-blue-200 to-green-200 md:left-1/2 md:-translate-x-1/2"></div>

          <div className="space-y-8 md:space-y-12">
            {milestones.map((milestone, index) => (
              <div
                key={milestone.title}
                className={`relative flex md:items-center ${index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'}`}
              >
                <div className={`w-full md:w-5/12 md:${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                  <div
                    className={`card hover:shadow-xl transition-all duration-300 ${
                      milestone.status === 'current' ? 'ring-2 ring-blue-500 ring-opacity-50' : ''
                    }`}
                  >
                    <div className="flex items-center mb-4">
                      <span className="text-3xl mr-3">{milestone.icon}</span>
                      <div className="flex-1">
                        <h3 className="font-serif text-lg sm:text-xl font-semibold text-gray-900">{milestone.title}</h3>
                        <span className="text-sm text-gray-500">{milestone.year}</span>
                      </div>
                    </div>
                    <p className="text-gray-600 leading-relaxed">{milestone.description}</p>

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

                <div className="absolute left-3 top-7 -translate-x-1/2 z-10 md:left-1/2 md:top-1/2 md:-translate-y-1/2">
                  <div
                    className={`w-6 h-6 rounded-full border-4 border-white shadow-lg ${
                      milestone.status === 'completed'
                        ? 'bg-green-500'
                        : milestone.status === 'current'
                        ? 'bg-blue-500 animate-pulse'
                        : 'bg-gray-300'
                    }`}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 md:mt-16 bg-gradient-to-r from-blue-50 to-green-50 rounded-3xl p-6 md:p-8 border border-blue-200">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl text-white">{'\u{1F3AF}'}</span>
            </div>
            <h3 className="font-serif text-2xl font-semibold text-gray-900 mb-4">The Final Hurdle</h3>
            <p className="text-gray-700 max-w-3xl mx-auto mb-6">
              I am so close to achieving my dream of graduating with a Computer Science degree. With just a short period left,
              financial challenges threaten to delay everything I have worked for over the past 4 years.
            </p>
            <div className="flex justify-center">
              <div className="inline-flex items-center px-4 sm:px-6 py-3 bg-white rounded-full shadow-sm border text-center">
                <span className="text-blue-600 mr-2">{'\u{1F4AA}'}</span>
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
