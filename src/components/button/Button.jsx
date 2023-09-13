/* eslint-disable react/prop-types */

import "./button.css";

const Button = ({ variant, text, children }) => {
  return (
    <button className={`button button-${variant}`}>
      {children} {text && <span>{text}</span>}
    </button>
  );
};

export default Button;
