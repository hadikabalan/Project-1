import React from "react";
import { FiSearch } from "react-icons/fi";
import Logo from "../Images/LOGO.svg";

export default function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Shop</a>
          </li>
          <li>
            <a href="#">Contact us</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
        </ul>
      </nav>
      <img src={Logo} alt="Logo" id="logo-img" />
      <div className="search">
        <input type="text" placeholder="search" id="search" />
        <FiSearch size={"1.5rem"} id="search-icon" />
      </div>
    </header>
  );
}
