import React from 'react';
import introImage from '../assets/images/OIP-1545874537.jpg';

const Introduction = () => {
  return (
    <section id="introduction" className="py-20 md:py-28 bg-gradient-to-br from-white to-[--soft-cream]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="gradient-text">Mission</span>
          </h2>
          <p className="text-base sm:text-xl text-gray-600 max-w-3xl mx-auto">
            We fund urgent pediatric care so children can access treatment fast, without families facing impossible choices.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Image/Visual */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden h-80 sm:h-96 border border-rose-100 shadow-xl">
              <img
                src={introImage}
                alt="Care team supporting a child"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/20 to-transparent"></div>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
                <div className="w-20 h-20 bg-gradient-to-br from-rose-500 to-orange-500 rounded-full flex items-center justify-center mb-4 shadow-lg">
                  <span className="text-3xl text-white">{'\u2764'}</span>
                </div>
                <h3 className="font-serif text-2xl font-semibold text-white mb-2">Hope for Little Hearts</h3>
                <p className="text-white/80">Emergency Pediatric Care</p>
                <div className="mt-4 inline-flex items-center px-4 py-2 bg-white/90 text-slate-800 rounded-full text-sm font-medium">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></span>
                  24/7 Response Network
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg">
              <span className="text-2xl text-white">{'\u2605'}</span>
            </div>
            <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-xl text-white">{'\u271A'}</span>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div>
              <h3 className="font-serif text-3xl font-semibold text-gray-900 mb-4">
                Why This Fund Exists
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                When children become seriously ill, the cost of emergency treatment can delay care. We close that gap by funding
                urgent diagnostics, medications, surgery support, and safe recovery resources for families.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Every gift helps a child receive timely care and helps parents focus on healing instead of bills. We partner with
                clinics to move funds quickly and track every expense with clear reporting.
              </p>
            </div>

            {/* Key Statistics */}
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              <div className="bg-gradient-to-br from-rose-50 to-rose-100 rounded-2xl p-4 sm:p-6 text-center border border-rose-200">
                <div className="text-3xl font-bold text-rose-600 mb-2">72</div>
                <div className="text-sm text-gray-600 font-medium">Projected Urgent Cases</div>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-4 sm:p-6 text-center border border-green-200">
                <div className="text-3xl font-bold text-green-600 mb-2">14</div>
                <div className="text-sm text-gray-600 font-medium">Clinic Partners Target</div>
              </div>
              <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-2xl p-4 sm:p-6 text-center border border-amber-200">
                <div className="text-3xl font-bold text-amber-600 mb-2">45</div>
                <div className="text-sm text-gray-600 font-medium">Quarterly Care Grants Target</div>
              </div>
              <div className="bg-gradient-to-br from-sky-50 to-sky-100 rounded-2xl p-4 sm:p-6 text-center border border-sky-200">
                <div className="text-3xl font-bold text-sky-600 mb-2">90%+</div>
                <div className="text-sm text-gray-600 font-medium">Targeted for Direct Care</div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="bg-gradient-to-r from-rose-50 to-orange-50 rounded-2xl p-6 border border-rose-100">
              <h4 className="font-serif text-xl font-semibold text-gray-900 mb-3">
                Why Your Gift Matters
              </h4>
              <p className="text-gray-700 leading-relaxed">
                Families should never have to choose between care and cost. Your support helps children receive treatment on time
                and gives parents space to focus on their child's recovery.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
