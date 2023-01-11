import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FiFacebook } from "react-icons/fi";

const HeaderSocial = () => {
  return (
    <div className="header__socials">
      <a href="#" rel="noreferrer">
        {" "}
        <BsLinkedin />
      </a>

      <a href="#" rel="noreferrer">
        <FaGithub />{" "}
      </a>
      <a href="#" rel="noreferrer">
        {" "}
        <FiFacebook />
      </a>
    </div>
  );
};

export default HeaderSocial;
