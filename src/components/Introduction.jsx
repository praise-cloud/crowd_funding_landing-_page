import React from 'react';

const Introduction = () => {
  return (
    <section id="introduction" className="py-32 bg-gradient-to-br from-white to-[--soft-cream]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About <span className="gradient-text">My Journey</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From humble beginnings to academic excellence, this is my story of perseverance, dedication, and the pursuit of knowledge.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image/Visual */}
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-3xl p-8 h-96 flex items-center justify-center">
              <div className="text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-4xl text-white">🎓</span>
                </div>
                <h3 className="font-serif text-2xl font-semibold text-gray-900 mb-2">Precious Osuji</h3>
                <p className="text-gray-600">Computer Science Student</p>
                <div className="mt-4 inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  3.8 GPA
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg">
              <span className="text-2xl text-white">⭐</span>
            </div>
            <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-xl text-white">📚</span>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div>
              <h3 className="font-serif text-3xl font-semibold text-gray-900 mb-4">
                My Academic Journey
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                I'm a final-year Computer Science student with a 3.8 GPA, passionate about technology and its potential to solve real-world problems. My academic journey has been filled with challenges, but through determination and hard work, I've maintained excellence throughout my studies.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Growing up, I always had a fascination with computers and how they work. This curiosity led me to pursue Computer Science, where I've discovered my love for software development, algorithms, and creating innovative solutions.
              </p>
            </div>

            {/* Key Statistics */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 text-center border border-blue-200">
                <div className="text-3xl font-bold text-blue-600 mb-2">3.8</div>
                <div className="text-sm text-gray-600 font-medium">Current GPA</div>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-6 text-center border border-green-200">
                <div className="text-3xl font-bold text-green-600 mb-2">2</div>
                <div className="text-sm text-gray-600 font-medium">Months to Graduation</div>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-6 text-center border border-purple-200">
                <div className="text-3xl font-bold text-purple-600 mb-2">4</div>
                <div className="text-sm text-gray-600 font-medium">Years of Study</div>
              </div>
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-6 text-center border border-orange-200">
                <div className="text-3xl font-bold text-orange-600 mb-2">A</div>
                <div className="text-sm text-gray-600 font-medium">Grade Average</div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-6 border border-blue-100">
              <h4 className="font-serif text-xl font-semibold text-gray-900 mb-3">
                Why I Need Your Support
              </h4>
              <p className="text-gray-700 leading-relaxed">
                Despite my academic achievements, financial constraints threaten to derail my final semester. Your support will help me complete my degree and pursue my dream of becoming a software engineer who can give back to the community.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;