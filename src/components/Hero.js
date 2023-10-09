import React from 'react';
import IMG from '../assets/Group 77.png';

const Hero = () => (
  <div className="hero-container container d-flex mt-2 flex-column">
    <img src={IMG} alt="IMG" />
    <h1>Online Experiences</h1>
    <p>
      Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
    </p>
  </div>
);
export default Hero;
