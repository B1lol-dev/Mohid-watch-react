import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

// style
import "./Header.css";

export const Header = () => {
  const navLinks = ["home", "brands", "recent products", "contact", "about"];

  return (
    <header className="header" id="header">
      <div className="container">
        <nav className="navbar">
          <div className="nav_logo">
            <a href="#">
              <img src="./assets/Logo.png" alt="" />
            </a>
          </div>

          <i className="nav_menu" id="nav_menu">
            ☰
          </i>

          <ul className="navbar_collection">
            {navLinks.map((link) => (
              <li key={uuidv4()}>
                <Link to={link.split(" ").join("-")}>{link}</Link>
              </li>
            ))}
          </ul>

          <ul className="navbar_collection_open" id="navbar_collection_open">
            <li>
              <a href="#hero">Home</a>
            </li>
            <li>
              <a href="#watches">Brands</a>
            </li>
            <li>
              <a href="#recent_products">Recent Products</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
          </ul>

          <ul className="navbar_icons">
            <li>
              <img src="./assets/Search.png" alt="" />
            </li>

            <li>
              <img src="./assets/Person.png" alt="" />
            </li>

            <li id="nav_shop">
              <img src="./assets/Shopping Cart.png" alt="" />
              <div id="sopping_cart" className="shopping_cart"></div>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
