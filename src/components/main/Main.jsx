import React from "react";
import videoBg from "./../../assets/Hero233.mp4";
import facebook from "./../../assets/facebook-svgrepo-com.svg";
import instagram from "./../../assets/instagram-1-svgrepo-com.svg";
import whatsapp from "../../assets/whatsapp-whats-app-svgrepo-com.svg";
import { Link } from "react-router-dom";
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
            <a
              href="https://www.facebook.com/profile.php?id=100092207490948"
              target="_blank"
              rel="noreferrer"
            >
              <img src={facebook} alt="facebook link" />
            </a>
            <a
              href="https://www.instagram.com/detail_mann/?igshid=MzRlODBiNWFlZA%3D%3D&fbclid=IwAR1Y3NUJ8GGLNc2Cx3ieel0s48znO_05xsU76ubIJ_KXrD6t6KiqPMAUN7c"
              target="_blank"
              rel="noreferrer"
            >
              <img src={instagram} alt="instagram link" />
            </a>
            <a
              href="https://wa.me/48508597076"
              target="_blank"
              rel="noreferrer"
            >
              <img src={whatsapp} alt="whatsapp link" />
            </a>
          </div>
          <div className="main__buttons">
            <Link to="/contact">
              <button className="main__contact-us__button">
                Wyślij wiadomość
              </button>
            </Link>
            <button className="main__contact-us__button">
              <a className="zadzwon" href="tel:48508597076">
                Zadzwoń
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
