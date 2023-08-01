import React from "react";
import videoBg from "./../../assets/hero2.mp4";
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
        <p>Twój samochód, nasza pasja.</p>
      </div>
    </div>
  );
};

export default Main;
