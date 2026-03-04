import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-[--primary-dark] to-[--secondary-dark] text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mr-3">
                <span className="text-white font-bold text-lg">P</span>
              </div>
              <div>
                <h3 className="font-serif font-semibold text-lg">Precious Osuji</h3>
                <p className="text-gray-300 text-sm">Academic Completion Fund</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              A dedicated Computer Science student with a 3.8 GPA, working towards graduation and a future in software engineering.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#introduction" className="text-gray-300 hover:text-white transition-colors text-sm">
                  About My Journey
                </a>
              </li>
              <li>
                <a href="#funding" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Funding Breakdown
                </a>
              </li>
              <li>
                <a href="#milestones" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Academic Milestones
                </a>
              </li>
              <li>
                <a href="#transparency" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Transparency
                </a>
              </li>
            </ul>
          </div>

          {/* Support Methods */}
          <div>
            <h3 className="font-serif font-semibold text-lg mb-4">Support Methods</h3>
            <ul className="space-y-2">
              <li>
                <button className="text-gray-300 hover:text-white transition-colors text-sm text-left">
                  PayPal Donation
                </button>
              </li>
              <li>
                <button className="text-gray-300 hover:text-white transition-colors text-sm text-left">
                  Grey USD Transfer
                </button>
              </li>
              <li>
                <button className="text-gray-300 hover:text-white transition-colors text-sm text-left">
                  Direct Sponsorship
                </button>
              </li>
              <li>
                <a href="mailto:precious@example.com" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Contact for Questions
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-serif font-semibold text-lg mb-4">Get in Touch</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <span className="w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                  <span className="text-white text-xs">@</span>
                </span>
                <span className="text-gray-300 text-sm">precious@example.com</span>
              </div>
              <div className="flex items-center">
                <span className="w-5 h-5 bg-green-600 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                  <span className="text-white text-xs">📱</span>
                </span>
                <span className="text-gray-300 text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <span className="w-5 h-5 bg-purple-600 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                  <span className="text-white text-xs">🎓</span>
                </span>
                <span className="text-gray-300 text-sm">State University</span>
              </div>
            </div>

            {/* Social Proof */}
            <div className="mt-6">
              <div className="text-xs text-gray-400 mb-2">Response Time</div>
              <div className="inline-flex items-center px-3 py-1 bg-green-900/30 rounded-full text-green-300 text-xs">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
                24-Hour Response
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-300 text-sm">
              © 2024 Precious Osuji. All rights reserved.
            </p>
            <p className="text-gray-400 text-xs mt-1">
              Your support means the world to me and my academic future.
            </p>
          </div>

          <div className="flex items-center space-x-4">
            <div className="text-right">
              <div className="text-xs text-gray-400">Last Updated</div>
              <div className="text-sm text-gray-300">March 4, 2024</div>
            </div>
            <div className="flex space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white text-sm">✓</span>
              </div>
              <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
                <span className="text-white text-sm">🛡️</span>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-8 pt-6 border-t border-gray-700">
          <div className="flex flex-wrap justify-center items-center gap-4 text-xs text-gray-400">
            <div className="flex items-center">
              <span className="w-3 h-3 bg-green-500 rounded-full mr-2"></span>
              Secure Payment Processing
            </div>
            <div className="flex items-center">
              <span className="w-3 h-3 bg-blue-500 rounded-full mr-2"></span>
              Transparent Updates
            </div>
            <div className="flex items-center">
              <span className="w-3 h-3 bg-purple-500 rounded-full mr-2"></span>
              Direct Communication
            </div>
            <div className="flex items-center">
              <span className="w-3 h-3 bg-orange-500 rounded-full mr-2"></span>
              Academic Verification
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;