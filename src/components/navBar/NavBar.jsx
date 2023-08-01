import React, { useState } from "react";
import logo from "./../../assets/detailmann_logo_300dpi_3.png";
import "./navBar.style.css";

const NavBar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const onClickOpenMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <div className="navbar">
      <ul className="navbar__options">
        <li>Cennik</li>
        <li>Usługi</li>
        <img src={logo} className="navbar__logo" alt="detailmann logo" />
        <li>O nas</li>
        <li>Kontakt</li>
      </ul>
      <div className="navbar-drawer">
        <button className="navbar-drawer__button" onClick={onClickOpenMenu}>
          Menu
        </button>
        {openMenu && (
          <ul className="navbar-drawer__options">
            <li>Cennik</li>
            <li>Usługi</li>
            <li>O nas</li>
            <li>Kontakt</li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default NavBar;
