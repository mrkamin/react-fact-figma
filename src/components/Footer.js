import React from 'react';
import { FaAngellist } from 'react-icons/fa';
import { CgWebsite } from 'react-icons/cg';
import { AiOutlineTwitter } from 'react-icons/ai';

const Footer = () => (
  <div className="footer-container container d-flex align-items-center justify-content-center gap-2 p-2">
    <a
      href="https://twitter.com/mrkamin2"
      className="btn btn-bg-color w-100"
      target="_blank"
      rel="noopener noreferrer"
    >
      <AiOutlineTwitter />
    </a>
    <a
      href="https://wellfound.com/u/mohammad-rafi-amin"
      target="_blank"
      rel="noopener noreferrer"
      className="btn btn-primary w-100"
    >
      <FaAngellist />
    </a>
    <a
      href="https://mohammadrafiamin.onrender.com/"
      target="_blank"
      rel="noopener noreferrer"
      className="btn btn-bg-color w-100"
    >
      <CgWebsite />
    </a>
  </div>
);
export default Footer;
