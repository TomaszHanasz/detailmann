import React, { useState } from "react";
import logo from "./../../assets/detailmann_logo_300dpi_3.png";
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
        <Link to="/uslugi">
          <li>Usługi</li>
        </Link>
        <Link to="/">
          <img src={logo} className="navbar__logo" alt="detailmann logo" />
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
            <Link to="/uslugi">
              <li>Usługi</li>
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
