import React from "react";
import Main from "../../components/main/Main";
import NavBar from "../../components/navBar/NavBar";
import OfferBlock from "../../components/offerBlock/OfferBlock";
// import WhyDetailing from "../../components/whyDetailing/WhyDetailing";
import Footer from "../../components/footer/Footer";
import Gallery from "../../components/gallery/Gallery";
// import ImageGallery from "../../components/imageGallery/ImageGallery";
import Reviews from "../../components/reviews/Reviews";
import Description from "../../components/description/Description";

const Home = () => {
  return (
    <div>
      <NavBar />
      <Main />
      <Description />
      <OfferBlock />
      <Reviews />
      {/* <ImageGallery /> */}
      {/* <WhyDetailing /> */}
      <Gallery />
      <Footer />
    </div>
  );
};

export default Home;
