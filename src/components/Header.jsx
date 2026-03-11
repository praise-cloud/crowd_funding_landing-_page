import React, { useState } from 'react';
import { useScrollTo } from '../hooks/useScrollTo';

const Header = ({ onContributeClick }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollToSection } = useScrollTo();

  const handleNavClick = (sectionId) => {
    setIsMobileMenuOpen(false);
    scrollToSection(sectionId);
  };

  const navigationItems = [
    { label: 'Mission', section: 'introduction', icon: '\u{1F9ED}' },
    { label: 'Approach', section: 'approach', icon: '\u{1F9E0}' },
    { label: 'Programs', section: 'programs', icon: '\u{1F3E5}' },
    { label: 'Impact', section: 'impact', icon: '\u2728' }
  ];

  return (
    <header className="fixed top-4 left-1/2 z-50 -translate-x-1/2">
      <div className="hidden md:flex items-center gap-6 px-6 py-3 rounded-full bg-white/90 backdrop-blur-md shadow-xl border border-white/40">
        {navigationItems.map((item) => (
          <button
            key={item.label}
            onClick={() => handleNavClick(item.section)}
            className="text-sm font-semibold text-gray-700 hover:text-rose-600 transition-colors duration-200"
          >
            {item.label}
          </button>
        ))}
        <button
          onClick={onContributeClick}
          className="bg-gradient-to-r from-rose-500 to-orange-500 text-white px-5 py-2 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
        >
          Donate
        </button>
      </div>

      <div className="md:hidden flex items-center gap-2 px-3 py-2 rounded-full bg-white/90 backdrop-blur-md shadow-xl border border-white/40">
        {navigationItems.map((item) => (
          <button
            key={item.label}
            onClick={() => handleNavClick(item.section)}
            className="flex items-center gap-2 px-2 py-2 rounded-full text-gray-700 hover:text-rose-600 transition-colors duration-200"
          >
            <span className="text-base">{item.icon}</span>
            <span className={`${isMobileMenuOpen ? 'inline' : 'hidden'} text-xs font-semibold`}>{item.label}</span>
          </button>
        ))}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          type="button"
          aria-label="Toggle navigation labels"
          className="p-2 rounded-full bg-rose-500 text-white"
        >
          {isMobileMenuOpen ? '�' : '+'}
        </button>
      </div>
    </header>
  );
};

export default Header; 