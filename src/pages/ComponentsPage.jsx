import { Link, Outlet, useLocation } from "react-router-dom";
import SideBar from "../components/sideBar/SideBar";
import { componentsData } from "../utils/utils";
import { useEffect } from "react";

const ComponentsPage = () => {
  const location = useLocation();

  const shouldRenderComponentPage =
    location.pathname !== "/" && location.pathname === `/components`;

  // Automatically scrolls to top whenever pathname changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      {shouldRenderComponentPage ? (
        <section className="hero_container components_container">
          <h2>Components List</h2>
          <ul className="components_list">
            {componentsData.map((listItem) => {
              const { id, link, title } = listItem;
              return (
                <Link to={link} className="components_listItem" key={id}>
                  <li>{title}</li>
                </Link>
              );
            })}
          </ul>
        </section>
      ) : (
        <div className="component_document-container">
          <SideBar />
          <Outlet />
        </div>
      )}
    </>
  );
};

export default ComponentsPage;
