import React from 'react';
import { FiGithub, FiLinkedin } from 'react-icons/fi';

const Hero = () => (
  <div className="hero-container flex container">
    <h4>Mohammad Rafi Amin</h4>
    <h6>Full Stack Developer</h6>
    <div className="social-btn d-flex gap-3 mt-3 container">
      <a
        href="https://github.com/mrkamin"
        className="btn btn-secondary d-flex align-items-center justify-content-center gap-2"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FiGithub />
        {' '}
        Github
      </a>
      <a
        href="https://www.linkedin.com/in/mohammad-rafi-amin/"
        className="btn btn-primary d-flex align-items-center justify-content-center gap-2"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FiLinkedin />
        {' '}
        Linkedin
      </a>
    </div>
    <div className="about container mt-2">
      <h4>About</h4>
      <p className="about-p">
        Full-stack developer passionate about crafting applications in Ruby,
        React, and JavaScript.
      </p>
      <h4>Intersted</h4>
      <p className="about-p">
        web development, front-end technologies, personal projects, learning,
        problem-solving, and teamwork.
      </p>
    </div>
  </div>
);
export default Hero;
