/* eslint-disable react/prop-types */
import "./alert.css";

const Alert = ({ status, children }) => {
  return (
    <div className={`alert alert-${status.toLowerCase()}`} role="alert">
      <>{children[0]}</>
      <span>{children[1]}</span>
    </div>
  );
};

export default Alert;
