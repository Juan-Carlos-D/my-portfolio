import React from "react";
import "./header.css";
import CTA from "./CTA";
import ME from "../../assets/me2.png";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <header id="header">
      <div className="container header__container">
        <h5>Hello World! I'm</h5>
        <h1>Juan Carlos Dominguez</h1>
        <h5 className="text-light">Computer Science Grad Student</h5>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={ME} className="my-image" alt="me" />
        </div>

        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
