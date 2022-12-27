import React, { useEffect } from "react";
import "./style.css";
import CTA from "../CTA";
import Me from "../../assets/menye.png";
import HeaderSocial from "../../Components/HederSocial/HeaderSocial";
import AOS from "aos";
const Header = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <header id="header">
      <div className="container header__container">
        <h5>Hello i'm </h5>
        <h1>RAKOTOMANDIMBY </h1>
        <h1>Menye Marion</h1>
        <h5 className="text-light"> Fullstack JS Developper</h5>
        <CTA />
        <HeaderSocial />

        <div className="me" data-aos="zoom-in">
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
