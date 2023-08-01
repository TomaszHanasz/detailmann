import React from "react";
import Main from "../../components/main/Main";
import NavBar from "../../components/navBar/NavBar";
import OfferBlock from "../../components/offerBlock/OfferBlock";
import WhyDetailing from "../../components/whyDetailing/WhyDetailing";

const Home = () => {
  return (
    <div>
      <NavBar />
      <Main />
      <WhyDetailing />
      <OfferBlock />
    </div>
  );
};

export default Home;
