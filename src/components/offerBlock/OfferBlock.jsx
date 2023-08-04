import React from "react";
import blokOne from "./../../assets/blok1.jpg";
import blokTwo from "./../../assets/blok2.jpg";
import blokThree from "./../../assets/blok3.jpg";
import blokFour from "./../../assets/blok4.jpg";
import { Fade } from "react-awesome-reveal";
import "./offerBlock.style.css";

const OfferBlock = () => {
  return (
    <div>
      <h2 className="offer-block__title fancy">
        Dlaczego powinieneś wybrać nas
      </h2>
      <Fade cascade>
        <div className="offer-block__content">
          <div className="offer-block">
            <div className="offer-block__overlay">
              <p>
                Tradycyjne myjnie samochodowe i sklepy detaliczne wymagają czasu
                i oczekiwania. My przyjeżdżamy do Ciebie.
              </p>
            </div>
            <img src={blokOne} className="offer-block__image" alt="wygoda" />
            <div className="offer-block__text">
              <h3>Wygoda</h3>
            </div>
          </div>
          <div className="offer-block">
            <div className="offer-block__overlay">
              <p>
                Niezależnie od tego, czy jesteś w domu, czy w ulubionym sklepie,
                rób to, co lubisz, podczas gdy my zajmiemy się obowiązkiem.
              </p>
            </div>
            <img
              src={blokTwo}
              className="offer-block__image"
              alt="oszczędność czasu"
            />
            <div className="offer-block__text">
              <h3>Oszczędność czasu</h3>
            </div>
          </div>
          <div className="offer-block">
            <div className="offer-block__overlay">
              <p>
                Poświęcając jak najmniej jakości, znaleźliśmy sposoby na
                zaoszczędzenie i przekazanie tych oszczędności Tobie.
              </p>
            </div>
            <img
              src={blokThree}
              className="offer-block__image"
              alt="oszczędność pieniędzy"
            />
            <div className="offer-block__text">
              <h3>Oszczędność pieniędzy</h3>
            </div>
          </div>
          <div className="offer-block">
            <div className="offer-block__overlay">
              <p>
                Wszystko, od dywanika i siedzeń po lakier nadwozia i koła,
                będzie wyglądać „jak nowe”.
              </p>
            </div>
            <img src={blokFour} className="offer-block__image" alt="jakość" />
            <div className="offer-block__text">
              <h3>Jakość</h3>
            </div>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default OfferBlock;
