/* eslint-disable react/prop-types */
import { useState } from "react";

import "./image.css";

const Image = ({
  fallbackImg,
  srcImg,
  imgType,
  altText,
  maxWidth,
  maxHeight,
}) => {
  const [sourceImg, setSourceImg] = useState(srcImg);

  const handleError = (e) => {
    e.stopPropagation();
    setSourceImg(fallbackImg);
  };

  return (
    <img
      className={`imgType-${imgType}`}
      src={sourceImg}
      alt={altText}
      onError={handleError}
      width={maxWidth}
      height={maxHeight}
    />
  );
};

export default Image;
