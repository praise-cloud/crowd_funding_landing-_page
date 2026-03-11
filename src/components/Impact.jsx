import React from 'react';
import impactImage from '../assets/images/OIP-2831072625.jpg';

const Impact = () => {
  const metrics = [
    { value: '24-72 hrs', label: 'Emergency response window' },
    { value: '120+', label: 'Children supported target' },
    { value: '14', label: 'Verified clinic partners' },
    { value: '90%+', label: 'Funds to direct care' }
  ];

  return (
    <section id="impact" className="py-24 md:py-32 bg-[--soft-cream]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 md:mb-20 reveal" data-reveal>
          <div className="text-sm uppercase tracking-[0.2em] text-rose-500 font-semibold">Impact</div>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 mt-3">
            Proven Results, Measurable Protection
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mt-6">
            We operate with professional standards, measurable outcomes, and clear reporting for every donor.
          </p>
        </div>
      </div>

      <div className="relative overflow-hidden h-[70vh] min-h-[460px] reveal mx-40 rounded-2xl" data-reveal>
        <img
          src={impactImage}
          alt="Child receiving support"
          className="w-full h-full object-cover cinematic-zoom"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/75 via-slate-900/25 to-transparent"></div>
        <div className="absolute inset-0 flex items-end">
          <div className="p-8 md:p-12 text-white max-w-2xl">
            <div className="text-xs uppercase tracking-[0.2em] text-white/70">Impact in action</div>
            <div className="text-3xl md:text-4xl font-extrabold mt-3">Every response builds a safer future</div>
            <p className="text-white/80 mt-4 text-base md:text-lg">
              Our teams coordinate rapid medical intervention, protective services, and recovery planning for children
              facing urgent risk.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 md:mt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, index) => (
            <div key={metric.label} className="stat-card reveal" data-reveal data-reveal-delay={index * 120}>
              <div className="text-3xl font-extrabold text-rose-600">{metric.value}</div>
              <div className="text-sm text-gray-600 mt-2">{metric.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Impact;