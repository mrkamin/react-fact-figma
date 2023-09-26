import React from "react";
import IMG from "../assets/react-logo.png";

const Navbar = () => {
  return (
    <header className="flex">
      <div className="title-container flex">
        <img src={IMG} alt="logo" />
        <h2>ReactFact</h2>
      </div>
      <h3>React Course - Project 1</h3>
    </header>
  );
};

export default Navbar;
