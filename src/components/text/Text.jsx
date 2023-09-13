/* eslint-disable react/prop-types */
import "./test.css";

const Text = ({ size, content }) => {
  return (
    <p className={`text textSize-${size.trim().toLowerCase()}`}>{content}</p>
  );
};

export default Text;
