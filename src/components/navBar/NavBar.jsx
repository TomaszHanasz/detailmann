import React, { useState } from "react";
import logo from "./../../assets/detailmann-logo-300dpi-3-64d0f4865f25c.webp";
import { Link } from "react-router-dom";
import "./navBar.style.css";

const NavBar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const onClickOpenMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <div className="navbar">
      <ul className="navbar__options">
        <Link to="/cennik">
          <li>Cennik</li>
        </Link>
        <Link to="/onas">
          <li>O nas</li>
        </Link>
        <Link to="/" className="navbar__logo__container">
          <img
            rel="preload"
            src={logo}
            className="navbar__logo"
            alt="detailmann logo"
          />
        </Link>
        <Link to="/galeria">
          <li>Galeria</li>
        </Link>
        <Link to="/contact">
          <li>Kontakt</li>
        </Link>
      </ul>
      <div className="navbar-drawer">
        <button className="navbar-drawer__button" onClick={onClickOpenMenu}>
          ≡
        </button>
        {openMenu && (
          <ul className="navbar-drawer__options">
            <Link to="/cennik">
              <li>Cennik</li>
            </Link>
            <Link to="/onas">
              <li>O nas</li>
            </Link>
            <Link to="/galeria">
              <li>Galeria</li>
            </Link>
            <Link to="/contact">
              <li>Kontakt</li>
            </Link>
          </ul>
        )}
      </div>
    </div>
  );
};

export default NavBar;
