import React from 'react';
import approachImage from '../assets/images/OIP-1469777345.jpg';

const Approach = () => {
  const steps = [
    {
      title: 'Rapid Intake',
      description: 'We triage urgent cases in partnership with clinics and social workers within 24 hours.'
    },
    {
      title: 'Care Deployment',
      description: 'Funding is released directly to verified providers for treatment, shelter, and recovery support.'
    },
    {
      title: 'Family Stabilization',
      description: 'We coordinate transport, counseling, and follow-up so families stay supported.'
    }
  ];

  return (
    <section id="approach" className="py-24 md:py-32 bg-[--soft-cream]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 md:mb-20 reveal" data-reveal>
          <div className="text-sm uppercase tracking-[0.2em] text-rose-500 font-semibold">How We Work</div>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 mt-3">
            Fast, Verified, Child-First Response
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mt-6">
            Our workflow ensures every child receives care quickly, safely, and with transparent reporting.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
          <div className="space-y-6">
            {steps.map((step, index) => (
              <div key={step.title} className="card hover-lift reveal" data-reveal data-reveal-delay={index * 120}>
                <div className="text-sm uppercase tracking-[0.2em] text-rose-500 font-semibold">Step {index + 1}</div>
                <h3 className="font-serif text-2xl font-bold text-gray-900 mt-3">{step.title}</h3>
                <p className="text-gray-600 mt-3 text-lg leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>

          <div className="relative reveal" data-reveal>
            <div className="relative rounded-[2.5rem] overflow-hidden h-[70vh] min-h-[460px] border border-rose-100 shadow-2xl">
              <img
                src={approachImage}
                alt="Care coordination and emergency response"
                className="w-full h-full object-cover cinematic-zoom"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/65 via-slate-900/20 to-transparent"></div>
              <div className="absolute bottom-8 left-8 right-8 text-white">
                <div className="text-xs uppercase tracking-[0.2em] text-white/70">Verified Response</div>
                <div className="text-2xl md:text-3xl font-bold mt-3">Every action is documented and accountable</div>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-20 h-20 bg-gradient-to-br from-rose-500 to-orange-500 rounded-2xl shadow-xl micro-float"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Approach;