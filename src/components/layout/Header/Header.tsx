import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

// style
import "./Header.css";

// assets
import search_icon from "../../../assets/icons/Search.png";
import person_icon from "../../../assets/icons/Person.png";
import cart_icon from "../../../assets/icons/Shopping Cart.png";

import logo_img from "../../../assets/images/Logo.png";

// hooks
import { useEffect } from "react";

export const Header = () => {
  const navLinks = ["home", "brands", "recent products", "contact", "about"];

  useEffect(() => {
    const header = document.getElementById("header") as HTMLElement | null;
    const navbar_collection_open = document.getElementById(
      "navbar_collection_open"
    ) as HTMLUListElement | null;
    const nav_menu = document.getElementById("nav_menu") as HTMLElement | null;

    if (header && navbar_collection_open && nav_menu) {
      window.addEventListener("scroll", () => {
        const WinByY: number = window.scrollY;

        if (WinByY > 0) {
          header.style.backgroundColor = "var(--bg-pr)";
        } else {
          header.style.backgroundColor = "";
        }
      });

      let nav_menu_open: boolean = false;

      nav_menu.addEventListener("click", () => {
        if (!nav_menu_open) {
          navbar_collection_open.style.transform = "translateY(0)";
          navbar_collection_open.style.opacity = "1";
          header.style.backgroundColor = "var(--bg-pr)";
          nav_menu_open = true;
        } else {
          navbar_collection_open.style.transform = "";
          navbar_collection_open.style.opacity = "";
          nav_menu_open = false;
        }
      });
    }
  }, []);

  return (
    <header className="header" id="header">
      <div className="container">
        <nav className="navbar">
          <div className="nav_logo">
            <Link to="/">
              <img src={logo_img} alt="" />
            </Link>
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
            {navLinks.map((link) => (
              <li key={uuidv4()}>
                <Link to={link.split(" ").join("-")}>{link}</Link>
              </li>
            ))}
          </ul>

          <ul className="navbar_icons">
            <li>
              <img src={search_icon} alt="" />
            </li>

            <li>
              <img src={person_icon} alt="" />
            </li>

            <li id="nav_shop">
              <img src={cart_icon} alt="" />
              <div id="sopping_cart" className="shopping_cart"></div>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
