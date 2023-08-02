import React from "react";
import Main from "../../components/main/Main";
import NavBar from "../../components/navBar/NavBar";
import OfferBlock from "../../components/offerBlock/OfferBlock";
import WhyDetailing from "../../components/whyDetailing/WhyDetailing";
import Footer from "../../components/footer/Footer";
import Gallery from "../../components/gallery/Gallery";
import ImageGallery from "../../components/imageGallery/ImageGallery";

const Home = () => {
  return (
    <div>
      <NavBar />
      <Main />
      <OfferBlock />
      <ImageGallery />
      <WhyDetailing />
      <Gallery />
      <Footer />
    </div>
  );
};

export default Home;
