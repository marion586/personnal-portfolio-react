import React, { useState } from "react";
import "./style.css";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiBook, BiMessageSquareDetail } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("home");

  const NavLinkData = [
    {
      href: "#header",
      icon: <AiOutlineHome />,
    },
    {
      href: "#about",
      icon: <AiOutlineUser />,
    },
    {
      href: "#experience",
      icon: <BiBook />,
    },
    {
      href: "#services",
      icon: <RiServiceLine />,
    },
    {
      href: "#testmonials",
      icon: <BiMessageSquareDetail />,
    },
  ];

  return (
    <nav>
      {NavLinkData.map((item) => (
        <a
          href={item.href}
          className={activeNav === item.href ? "active" : ""}
          onClick={(e) => {
            setActiveNav(item.href);
          }}
          key={item.href}
        >
          {" "}
          {item.icon}
        </a>
      ))}
    </nav>
  );
};

export default Nav;
