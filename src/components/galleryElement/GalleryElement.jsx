import React, { useState } from "react";
import PropTypes from "prop-types";

const GalleryElement = (props) => {
  const [isExpanded, setExpanded] = useState(false);

  const onClickExpand = () => {
    setExpanded(!isExpanded);
  };

  return (
    <div>
      <h2 style={{ textAlign: "center", marginBottom: 40 }}>{props.title}</h2>
      <div className="img-gallery" key={props.key}>
        {isExpanded
          ? props.gallery(props.src)
          : props.gallery(props.src).slice(0, 6)}
      </div>
      <p className="fancy" style={{ background: 0, marginTop: 80 }}>
        <button
          className="expand-btn fancy"
          onClick={() => onClickExpand(props.src)}
        >
          {isExpanded ? "⋀" : "⋁"}
        </button>
      </p>
    </div>
  );
};

export default GalleryElement;

GalleryElement.propTypes = {
  props: PropTypes.shape({
    src: PropTypes.string.isRequired,
    key: PropTypes.string.isRequired,
    title: PropTypes.string,
  }),
};
