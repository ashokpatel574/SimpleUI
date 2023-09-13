import { useNavigate } from "react-router-dom";

const PageNotFound = () => {
  const navigate = useNavigate();

  return (
    <article className="errorPage_container ">
      <div className="errorPage_Img-container">
        <img
          src="https://res.cloudinary.com/dz0snqho8/image/upload/v1688132825/PageNotFound/PageNotFound_g2leky.png"
          alt="page not found"
          width="300px"
          height="300px"
        />
      </div>
      <div className="errorPage_text-Container">
        <h3>Oops! Something went wrong.</h3>

        <button className="btn backHomeBtn" onClick={() => navigate("/")}>
          Back To Home
        </button>
      </div>
    </article>
  );
};

export default PageNotFound;
