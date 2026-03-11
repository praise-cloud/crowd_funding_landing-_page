import React from 'react';
import introImage from '../assets/images/OIP-1545874537.jpg';

const Introduction = () => {
  return (
    <section id="introduction" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="space-y-8">
            <div className="reveal" data-reveal>
              <div className="text-sm uppercase tracking-[0.2em] text-rose-500 font-semibold">Our Mission</div>
              <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 mt-3">
                A Professional Safety Net for Children in Crisis
              </h2>
              <p className="text-lg md:text-xl text-gray-600 mt-6 leading-relaxed">
                Hope Harbor Children's Aid is a trusted relief organization delivering emergency medical care,
                protection, and recovery support. We coordinate with verified clinics, social workers, and community
                partners to keep children safe.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 reveal" data-reveal data-reveal-delay="160">
              <div className="stat-card">
                <div className="text-3xl font-extrabold text-rose-600">72</div>
                <div className="text-sm text-gray-600 mt-2">Projected Urgent Cases</div>
              </div>
              <div className="stat-card">
                <div className="text-3xl font-extrabold text-green-600">14</div>
                <div className="text-sm text-gray-600 mt-2">Clinic Partners Target</div>
              </div>
              <div className="stat-card">
                <div className="text-3xl font-extrabold text-amber-600">45</div>
                <div className="text-sm text-gray-600 mt-2">Quarterly Care Grants</div>
              </div>
              <div className="stat-card">
                <div className="text-3xl font-extrabold text-sky-600">90%+</div>
                <div className="text-sm text-gray-600 mt-2">Targeted for Direct Care</div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-rose-50 to-orange-50 rounded-3xl p-6 border border-rose-100 reveal" data-reveal data-reveal-delay="260">
              <h3 className="font-serif text-2xl font-bold text-gray-900">How Your Support Helps</h3>
              <p className="text-gray-700 mt-3 leading-relaxed">
                Donations fund emergency treatment, safe housing, nutrition, and counseling so children and families
                can recover with dignity.
              </p>
            </div>
          </div>

          <div className="relative reveal" data-reveal>
            <div className="relative rounded-[2.5rem] overflow-hidden h-[70vh] min-h-[460px] border border-rose-100 shadow-2xl">
              <img
                src={introImage}
                alt="Care team supporting a child"
                className="w-full h-full object-cover cinematic-zoom"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-slate-900/20 to-transparent"></div>
              <div className="absolute bottom-8 left-8 right-8 text-white">
                <div className="text-xs uppercase tracking-[0.2em] text-white/70">Trusted Relief Network</div>
                <div className="text-2xl md:text-3xl font-bold mt-2">Rapid response, real protection</div>
              </div>
            </div>
            <div className="absolute -top-6 -right-6 w-20 h-20 bg-gradient-to-br from-rose-500 to-orange-500 rounded-2xl shadow-xl micro-float"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;