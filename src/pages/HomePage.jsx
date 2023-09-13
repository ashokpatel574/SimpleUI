import { Link } from "react-router-dom";
import HeroImg from "../assets/Hero-Section-Image.svg";

const HomePage = () => {
  return (
    <section className="hero_container hero_grid hero_flex">
      <div className="hero_text-box">
        <h1>Hello,</h1>
        <p>
          Take your UI game to the next level with ui components! Our complete
          set of UI components provides easy-to-use and customizable designs,
          allowing you to quickly create stunning user interfaces. With
          high-quality visuals and intuitive interactions, you can boost your
          products user experience and make it stand out from the rest. Create
          beautiful UIs today with ui components!
        </p>
        <Link className="btn btn-start" to="/components">
          Get Started
        </Link>
      </div>
      <div className="hero_image-box">
        <img src={HeroImg} alt="Multi device Tech Image" width="800px" />
      </div>
    </section>
  );
};

export default HomePage;
