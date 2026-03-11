import React from 'react';
import heroImage from '../assets/images/WhatsApp Image 2026-03-11 at 8.46.58 AM.jpeg';

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden mx-10 rounded-2xl">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Children receiving care and support"
          className="w-full h-full object-cover cinematic-zoom"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/70 via-slate-900/40 to-rose-900/20"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-5 py-2 text-xs uppercase tracking-[0.2em] text-white mb-6 reveal" data-reveal>
          Professional Child Relief Organization
        </div>

        <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold text-white leading-tight reveal" data-reveal data-reveal-delay="120">
          Hope Harbor Children's Aid
          <span className="block text-rose-200">Protecting Every Child, Every Day</span>
        </h1>

        <p className="mt-6 text-base sm:text-lg md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed reveal" data-reveal data-reveal-delay="220">
          We deliver emergency medical care, shelter, and recovery services for vulnerable children.
          Your support powers rapid response teams and trusted community partners.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-stretch sm:items-center reveal" data-reveal data-reveal-delay="320">
          <button
            onClick={() => document.getElementById('donate').scrollIntoView({ behavior: 'smooth' })}
            className="btn-primary text-base sm:text-lg px-8 py-4 w-full sm:w-auto"
          >
            Support a Child
          </button>
          <button
            onClick={() => document.getElementById('introduction').scrollIntoView({ behavior: 'smooth' })}
            className="btn-secondary text-base sm:text-lg px-8 py-4 w-full sm:w-auto"
          >
            Learn About Us
          </button>
        </div>

        <div className="my-16 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto reveal " data-reveal data-reveal-delay="420">
          <div className="glass-card">
            <div className="text-3xl md:text-4xl font-extrabold text-white">$75,000</div>
            <div className="text-white/70 mt-2">Quarterly Relief Goal</div>
          </div>
          <div className="glass-card">
            <div className="text-3xl md:text-4xl font-extrabold text-white">120</div>
            <div className="text-white/70 mt-2">Children Supported Target</div>
          </div>
          <div className="glass-card">
            <div className="text-3xl md:text-4xl font-extrabold text-white">6</div>
            <div className="text-white/70 mt-2">Partner Clinics Target</div>
          </div>
        </div>
      </div>

      <div className="hidden sm:block absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;