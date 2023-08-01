import React from "react";
import blokOne from "./../../assets/blok1.jpg";
import blokTwo from "./../../assets/blok2.jpg";
import blokThree from "./../../assets/blok3.jpg";
import blokFour from "./../../assets/blok4.jpg";
import "./offerBlock.style.css";

const OfferBlock = () => {
  return (
    <div>
      <h3 className="offer-block__title">
        Za jedyne 100zł przyjedziemy do ciebie.
      </h3>
      <div className="offer-block__content">
        <div className="offer-block">
          <div className="offer-block__overlay"></div>
          <img src={blokOne} className="offer-block__image" />
          <div className="offer-block__text">
            <h3>Wygoda</h3>
            <br />
            <p>
              Tradycyjne myjnie samochodowe i sklepy detaliczne wymagają czasu i
              oczekiwania. My przyjeżdżamy do Ciebie.
            </p>
          </div>
        </div>
        <div className="offer-block">
          <div className="offer-block__overlay"></div>
          <img src={blokTwo} className="offer-block__image" />
          <div className="offer-block__text">
            <h3>Zaoszczędź czas</h3>
            <br />
            <p>
              Niezależnie od tego, czy jesteś w domu, czy w ulubionym sklepie,
              rób to, co lubisz, podczas gdy my zajmiemy się obowiązkiem.
            </p>
          </div>
        </div>
        <div className="offer-block">
          <div className="offer-block__overlay"></div>
          <img src={blokThree} className="offer-block__image" />
          <div className="offer-block__text">
            <h3>Zaoszczędź pieniądze</h3>
            <br />
            <p>
              Poświęcając jak najmniej jakości, znaleźliśmy sposoby na
              zaoszczędzenie i przekazanie tych oszczędności Tobie.
            </p>
          </div>
        </div>
        <div className="offer-block">
          <div className="offer-block__overlay"></div>
          <img src={blokFour} className="offer-block__image" />
          <div className="offer-block__text">
            <h3>Jakość</h3>
            <br />
            <p>
              Wszystko, od dywanika i siedzeń po lakier nadwozia i koła, będzie
              wyglądać „jak nowe”.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfferBlock;