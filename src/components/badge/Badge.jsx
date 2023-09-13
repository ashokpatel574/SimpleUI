/* eslint-disable react/prop-types */
import "./badge.css";

const Badge = ({ type, title }) => {
  return <span className={`badge text-bg-${type.toLowerCase()}`}>{title}</span>;
};

export default Badge;
