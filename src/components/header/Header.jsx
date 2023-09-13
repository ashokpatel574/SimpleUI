import { NavLink, useNavigate } from "react-router-dom";
import "./header.css";
import { useState } from "react";
import { componentsData } from "../../utils/utils";

const componentList = componentsData.map((item) => item.title.toLowerCase());

const Header = () => {
  const [searchInput, setSearchInput] = useState("");
  const navigate = useNavigate();

  const searchInputHandler = (e) =>
    setSearchInput(e.target.value.trim().toLowerCase());

  const searchHandler = () => {
    if (searchInput && searchInput.length >= 1) {
      if (componentList.includes(searchInput)) {
        navigate(`/components/${searchInput}`);
        setSearchInput("");
      } else {
        alert(`Oops!,  "${searchInput}" component not found.`);
      }
    }
  };

  return (
    <header className="header_container">
      <nav className="header_nav">
        <div className="header_nav_title">
          <NavLink to="/" className="header_logo">
            Simple UI
          </NavLink>
        </div>

        <div className="searchInput_container">
          <label htmlFor="searchInput">
            <input
              type="text"
              id="searchInput"
              className="searchInput"
              placeholder="Search component"
              value={searchInput}
              onChange={searchInputHandler}
            />
          </label>

          <button className="btn searchBtn" onClick={searchHandler}>
            Search
          </button>
        </div>

        <ul className="header_nav-list flex-center">
          <li>
            <NavLink className="header_nav-link" to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className="header_nav-link" to="/components">
              Components
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
