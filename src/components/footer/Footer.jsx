import React from "react";
import facebook from "./../../assets/facebook-svgrepo-com.svg";
import instagram from "./../../assets/instagram-1-svgrepo-com.svg";
import "./footer.style.css";

const Footer = () => {
  const date = new Date().getFullYear();

  return (
    <div className="footer">
      <div className="footer__social-icons">
        <img src={facebook} alt="facebook link" />
        <img src={instagram} alt="instagram link" />
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
