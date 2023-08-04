import React from "react";
import facebook from "./../../assets/facebook-svgrepo-com.svg";
import instagram from "./../../assets/instagram-1-svgrepo-com.svg";
import whatsapp from "../../assets/whatsapp-whats-app-svgrepo-com.svg";
import "./footer.style.css";

const Footer = () => {
  const date = new Date().getFullYear();

  return (
    <div className="footer">
      <div className="footer__social-icons">
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
        <a href="https://wa.me/48508597076" target="_blank" rel="noreferrer">
          <img src={whatsapp} alt="whatsapp link" />
        </a>
      </div>
      <h2>
        Detail<span>Mann</span>
      </h2>
      <br />
      <h2>
        <span>508 597 076</span>
      </h2>
      <br />
      <p>Jeleniogórska 1/3e, 60-179 Poznań</p>
      <br />
      <p>© Copyright {date} DetailMann - wszystkie prawa zastrzeżone</p>
    </div>
  );
};

export default Footer;
