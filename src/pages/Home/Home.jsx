import React from "react";
import Main from "../../components/main/Main";
import NavBar from "../../components/navBar/NavBar";
import OfferBlock from "../../components/offerBlock/OfferBlock";
import Footer from "../../components/footer/Footer";
import Gallery from "../../components/gallery/Gallery";
import Reviews from "../../components/reviews/Reviews";
import Description from "../../components/description/Description";
import CookiesConstent from "../Cookies/CookiesConstent";

const Home = () => {
  return (
    <div>
      <NavBar />
      <Main />
      <CookiesConstent />
      <Description />
      <OfferBlock />
      <Reviews />
      <Gallery />
      <Footer />
    </div>
  );
};

export default Home;
