import React from "react";
import dyplomOne from "../../assets/dyplom1.webp";
import dyplomTwo from "../../assets/dyplom2.webp";
import "./aboutUs.style.css";

const AboutUs = () => {
  return (
    <div className="about-us">
      <h1 className="about-us__title fancy">O nas</h1>
      <div>
        <p className="about-us__text">
          Już jako kilkuletni chłopak, w mojej pamięci wyryły się wspomnienia
          związane z wyjątkowym momentem, gdy wyrywałem się spod opieki
          rodziców, by móc pomóc tacie przy myciu samochodu. Choć były to tylko
          chwile, kiedy trzymałem w dłoni żółtą myjkę Karchera i z zachwytem
          polewałem wodą karoserię, to wtedy zapewne narodziła się iskra mojej
          pasji do samochodów i dbania o ich wygląd. <br />
          <br /> Lata mijają, a te niewinne początki stały się zalążkiem
          fascynacji, która w pełni rozwija się wraz z czasem. Zakup mojego
          pierwszego auta był jednym z tych kamieni milowych, które sprawiły, że
          pasja ta przerodziła się w coś więcej niż tylko ulotny kaprys. To
          wtedy zrozumiałem, że dbanie o samochód to nie tylko obowiązek, ale
          również forma wyrazu i autoekspresji.
          <br />
          <br /> Początkowo, jak większość pasjonatów, eksperymentowałem na
          swoim własnym aucie. Metoda prób i błędów stała się moim codziennym
          towarzyszem. Dziesiątki różnorodnych kosmetyków samochodowych
          przechodziły testy na mojej karoserii, a każdy efekt, niezależnie czy
          udany czy nie, dostarczał mi cennych lekcji. To były dni nieustannego
          odkrywania, rozumienia, co działa najlepiej dla różnych rodzajów
          powierzchni i materiałów.
          <br />
          <br /> Jednak z biegiem czasu, moje zamiłowanie przerodziło się w
          pragnienie głębszej wiedzy. Chciałem poznać każdy aspekt
          detailingowego rzemiosła, zgłębić naukę o składnikach, reakcjach
          chemicznych i technikach. To było jak zagłębianie się w tajemniczy
          świat, gdzie każdy drobny element miał znaczenie.
          <br />
          <br /> Teraz, po latach pasji, mogę śmiało stwierdzić, że detailing
          samochodowy nie jest już tylko hobby – to moje powołanie. Każda
          godzina spędzona nad pielęgnacją samochodu to czas, który czerpię z
          pełnią radości i satysfakcji. To nie tylko o estetyce, ale również o
          dawaniu samochodom drugiego życia, przywracaniu blasku i piękna, które
          przyciągają spojrzenia.
          <br />
          <br />
          Podsumowując, droga od chwili, gdy jako mały chłopiec fascynowałem się
          żółtą myjką Karchera, aż do teraz, kiedy moja pasja stała się
          precyzyjnym i w pełni rozwiniętym detallem samochodowym, była pełna
          wyzwań, odkryć i wewnętrznego wzrostu. Moje początki związane z pomocą
          tacie przy myciu auta ukierunkowały mnie na niezwykłą podróż, w
          trakcie której zrozumiałem, że prawdziwa pasja to coś, co rośnie i
          rozwija się wraz z nami, definiując to, kim jesteśmy i co kochamy
          robić.
        </p>
      </div>
      <div className="about-us__img__container">
        <img className="about-us__img" src={dyplomOne} alt="certyfikat" />
        <img className="about-us__img" src={dyplomTwo} alt="certyfikat" />
      </div>
    </div>
  );
};

export default AboutUs;
