import { NavLink, Link } from "react-router-dom";
import { componentsData } from "../../utils/utils";
import "./sideBar.css";

const SideBar = () => {
  return (
    <aside className="sideBar_container">
      <Link to={"/components"}>
        <h3>Components</h3>
      </Link>
      <ul>
        {componentsData.map((listItem) => {
          const { id, link, title } = listItem;
          return (
            <NavLink to={link} key={id}>
              <li>{title}</li>
            </NavLink>
          );
        })}
      </ul>
    </aside>
  );
};

export default SideBar;
