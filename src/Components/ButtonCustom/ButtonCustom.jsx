import React from "react";
import "./style.css";
const ButtonCustom = ({ className, href, Text, isDisabled = false }) => {
  return (
    <>
      <button className={className} disabled={isDisabled}>
        <a href={href ? href : "#"}> {Text}</a>
      </button>
    </>
  );
};

export default ButtonCustom;
