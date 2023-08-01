import React from "react";
import logo from "./../../assets/detailmann_logo_300dpi_3.png";
import "./navBar.style.css";

const NavBar = () => {
  return (
    <div className="navbar">
      <ul className="navbar__options">
        <li>Cennik</li>
        <li>Usługi</li>
        <img src={logo} className="navbar__logo " />
        <li>O nas</li>
        <li>Kontakt</li>
      </ul>
    </div>
  );
};

export default NavBar;
