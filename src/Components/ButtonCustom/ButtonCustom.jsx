import React from "react";
import "./style.css";
const ButtonCustom = ({ className, href, Text }) => {
  return (
    <>
      <button className={className}>
        <a href={href ? href : "#"}> {Text}</a>
      </button>
    </>
  );
};

export default ButtonCustom;
