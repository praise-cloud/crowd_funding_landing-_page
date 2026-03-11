import React from 'react';
import Hero from '../components/Hero';
import Introduction from '../components/Introduction';
import Funding from '../components/Funding';
import Milestones from '../components/Milestones';
import Transparency from '../components/Transparency';
import Donate from '../components/Donate';

const HomePage = ({ onPayPalClick, onGreyClick, onSponsorClick }) => {
  return (
    <>
      {/* Hero Section */}
      <section id="hero">
        <Hero />
      </section>
      
      {/* Introduction Section */}
      <section id="introduction">
        <Introduction />
      </section>
      
      {/* Funding Overview Section */}
      <section id="funding">
        <Funding />
      </section>
      
      {/* Milestones Section */}
      <section id="milestones">
        <Milestones />
      </section>

      {/* Transparency Section */}
      <section id="transparency">
        <Transparency />
      </section>
      
      {/* Donate Section */}
      <section id="donate">
        <Donate 
          onPayPalClick={onPayPalClick}
          onGreyClick={onGreyClick}
          onSponsorClick={onSponsorClick}
        />
      </section>
    </>
  );
};

export default HomePage;
