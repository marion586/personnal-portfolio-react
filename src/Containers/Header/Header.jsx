import React from "react";
import "./style.css";
import CTA from "../CTA";
import Me from "../../assets/me.png";
import HeaderSocial from "../../Components/HederSocial/HeaderSocial";
const Header = () => {
  return (
    <header id="header">
      <div className="container header__container">
        <h5>Hello i'm </h5>
        <h1>Menye Marion</h1>
        <h5 className="text-light"> Fullstack Developper</h5>
        <CTA />
        <HeaderSocial />

        <div className="me">
          <img src={Me} alt="me" />
        </div>

        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
