import "./avatar.css";

// eslint-disable-next-line react/prop-types
const Avatar = ({ src, name, size }) => {
  return (
    <div className={`avatar-${size}`}>
      <img src={src} alt={name} />
    </div>
  );
};

export default Avatar;
