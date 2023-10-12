import React from 'react';
import Data from './Data';

const Footer = () => (
  <div className="container d-flex gap-2">
    {Data.map(({
      id, star, country, image, desc, price, sale,
    }) => (
      <div key={id} className="div">
        <div className="position-relative">
          <p className="position-absolute">{sale}</p>
          <img src={image} alt={desc} />
        </div>
        <div className="d-flex flex-column">
          <div className="d-flex align-items-center">
            <span className="fs-3">*</span>
            <p>{star}</p>
            <span>-</span>
            <p>{country}</p>
          </div>
          <p>{desc}</p>
          <p>{price}</p>
        </div>
      </div>
    ))}
  </div>
);
export default Footer;
