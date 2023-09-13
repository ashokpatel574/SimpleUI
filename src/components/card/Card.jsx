/* eslint-disable react/prop-types */
import { useState } from "react";
import "./card.css";

const Card = ({
  type,
  title,
  content,
  badgeContent,
  Icon,
  imgSrc,
  fallbackImgSrc,
  altText,
  maxWidth,
}) => {
  const [sourceImg, setSourceImg] = useState(imgSrc);

  const handleError = (e) => {
    e.stopPropagation();
    setSourceImg(fallbackImgSrc);
  };

  if (type === "badge") {
    return (
      <div className={`card_wrapper ${type}Type`}>
        <span>{badgeContent}</span>
        <h3>{title}</h3>
        <p>{content}</p>
      </div>
    );
  }

  if (type === "dismiss") {
    return (
      <div className={`card_wrapper ${type}Type`}>
        <Icon />
        <h3>{title}</h3>
        <p>{content}</p>
      </div>
    );
  }

  if (type === "textOverlay") {
    return (
      <div className={`card_wrapper ${type}Type`}>
        <img
          src={sourceImg}
          alt={altText}
          onError={handleError}
          width={maxWidth}
        />
        <div className="overlayText_container">
          <h3>{title}</h3>
          <p>{content}</p>
        </div>
      </div>
    );
  }

  if (type === "text") {
    return (
      <div className={`card_wrapper ${type}Type`}>
        <p>{content}</p>
      </div>
    );
  }

  if (type === "vertical") {
    return (
      <div className={`card_wrapper ${type}Type`}>
        <div>
          <img
            src={sourceImg}
            alt={altText}
            onError={handleError}
            width={maxWidth}
          />
        </div>
        <div className="card_text-details">
          <h3>{title}</h3>
          <p>{content}</p>
        </div>
      </div>
    );
  }

  if (type === "horizontal") {
    return (
      <div className={`card_wrapper ${type}Type`}>
        <div>
          <img
            src={sourceImg}
            alt={altText}
            onError={handleError}
            width={maxWidth}
          />
        </div>
        <div className="card_text-details">
          <h3>{title}</h3>
          <p>{content}</p>
        </div>
      </div>
    );
  }

  return <></>;
};

export default Card;
