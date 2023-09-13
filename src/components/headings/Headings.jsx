/* eslint-disable react/prop-types */
import "./headings.css";

function getHeadingSize(size) {
  switch (size.trim().toLowerCase()) {
    case "xs": {
      return "h6";
    }
    case "s": {
      return "h5";
    }
    case "m": {
      return "h4";
    }
    case "l": {
      return "h3";
    }
    case "xl": {
      return "h2";
    }
    case "2xl" || "3xl" || "4xl": {
      return "h1";
    }

    default: {
      return "h4";
    }
  }
}

const Headings = ({ size, text }) => {
  const HeadingSize = getHeadingSize(size);

  return (
    <HeadingSize className={`heading headingSize-${size}`}>{text}</HeadingSize>
  );
};

export default Headings;
