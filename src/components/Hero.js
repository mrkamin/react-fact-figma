import React from 'react';
import { FiGithub, FiLinkedin } from 'react-icons/fi';

const Hero = () => (
  <div className="hero-container flex">
    <h3>Mohammad Rafi Amin</h3>
    <h5>Full Stack Developer</h5>
    <div className="social-btn d-flex gap-3 mt-3">
      <div className="portfolio__item-cta">
        <a
          href="https://github.com/mrkamin"
          className="btn btn-secondary"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FiGithub />
          {' '}
          GITHUB
        </a>
        <a
          href="https://www.linkedin.com/in/mohammad-rafi-amin/"
          className="btn btn-primary"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FiLinkedin />
          {' '}
          LINKEDIN
        </a>
      </div>
    </div>
  </div>
);
export default Hero;
