import React from 'react';

const Milestones = () => {
  const milestones = [
    {
      year: '2026',
      title: 'Organization Launch',
      description: `Hope Harbor Children's Aid activates rapid response protocols for children in crisis.`,
      icon: '\u{1F680}',
      status: 'completed'
    },
    {
      year: '2026',
      title: 'Emergency Care Funding',
      description: `Immediate funding deployed for diagnostics, medications, and surgery support.`,
      icon: '\u2695',
      status: 'completed'
    },
    {
      year: '2026',
      title: 'Family Recovery Support',
      description: `Expanded lodging, nutrition, and counseling coverage for families in crisis.`,
      icon: '\u{1F9E1}',
      status: 'current'
    },
    {
      year: '2026',
      title: 'Care Access Scale-Up',
      description: `Increase clinic capacity and reduce wait times for critical procedures.`,
      icon: '\u{1F4AA}',
      status: 'pending'
    },
    {
      year: '2027',
      title: 'Regional Care Network',
      description: `Sustain a wider care network across hospitals and partner clinics.`,
      icon: '\u{1F4CD}',
      status: 'pending'
    }
  ];

  return (
    <section id="milestones" className="py-20 md:py-28 bg-gradient-to-br from-[--soft-cream] to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16 reveal" data-reveal>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Organization <span className="gradient-text">Timeline</span>
          </h2>
          <p className="text-base sm:text-xl text-gray-600 max-w-3xl mx-auto">
            A clear path from immediate relief to sustainable long-term care for children in need.
          </p>
        </div>

        <div className="relative pl-8 md:pl-0">
          {/* Timeline line: left on mobile, centered on desktop */}
          <div className="absolute left-3 top-0 h-full w-1 bg-gradient-to-b from-rose-200 to-orange-200 md:left-1/2 md:-translate-x-1/2"></div>

          <div className="space-y-8 md:space-y-12">
            {milestones.map((milestone, index) => (
              <div
                key={milestone.title}
                className={`relative flex md:items-center ${index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'} reveal`}
                data-reveal
                data-reveal-delay={index * 120}
              >
                <div className={`w-full md:w-5/12 md:${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                  <div
                    className={`card hover:shadow-xl transition-all duration-300 ${
                      milestone.status === 'current' ? 'ring-2 ring-rose-500 ring-opacity-50' : ''
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
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-rose-100 text-rose-800">
                          <span className="w-1.5 h-1.5 bg-rose-500 rounded-full mr-2 animate-pulse"></span>
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
                        ? 'bg-rose-500 animate-pulse'
                        : 'bg-gray-300'
                    }`}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 md:mt-16 bg-gradient-to-r from-rose-50 to-orange-50 rounded-3xl p-6 md:p-8 border border-rose-200 reveal" data-reveal>
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-rose-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl text-white">{'\u2764'}</span>
            </div>
            <h3 className="font-serif text-2xl font-semibold text-gray-900 mb-4">The Critical Window</h3>
            <p className="text-gray-700 max-w-3xl mx-auto mb-6">
              The next 90 days are vital for children awaiting urgent treatment. Every hour saved improves outcomes
              and helps families move from crisis to recovery.
            </p>
            <div className="flex justify-center">
              <div className="inline-flex items-center px-4 sm:px-6 py-3 bg-white rounded-full shadow-sm border text-center">
                <span className="text-rose-600 mr-2">{'\u271A'}</span>
                <span className="text-gray-700 font-medium">Your support powers immediate care</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Milestones;