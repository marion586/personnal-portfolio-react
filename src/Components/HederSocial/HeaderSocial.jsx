import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FiFacebook } from "react-icons/fi";

const HeaderSocial = () => {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/rakotomandimby-marion-menye-043a60185/"
        target="_blank"
        rel="noreferrer"
      >
        {" "}
        <BsLinkedin />
      </a>

      <a href="https://github.com/marion586/" target="_blank" rel="noreferrer">
        <FaGithub />{" "}
      </a>
      <a
        href="https://web.facebook.com/menyemarion.rakotomandimby/"
        target="_blank"
        rel="noreferrer"
      >
        {" "}
        <FiFacebook />
      </a>
    </div>
  );
};

export default HeaderSocial;
