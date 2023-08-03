import React from "react";
import videoBg from "./../../assets/hero2.mp4";
import facebook from "./../../assets/facebook-svgrepo-com.svg";
import instagram from "./../../assets/instagram-1-svgrepo-com.svg";
import "./main.style.css";

const Main = () => {
  return (
    <div className="main">
      <div className="main__overlay"></div>
      <video src={videoBg} muted loop autoPlay className="main__video" />
      <div className="main__content">
        <h1>
          Detail<span>Mann</span>
        </h1>
        <h3>Twój samochód, nasza pasja.</h3>
        <div className="main__social-icons">
          <div>
            <img src={facebook} alt="facebook link" />
            <img src={instagram} alt="instagram link" />
          </div>
          <div className="main__buttons">
            <button className="main__contact-us__button">
              Wyślij wiadomość
            </button>
            <button className="main__contact-us__button">Zadzwoń</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
