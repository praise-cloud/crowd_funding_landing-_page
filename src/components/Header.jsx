import React, { useState } from 'react';
import { useScrollTo } from '../hooks/useScrollTo';
import {
  HiOutlineHeart,
  HiOutlineSparkles,
  HiOutlineBuildingOffice2,
  HiOutlineChartBar,
  HiOutlineHandRaised,
  HiOutlineChevronUp
} from 'react-icons/hi2';

const Header = ({ onContributeClick }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollToSection } = useScrollTo();

  const handleNavClick = (sectionId) => {
    setIsMobileMenuOpen(false);
    scrollToSection(sectionId);
  };

  const navigationItems = [
    { label: 'Mission', section: 'introduction', icon: HiOutlineHeart },
    { label: 'Approach', section: 'approach', icon: HiOutlineSparkles },
    { label: 'Programs', section: 'programs', icon: HiOutlineBuildingOffice2 },
    { label: 'Impact', section: 'impact', icon: HiOutlineChartBar }
  ];

  return (
    <header className="fixed top-4 left-1/2 z-50 -translate-x-1/2">
      <div className="hidden md:flex items-center gap-24 px-6 py-4 rounded-2xl bg-white/40 backdrop-blur-md shadow-xl border border-white/40">
        <div className="flex items-center gap-3 pr-2 border-r border-rose-100">
          <a href="#" className="w-9 h-9 rounded-full bg-gradient-to-br from-rose-500 to-orange-500 flex items-center justify-center text-white font-extrabold">
            H
          </a>
          <div className="text-left">
            <div className="text-sm font-semibold text-gray-900 leading-tight">Hope Harbor</div>
            <div className="text-[0.65rem] uppercase tracking-[0.2em] text-gray-500">Children's Aid</div>
          </div>
        </div>
        <div className="flex items-center gap-6 pr-2">
          {navigationItems.map((item) => (
            <button
              key={item.label}
              onClick={() => handleNavClick(item.section)}
              className="text-md font-semibold text-gray-700 hover:text-rose-600 transition-colors duration-200"
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={onContributeClick}
            className="bg-gradient-to-r from-rose-500 to-orange-500 text-white px-5 py-2 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
          >
            Donate
          </button>
        </div>
      </div>

      <div className="md:hidden relative">
        <div className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-white/50 backdrop-blur-md shadow-xl border border-white/40">
          <a href="#" className="w-8 h-8 rounded-full bg-gradient-to-br from-rose-500 to-orange-500 flex items-center justify-center text-white font-extrabold">
            H
          </a>
          {navigationItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.section)}
                className="p-2 rounded-full text-gray-700 hover:text-rose-600 transition-colors duration-200"
                aria-label={item.label}
              >
                <Icon className="h-5 w-5" />
              </button>
            );
          })}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            type="button"
            aria-label="Toggle navigation menu"
            className="p-2 rounded-full bg-rose-500 text-white"
          >
            <HiOutlineChevronUp className={`h-5 w-5 transition-transform ${isMobileMenuOpen ? 'rotate-180' : ''}`} />
          </button>
        </div>

        <div className={`absolute left-1/2 -translate-x-1/2 mt-3 w-full rounded-2xl bg-white/95 backdrop-blur-md shadow-xl border border-white/60 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'}`}>
          <div className="p-2">
            {navigationItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item.section)}
                  className="w-full flex items-center gap-3 px-3 py-4 rounded-xl text-sm font-semibold text-gray-700 hover:text-rose-600 hover:bg-rose-50 transition-colors"
                >
                  <Icon className="h-5 w-5" />
                  <span>{item.label}</span>
                </button>
              );
            })}
            <button
              onClick={onContributeClick}
              className="mt-2 w-full flex items-center justify-center gap-2 px-3 py-3 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-rose-500 to-orange-500"
            >
              <HiOutlineHandRaised className="h-5 w-5" />
              Donate
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;