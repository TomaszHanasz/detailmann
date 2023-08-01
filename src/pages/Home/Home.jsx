import React from "react";
import Main from "../../components/main/Main";
import NavBar from "../../components/navBar/NavBar";
import OfferBlock from "../../components/offerBlock/OfferBlock";
import WhyDetailing from "../../components/whyDetailing/WhyDetailing";
import Footer from "../../components/footer/Footer";

const Home = () => {
  return (
    <div>
      <NavBar />
      <Main />
      <WhyDetailing />
      <OfferBlock />
      <Footer />
    </div>
  );
};

export default Home;
