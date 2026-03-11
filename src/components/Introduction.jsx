import React from 'react';
import introImage from '../assets/images/OIP-1545874537.jpg';

const Introduction = () => {
  return (
    <section id="introduction" className="py-20 md:py-28 bg-gradient-to-br from-white to-[--soft-cream]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16 reveal" data-reveal>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="gradient-text">Mission</span>
          </h2>
          <p className="text-base sm:text-xl text-gray-600 max-w-3xl mx-auto">
            We are a professional child aid organization committed to providing emergency relief, medical support,
            and long-term recovery services for children facing hardship.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Image/Visual */}
          <div className="relative reveal" data-reveal>
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
                <h3 className="font-serif text-2xl font-semibold text-white mb-2">Hope Harbor Children's Aid</h3>
                <p className="text-white/80">Emergency Response + Recovery</p>
                <div className="mt-4 inline-flex items-center px-4 py-2 bg-white/90 text-slate-800 rounded-full text-sm font-medium">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></span>
                  Verified Community Partners
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg micro-float">
              <span className="text-2xl text-white">{'\u2605'}</span>
            </div>
            <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg micro-float">
              <span className="text-xl text-white">{'\u271A'}</span>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div className="reveal" data-reveal data-reveal-delay="120">
              <h3 className="font-serif text-3xl font-semibold text-gray-900 mb-4">
                Why We Exist
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Children in crisis need rapid, coordinated help. We provide emergency medical care, safe shelter,
                nutrition support, and family counseling so no child is left without protection.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Our team works directly with trusted clinics and social workers to deliver care quickly and responsibly.
                Every donation is managed with transparency and documented reporting.
              </p>
            </div>

            {/* Key Statistics */}
            <div className="grid grid-cols-2 gap-4 sm:gap-6 reveal" data-reveal data-reveal-delay="220">
              <div className="bg-gradient-to-br from-rose-50 to-rose-100 rounded-2xl p-4 sm:p-6 text-center border border-rose-200 hover-lift">
                <div className="text-3xl font-bold text-rose-600 mb-2">72</div>
                <div className="text-sm text-gray-600 font-medium">Projected Urgent Cases</div>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-4 sm:p-6 text-center border border-green-200 hover-lift">
                <div className="text-3xl font-bold text-green-600 mb-2">14</div>
                <div className="text-sm text-gray-600 font-medium">Clinic Partners Target</div>
              </div>
              <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-2xl p-4 sm:p-6 text-center border border-amber-200 hover-lift">
                <div className="text-3xl font-bold text-amber-600 mb-2">45</div>
                <div className="text-sm text-gray-600 font-medium">Quarterly Care Grants Target</div>
              </div>
              <div className="bg-gradient-to-br from-sky-50 to-sky-100 rounded-2xl p-4 sm:p-6 text-center border border-sky-200 hover-lift">
                <div className="text-3xl font-bold text-sky-600 mb-2">90%+</div>
                <div className="text-sm text-gray-600 font-medium">Targeted for Direct Care</div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="bg-gradient-to-r from-rose-50 to-orange-50 rounded-2xl p-6 border border-rose-100 reveal" data-reveal data-reveal-delay="320">
              <h4 className="font-serif text-xl font-semibold text-gray-900 mb-3">
                How Your Support Helps
              </h4>
              <p className="text-gray-700 leading-relaxed">
                Your contribution ensures children get immediate treatment, safe housing, and recovery services.
                It also helps families navigate care without fear of overwhelming costs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;