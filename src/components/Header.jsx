import React, { useState, useEffect } from 'react';
import { useScrollTo } from '../hooks/useScrollTo';

const Header = ({ onContributeClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollToSection } = useScrollTo();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId) => {
    // Close mobile menu if open
    setIsMobileMenuOpen(false);
    
    // Smooth scroll to section with React Router hash navigation
    scrollToSection(sectionId);
  };

  const handleContributeFromMenu = () => {
    setIsMobileMenuOpen(false);
    onContributeClick();
  };

  const navigationItems = [
    { label: 'Mission', section: 'introduction' },
    { label: 'Funding', section: 'funding' },
    { label: 'Timeline', section: 'milestones' },
    { label: 'Transparency', section: 'transparency' },
    { label: 'Donate', section: 'donate' }
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3 sm:py-4">
          {/* Logo */}
          <div className="flex items-center">
            <div className="w-9 h-9 sm:w-10 sm:h-10 bg-gradient-to-br from-rose-500 to-orange-500 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-base sm:text-lg">H</span>
            </div>
            <div className="ml-3">
              <h1 className="font-serif font-semibold text-base sm:text-lg text-gray-900">Hope for Little Hearts</h1>
              <p className="hidden sm:block text-sm text-gray-600">Pediatric Care Relief Fund</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.section)}
                className="text-gray-700 hover:text-rose-600 font-medium transition-colors duration-200"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Contribute Button */}
          <div className="flex items-center space-x-4">
            <button
              onClick={onContributeClick}
              className="hidden sm:inline-flex bg-gradient-to-r from-rose-500 to-orange-500 text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              Give Now
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              type="button"
              aria-label="Toggle navigation menu"
              className="md:hidden p-2 rounded-lg text-gray-600 hover:text-rose-600 hover:bg-gray-100 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 ${isMobileMenuOpen ? 'max-h-96 opacity-100 py-2' : 'max-h-0 opacity-0'} overflow-hidden`}>
          <nav className="py-4 space-y-2">
            {navigationItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.section)}
                className="block w-full text-left px-4 py-3 text-gray-700 hover:text-rose-600 hover:bg-gray-50 rounded-lg font-medium transition-colors duration-200"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={handleContributeFromMenu}
              className="block w-full text-left px-4 py-3 bg-rose-500 text-white rounded-lg font-medium transition-colors duration-200 hover:bg-rose-600"
            >
              Give Now
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
