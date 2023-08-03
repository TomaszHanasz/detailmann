import React from "react";
import { Fade } from "react-awesome-reveal";
import { image2, image17, image20 } from "../../data/images";
import "./description.style.css";

const Description = () => {
  return (
    <Fade>
      <div className="description__container">
        <h2 className="description__title">Czym się zajmujemy</h2>
        <br />
        <p>
          Jazda samochodem musi sprawiać przyjemność, a kierowca jak i pasażer
          powinni czuć się komfortowo. Któż z nas nie lubi wsiadać do czystego,
          zadbanego auta.
          <br />
          <br />
          Nasza firma zajmuje się profesjonalnym czyszczeniem wnętrz m.in.
          czyszczeniem skór, plastików i zakamarków, aplikacją dressingów na
          elementy plastikowe, odkurzaniem, oraz kompleksowym przygotowaniem aut
          pod sprzedaż. Wykonujemy również jednoetapową oraz dwuetapową korektę
          lakieru wraz z nałożeniem powłoki ceramicznej. <br />
          <br />
          Na specjalne życzenie klienta istnieje możliwość kompleksowego
          czyszczenia samochodu. Warunki usługi w tym przypadku zostają ustalone
          indywidualnie. <br />
          <br />
          Dzięki wypracowanemu procesowi oraz korzystaniu z topowych marek
          kosmetyków jesteśmy w stanie wykonać nasze usługi praktycznie w każdym
          miejscu czy jest to parking przed firmą czy miejsce postojowe pod
          blokiem.
        </p>
        <div className="description__images">
          <img src={image2} />
          <img src={image17} />
          <img src={image20} />
        </div>
      </div>
    </Fade>
  );
};

export default Description;
