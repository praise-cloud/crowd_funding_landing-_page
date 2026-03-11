import React from 'react';
import careImage from '../assets/images/OIP-2831072625.jpg';

const Transparency = () => {
  const transparencyItems = [
    {
      title: 'Medical Updates',
      description: 'We share progress summaries with consented families and anonymized outcomes for transparency.',
      icon: '\u{1F4CB}',
      color: 'blue'
    },
    {
      title: 'Verified Receipts',
      description: 'All hospital invoices, pharmacy receipts, and care grants are documented and reviewed.',
      icon: '\u{1F9FE}',
      color: 'green'
    },
    {
      title: 'Partner Oversight',
      description: 'Clinic partners validate treatment plans and confirm services delivered.',
      icon: '\u{1F52C}',
      color: 'teal'
    },
    {
      title: 'Family Privacy',
      description: 'Children and families are protected with strict confidentiality and consent guidelines.',
      icon: '\u{1F512}',
      color: 'orange'
    }
  ];

  const colorClasses = {
    blue: {
      bg: 'bg-blue-50',
      border: 'border-blue-200',
      icon: 'bg-blue-500',
      text: 'text-blue-700'
    },
    green: {
      bg: 'bg-green-50',
      border: 'border-green-200',
      icon: 'bg-green-500',
      text: 'text-green-700'
    },
    teal: {
      bg: 'bg-teal-50',
      border: 'border-teal-200',
      icon: 'bg-teal-500',
      text: 'text-teal-700'
    },
    orange: {
      bg: 'bg-orange-50',
      border: 'border-orange-200',
      icon: 'bg-orange-500',
      text: 'text-orange-700'
    }
  };

  return (
    <section id="transparency" className="py-20 md:py-28 bg-gradient-to-br from-white to-[--soft-cream]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Complete <span className="gradient-text">Transparency</span>
          </h2>
          <p className="text-base sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Donors deserve clarity. We report every step from funding to treatment outcomes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-12 md:mb-16">
          {transparencyItems.map((item, index) => (
            <div key={index} className={`card hover:shadow-xl transition-all duration-300 ${colorClasses[item.color].bg} ${colorClasses[item.color].border} border-2`}>
              <div className="flex items-start space-x-4">
                <div className={`w-12 h-12 ${colorClasses[item.color].icon} rounded-xl flex items-center justify-center flex-shrink-0`}>
                  <span className="text-xl text-white">{item.icon}</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-serif text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="relative overflow-hidden rounded-[2rem] border border-rose-100 shadow-2xl mb-12">
          <img
            src={careImage}
            alt="Care team supporting a child during treatment"
            className="w-full h-72 md:h-96 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/70 via-slate-900/15 to-transparent"></div>
          <div className="absolute inset-0 flex items-end">
            <div className="p-6 md:p-10 text-white max-w-xl">
              <div className="text-xs uppercase tracking-wider text-white/70">Transparency in action</div>
              <div className="text-2xl md:text-3xl font-semibold mt-2">Clear reporting, compassionate care</div>
              <p className="text-white/80 mt-3 text-sm md:text-base">
                We document care milestones and provide donors with timely, respectful updates.
              </p>
            </div>
          </div>
        </div>

        {/* Commitment Statement */}
        <div className="bg-gradient-to-r from-rose-50 to-orange-50 rounded-3xl p-6 md:p-8 border border-rose-200 mb-12">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-rose-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl text-white">{'\u{1F91D}'}</span>
            </div>
            <h3 className="font-serif text-2xl font-semibold text-gray-900 mb-4">
              Our Promise to Families
            </h3>
            <p className="text-gray-700 max-w-3xl mx-auto mb-6">
              We are accountable to donors and families. Every contribution is tracked, every care decision is documented,
              and outcomes are shared with respect and confidentiality.
            </p>
            <div className="inline-flex items-center px-6 py-3 bg-white rounded-full shadow-sm border">
              <span className="text-rose-600 mr-2">{'\u2728'}</span>
              <span className="text-gray-700 font-medium">Your trust drives our care</span>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="card">
            <h3 className="font-serif text-xl font-semibold text-gray-900 mb-4">Get in Touch</h3>
            <p className="text-gray-600 mb-6">
              Questions about the fund, our partners, or how we deploy care grants? We respond quickly with clear answers.
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <span className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-blue-600">{'\u2709'}</span>
                </span>
                <div>
                  <div className="font-medium text-gray-900">Email</div>
                  <div className="text-sm text-gray-600">care@littleheartsfund.org</div>
                </div>
              </div>
              <div className="flex items-center">
                <span className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-green-600">{'\u260E'}</span>
                </span>
                <div>
                  <div className="font-medium text-gray-900">Phone</div>
                  <div className="text-sm text-gray-600">+1 (555) 246-8090</div>
                </div>
              </div>
              <div className="flex items-center">
                <span className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-teal-600">{'\u{1F3E5}'}</span>
                </span>
                <div>
                  <div className="font-medium text-gray-900">Care Network</div>
                  <div className="text-sm text-gray-600">Regional Partner Clinics</div>
                </div>
              </div>
            </div>
          </div>

          <div className="card">
            <h3 className="font-serif text-xl font-semibold text-gray-900 mb-4">Response Promise</h3>
            <p className="text-gray-600 mb-6">
              We commit to responding to all messages within 24 hours and providing detailed care updates when requested.
            </p>
            <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-4 border border-green-200">
              <div className="flex items-center">
                <span className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white text-sm">{'\u2713'}</span>
                </span>
                <div>
                  <div className="font-medium text-gray-900">24-Hour Response</div>
                  <div className="text-sm text-gray-600">Guaranteed reply to all messages</div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-r from-blue-50 to-teal-50 rounded-xl p-4 border border-blue-200 mt-3">
              <div className="flex items-center">
                <span className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white text-sm">{'\u{1F4CB}'}</span>
                </span>
                <div>
                  <div className="font-medium text-gray-900">Monthly Updates</div>
                  <div className="text-sm text-gray-600">Transparent care reports</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Transparency;
