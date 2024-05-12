import React, { useEffect } from "react";
import NavBar from "../../components/navBar/NavBar";
import Footer from "../../components/footer/Footer";
import SendMessage from "../../components/sendMessage/SendMessage";
import TagManager from "react-gtm-module";

const Contact = () => {
  useEffect(() => {
    TagManager.dataLayer({
      dataLayer: {
        event: "conversion",
        send_to: "AW-11481525174/xOKSCPLb2agZELbX6OIq",
      },
    });
  }, []);
  return (
    <div>
      <NavBar />
      <SendMessage />
      <Footer />
    </div>
  );
};

export default Contact;
