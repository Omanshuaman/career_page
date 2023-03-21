import React from "react";
import Logo from "../assests/logo.png";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img src={Logo} alt="Your SVG" className="search-svg" />
      </div>
      <div className="select-header">
        <div className="home">Home</div>
        <div className="about">About Us</div>
        <div className="ourBusiness">Our Business</div>
        <div className="projects">Projects</div>
        <div className="services">Services</div>
        <div className="contact">Contact</div>
      </div>
    </div>
  );
};

export default Header;
