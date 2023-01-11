import React from "react";
import "./style.css";
import { FaFacebookF } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { IoLogoTwitter } from "react-icons/io";
const Footer = () => {
  const listData = [
    {
      name: "Home",
      href: "#header",
    },
    {
      name: "About",
      href: "#about",
    },
    {
      name: "Experience",
      href: "#experience",
    },
    {
      name: "Services",
      href: "#services",
    },
    {
      name: "Portfolio",
      href: "#portfolio",
    },
    {
      name: "Testimonials",
      href: "#testimonials",
    },
  ];

  const socialData = [
    {
      link: "https://facebook.com",
      icon: <FaFacebookF />,
    },
    {
      link: "https://instagram.com",
      icon: <FiInstagram />,
    },
    {
      link: "https://twitter .com",
      icon: <IoLogoTwitter />,
    },
  ];
  return (
    <footer>
      <a href="#home" className="footer__logo">
        {" "}
        Marion menye Rakotomandimby
      </a>

      <ul className="permalinks">
        {listData.map(({ name, href }, index) => (
          <li key={href}>
            <a href={href}>{name}</a>
          </li>
        ))}
      </ul>
      <div className="footer__socials">
        {socialData.map(({ link, icon }, index) => (
          <a key={index} href={link}>
            {" "}
            {icon}
          </a>
        ))}
      </div>

      <div className="footer__copyright">
        <small>&copy; MARION portfolio website . All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
