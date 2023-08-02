import * as React from "react";
import { useState } from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { itemData } from "../../data/imagesGallery";
import Box from "@mui/material/Box";
import { Fade } from "react-awesome-reveal";
import "./imageGallery.style.css";

export default function ImageGallery() {
  const [openModal, setOpenModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const onClickOpenModal = (imageData) => {
    setSelectedImage(imageData);
    setOpenModal(true);
  };

  const onClickCloseModal = () => {
    setOpenModal(false);
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
        <Box
          sx={{
            width: 500,
            height: 650,
            overflowY: "scroll",
            margin: "40 auto",
          }}
          className="gallery-container"
        >
          <ImageList variant="masonry" cols={3} gap={8} className="img-gallery">
            {itemData.map((item) => (
              <ImageListItem key={item.img}>
                <img
                  src={`${item.img}?w=248&fit=crop&auto=format`}
                  alt={item.title}
                  loading="lazy"
                  onClick={() => onClickOpenModal(item)}
                />
              </ImageListItem>
            ))}
          </ImageList>
        </Box>
      </Fade>
    </div>
  );
}
