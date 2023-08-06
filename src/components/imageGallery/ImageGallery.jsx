import * as React from "react";
import { useState } from "react";
import { itemData } from "../../data/imagesGallery";
import { carOne } from "../../data/carOne";
import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";
import "./imageGallery.style.css";
import GalleryElement from "../galleryElement/GalleryElement";

export default function ImageGallery() {
  const [openModal, setOpenModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const onClickOpenModal = (image) => {
    setSelectedImage(image);
    setOpenModal(true);
  };

  const onClickCloseModal = () => {
    setOpenModal(false);
  };

  const pictures = (gallery) => {
    const imageGallery = gallery.map((el, index) => (
      <div key={index} alt={el.title}>
        <img
          src={el.img}
          className="img-gallery__image"
          alt={el.title}
          onClick={() => onClickOpenModal(el)}
        />
      </div>
    ));
    return imageGallery;
  };

  return (
    <div>
      {openModal && selectedImage && (
        <div className="modal__overlay" onClick={onClickCloseModal}>
          <img
            className="modal__image"
            src={selectedImage.img}
            alt={selectedImage.title}
            loading="lazy"
          />
        </div>
      )}
      <Fade>
        <h2 className="image-gallery__title fancy"> Galeria</h2>
        <GalleryElement
          src={itemData}
          key={itemData}
          gallery={pictures}
          title={itemData[0].title}
        />
        <GalleryElement
          src={carOne}
          key={carOne}
          gallery={pictures}
          title={carOne[0].title}
        />
        <Link to="/">
          <button className="gallery__back-button">Powrót</button>
        </Link>
      </Fade>
    </div>
  );
}
