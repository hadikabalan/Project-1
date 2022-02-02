import React from "react";
import FirstProduct from "../Images/FirstProduct.svg";
import SecondProduct from "../Images/SecondProduct.svg";
import ThirdProduct from "../Images/ThirdProduct.svg";
import Laptop from "../Images/Laptop.svg";

export default function Newproducts() {
  return (
    <div className="new-products">
      <div class="product-1">
        <img src={FirstProduct} alt="Accessories" id="FirstProduct" />
        <h2>Accessories</h2>
        <p>Get the latest PC and Console accessories from our store.</p>
        <a href="">Shop accessories</a>
      </div>

      <div class="product-1">
        <h1>NEW PRODUCTS</h1>
        <hr />
      </div>

      <div class="product-2">
        <img src={SecondProduct} alt="PC" id="SecondProduct" />
        <h2>PC</h2>
        <p>Build your PC or buy a prebuilt PC.</p>
        <a href="">Shop PC</a>
      </div>

      <div class="product-3">
        <img src={ThirdProduct} alt="Third Product" id="ThirdProduct" />
        <h2>Consoles</h2>
        <p>Get the latest Consoles.</p>
        <a href="">Shop consoles</a>
      </div>

      <img src={Laptop} alt="Laptop" id="Laptop" />
    </div>
  );
}
