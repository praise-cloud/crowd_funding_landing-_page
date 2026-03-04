import React from 'react';

const Transparency = () => {
  const transparencyItems = [
    {
      title: "Regular Updates",
      description: "I will provide monthly updates on my academic progress, grades, and how your support is making a difference.",
      icon: "📊",
      color: "blue"
    },
    {
      title: "Receipt Sharing",
      description: "All tuition payments, examination fees, and academic expenses will be documented with receipts shared transparently.",
      icon: "🧾",
      color: "green"
    },
    {
      title: "Academic Records",
      description: "I will share my academic transcripts and grades to show my commitment and progress throughout the semester.",
      icon: "📈",
      color: "purple"
    },
    {
      title: "Open Communication",
      description: "Direct email access for any questions, concerns, or requests for additional information about my journey.",
      icon: "💬",
      color: "orange"
    }
  ];

  const colorClasses = {
    blue: {
      bg: "bg-blue-50",
      border: "border-blue-200",
      icon: "bg-blue-500",
      text: "text-blue-700"
    },
    green: {
      bg: "bg-green-50",
      border: "border-green-200",
      icon: "bg-green-500",
      text: "text-green-700"
    },
    purple: {
      bg: "bg-purple-50",
      border: "border-purple-200",
      icon: "bg-purple-500",
      text: "text-purple-700"
    },
    orange: {
      bg: "bg-orange-50",
      border: "border-orange-200",
      icon: "bg-orange-500",
      text: "text-orange-700"
    }
  };

  return (
    <section id="transparency" className="py-32 bg-gradient-to-br from-white to-[--soft-cream]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Complete <span className="gradient-text">Transparency</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            I believe in complete openness with my supporters. Here's how I'll keep you informed every step of the way.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
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

        {/* Commitment Statement */}
        <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-3xl p-8 border border-blue-200 mb-12">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl text-white">🤝</span>
            </div>
            <h3 className="font-serif text-2xl font-semibold text-gray-900 mb-4">
              My Commitment to You
            </h3>
            <p className="text-gray-700 max-w-3xl mx-auto mb-6">
              As someone who has received support throughout my academic journey, I understand the importance of transparency and accountability.
              Your trust in me means everything, and I will honor that trust by providing complete visibility into how your contributions are used.
            </p>
            <div className="inline-flex items-center px-6 py-3 bg-white rounded-full shadow-sm border">
              <span className="text-blue-600 mr-2">✨</span>
              <span className="text-gray-700 font-medium">Your support is an investment in my future</span>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="card">
            <h3 className="font-serif text-xl font-semibold text-gray-900 mb-4">Get in Touch</h3>
            <p className="text-gray-600 mb-6">
              Have questions about my journey, academic progress, or how your support will be used? I'm here to provide any information you need.
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <span className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-blue-600">📧</span>
                </span>
                <div>
                  <div className="font-medium text-gray-900">Email</div>
                  <div className="text-sm text-gray-600">qosuji13@gmail.com</div>
                </div>
              </div>
              <div className="flex items-center">
                <span className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-green-600">📱</span>
                </span>
                <div>
                  <div className="font-medium text-gray-900">Phone</div>
                  <div className="text-sm text-gray-600">+234 813 449 </div>
                </div>
              </div>
              <div className="flex items-center">
                <span className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-purple-600">🎓</span>
                </span>
                <div>
                  <div className="font-medium text-gray-900">University</div>
                  <div className="text-sm text-gray-600">State University</div>
                </div>
              </div>
            </div>
          </div>

          <div className="card">
            <h3 className="font-serif text-xl font-semibold text-gray-900 mb-4">Response Promise</h3>
            <p className="text-gray-600 mb-6">
              I commit to responding to all messages within 24 hours and providing detailed updates as requested.
            </p>
            <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-4 border border-green-200">
              <div className="flex items-center">
                <span className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white text-sm">✓</span>
                </span>
                <div>
                  <div className="font-medium text-gray-900">24-Hour Response</div>
                  <div className="text-sm text-gray-600">Guaranteed reply to all messages</div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-4 border border-blue-200 mt-3">
              <div className="flex items-center">
                <span className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white text-sm">📊</span>
                </span>
                <div>
                  <div className="font-medium text-gray-900">Monthly Updates</div>
                  <div className="text-sm text-gray-600">Detailed progress reports</div>
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