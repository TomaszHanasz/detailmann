import React from "react";
import { Link } from "react-router-dom";
import cennikOne from "../../assets/cennik1.jpg";
import cennikTwo from "../../assets/cennik2.jpg";
import "./cennik.style.css";

const Cennik = () => {
  return (
    <div className="cennik__box">
      <div className="cennik__pakiet__container">
        <div className="cennik__pakiet-classic">
          <h2 className="cennik__title fancy">Pakiet Classic</h2>
          <div className="cennik__flex">
            <div>
              <img src={cennikTwo} alt="zdjęcie" />
            </div>
            <div>
              <ul className="cennik__classic-prices">
                <li>Małe auta - od 190 zł</li>
                <li>Średnie auta - od 240 zł</li>
                <li>Duże auta - od 300 zł</li>
              </ul>
              <br />
              <br />
              <ul className="cennik__list">
                <li>Dokładne odkurzanie</li>
                <li>Czyszczenie oraz impregnacja elementów plastikowych</li>
                <li>
                  Czyszczenie oraz impregnacja foteli skórzanych/materiałowych
                </li>
                <li>Mycie szyb</li>
                <li>Aplikacja zapachu</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="cennik__pakiet-classic">
          <h2 className="cennik__title fancy">Pakiet All In One</h2>
          <div className="cennik__flex">
            <div>
              <ul className="cennik__classic-prices">
                <li>Małe auta - od 400 zł</li>
                <li>Średnie auta - od 450 zł</li>
                <li>Duże auta - od 500 zł</li>
              </ul>
              <br />
              <br />
              <ul className="cennik__list">
                <li>Detailingowe czyszczenie wewnątrz oraz zewnątrz pojazdu</li>
                <li>Czyszczenie felg oraz nadkoli</li>
                <li>Aplikacja wosku</li>
                <li>Usługa door 2 door (dojazd do klienta w cenie usługi)</li>
                <li>Jednoetapowa korekta lakieru - usunięcie 65% zarysowań</li>
                <li>Dwuetapowa usuwa powyżej 85% zarysowań na lakierze</li>
              </ul>
            </div>
            <div>
              <img src={cennikOne} alt="zdjęcie" />
            </div>
          </div>
        </div>
        <h2 className="cennik__title" style={{ textDecoration: "underline" }}>
          Całość usługi jest wyceniana indywidualnie zgodnie z sugestiami
          klienta.
        </h2>
        <button className="cennik__button">Zadzwoń</button>
        <Link to="/">
          <button className="cennik__button">Powrót</button>
        </Link>
      </div>
    </div>
  );
};

export default Cennik;
