import React from "react";
import "./footer.style.css";

const Footer = () => {
  const date = new Date().getFullYear();

  return (
    <div className="footer">
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
