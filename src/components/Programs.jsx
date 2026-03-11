import React from 'react';
import programImage from '../assets/images/OIP-3107163405.jpg';

const Programs = () => {
  const programs = [
    {
      title: 'Emergency Medical Care',
      description: 'Rapid funding for surgeries, diagnostics, and lifesaving treatments within 24-72 hours.'
    },
    {
      title: 'Safe Shelter & Protection',
      description: 'Immediate placement, secure housing, and protection services for children at risk.'
    },
    {
      title: 'Recovery & Counseling',
      description: 'Trauma-informed counseling, nutrition support, and long-term recovery planning.'
    },
    {
      title: 'Family Stabilization',
      description: 'Care coordination, travel support, and social services for caregivers.'
    }
  ];

  return (
    <section id="programs" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 md:mb-20 reveal" data-reveal>
          <div className="text-sm uppercase tracking-[0.2em] text-rose-500 font-semibold">Our Programs</div>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 mt-3">
            Direct Services That Protect Children
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mt-6">
            Every program is built to deliver immediate protection, medical care, and recovery support for vulnerable children.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
          <div className="space-y-6">
            {programs.map((program, index) => (
              <div key={program.title} className="card hover-lift reveal" data-reveal data-reveal-delay={index * 120}>
                <h3 className="font-serif text-2xl font-bold text-gray-900">{program.title}</h3>
                <p className="text-gray-600 mt-3 text-lg leading-relaxed">{program.description}</p>
              </div>
            ))}
          </div>

          <div className="relative reveal" data-reveal>
            <div className="relative rounded-[2.5rem] overflow-hidden h-[70vh] min-h-[460px] border border-rose-100 shadow-2xl">
              <img
                src={programImage}
                alt="Care professionals supporting a child"
                className="w-full h-full object-cover cinematic-zoom"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/65 via-slate-900/20 to-transparent"></div>
              <div className="absolute bottom-8 left-8 right-8 text-white">
                <div className="text-xs uppercase tracking-[0.2em] text-white/70">On-the-ground Relief</div>
                <div className="text-2xl md:text-3xl font-bold mt-3">Every program delivers immediate protection</div>
              </div>
            </div>
            <div className="absolute -top-6 -left-6 w-20 h-20 bg-gradient-to-br from-rose-500 to-orange-500 rounded-2xl shadow-xl micro-float"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Programs;