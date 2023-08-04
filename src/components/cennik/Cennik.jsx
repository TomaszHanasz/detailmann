import cennik from "../../assets/cennik.jpg";
import React from "react";
import { Link } from "react-router-dom";
import "./cennik.style.css";

const Cennik = () => {
  return (
    <div className="cennik__box">
      <img src={cennik} alt="cennik" className="cennik__img" />
      <Link to="/">
        <button className="cennik__button">Powrót</button>
      </Link>
    </div>
  );
};

export default Cennik;
