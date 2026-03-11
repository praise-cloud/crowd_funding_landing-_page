import React from 'react';
import heroImage from '../assets/images/WhatsApp Image 2026-03-11 at 8.46.58 AM.jpeg';

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-[85vh] sm:min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[--soft-cream] via-white to-rose-50"></div>

      {/* Elegant Pattern Overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230B1C2D' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="text-center lg:text-left">
            {/* Main Heading */}
            <h1 className="font-serif text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-5 sm:mb-6 leading-tight">
              Help Children Fight{' '}
              <span className="bg-gradient-to-r from-rose-500 to-orange-500 bg-clip-text text-transparent">
                Life-Threatening Illness
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg md:text-2xl text-gray-600 mb-8 max-w-2xl leading-relaxed">
              Hope for Little Hearts is raising emergency funds for children facing critical illness.
              Your gift provides urgent treatment, medications, and compassionate family support.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start items-stretch sm:items-center mb-10 sm:mb-12">
              <button
                onClick={() => document.getElementById('donate').scrollIntoView({ behavior: 'smooth' })}
                className="btn-primary text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto"
              >
                Give Emergency Care
              </button>
              <button
                onClick={() => document.getElementById('introduction').scrollIntoView({ behavior: 'smooth' })}
                className="btn-secondary text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto"
              >
                Learn the Mission
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-8 max-w-2xl mx-auto lg:mx-0">
              <div className="text-center lg:text-left">
                <div className="text-3xl md:text-4xl font-bold text-rose-600 mb-2">$75,000</div>
                <div className="text-gray-600">Goal Amount</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">120</div>
                <div className="text-gray-600">Care Grants Target</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl md:text-4xl font-bold text-orange-600 mb-2">6</div>
                <div className="text-gray-600">Clinic Partners Target</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -top-6 -right-6 w-28 h-28 rounded-3xl bg-gradient-to-br from-rose-200 to-orange-200 blur-xl opacity-70"></div>
            <div className="absolute -bottom-6 -left-6 w-28 h-28 rounded-3xl bg-gradient-to-br from-amber-100 to-yellow-200 blur-xl opacity-70"></div>
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border border-rose-100">
              <img
                src={heroImage}
                alt="Children receiving care and support"
                className="w-full h-[360px] sm:h-[420px] md:h-[480px] object-cover"
              />
            </div>
            <div className="absolute -bottom-4 right-6 bg-white/90 backdrop-blur rounded-2xl px-4 py-3 shadow-lg border border-rose-100">
              <div className="text-xs uppercase tracking-wide text-gray-500 mb-1">Urgent Need</div>
              <div className="text-sm font-semibold text-gray-900">Critical treatment gap this month</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="hidden sm:block absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
