import React from 'react';
import Hero from '../components/Hero';
import Introduction from '../components/Introduction';
import Approach from '../components/Approach';
import Programs from '../components/Programs';
import Impact from '../components/Impact';
import Donate from '../components/Donate';

const HomePage = ({ onPayPalClick, onGreyClick, onSponsorClick }) => {
  return (
    <>
      <section id="hero">
        <Hero />
      </section>

      <section id="introduction">
        <Introduction />
      </section>

      <section id="approach">
        <Approach />
      </section>

      <section id="programs">
        <Programs />
      </section>

      <section id="impact">
        <Impact />
      </section>

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