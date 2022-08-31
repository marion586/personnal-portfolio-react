import React from "react";
import ButtonCustom from "../../Components/ButtonCustom";
import "./style.css";
import CV from "../../assets/cv.pdf";
const CTA = () => {
  return (
    <div className="cta">
      <ButtonCustom href={CV} className="btn" Text="Download CV" />
      <ButtonCustom
        href="#contact"
        className="btn btn-primary "
        Text="Let's Talk"
      />
    </div>
  );
};

export default CTA;
