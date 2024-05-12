import React from "react";
import CookieConsent from "react-cookie-consent";

const CookiesConstent = () => {
  return (
    <div>
      <CookieConsent
        location="bottom"
        buttonText="Zgadzam się"
        cookieName="Informacja o ciasteczkach"
        style={{ background: "black" }}
        buttonStyle={{
          color: "white",
          fontSize: "15px",
          backgroundColor: "#E76F01",
        }}
        expires={150}
      >
        <p>
          Używamy informacji zapisanych za pomocą plików cookies w celu
          zapewnienia maksymalnej wygody w korzystaniu z naszego serwisu. Mogą
          też korzystać z nich współpracujące z nami firmy badawcze oraz
          reklamowe. Jeżeli wyrażasz zgodę na zapisywanie informacji zawartej w
          cookies kliknij na "Zgadzam się".
        </p>
      </CookieConsent>
    </div>
  );
};

export default CookiesConstent;
