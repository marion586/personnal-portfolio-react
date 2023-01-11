import React from "react";
import "./style.css";
const NavMenu = () => {
  return (
    <div class="nav-menu" id="nav-menu">
      <div class="logo">
        <h2>MM</h2>
      </div>
      <ul class="nav-list">
        <li class="nav-item">
          <a href="#header">Header</a>
        </li>
        <li class="nav-item">
          <a href="#about">About</a>
        </li>
        <li class="nav-item">
          <a href="#experience">Experience</a>
        </li>
        <li class="nav-item">
          <a href="#services">Services</a>
        </li>
        <li class="nav-item ctn">
          <a href="#testmonials">Testmonials</a>
        </li>
      </ul>
    </div>
  );
};

export default NavMenu;
