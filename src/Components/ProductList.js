import React from "react";
import Laptop from "../Images/Laptop.svg";

export default function ProductList() {
  return (
    <div className="products">
      <h1>Latest products</h1>
      <div className="Product-list">
        <div className="product-item">
          <img src={Laptop} alt="Product " id="product-item-img" />
          <p>descreption</p>
          <p>200 $</p>
        </div>

        <div className="product-item">
          <img src={Laptop} alt="Product " id="product-item-img" />
          <p>descreption</p>
          <p>200 $</p>
        </div>

        <div className="product-item">
          <img src={Laptop} alt="Product " id="product-item-img" />
          <p>descreption</p>
          <p>200 $</p>
        </div>

        <div className="product-item">
          <img src={Laptop} alt="Product " id="product-item-img" />
          <p>descreption</p>
          <p>200 $</p>
        </div>

        <div className="product-item">
          <img src={Laptop} alt="Product " id="product-item-img" />
          <p>descreption</p>
          <p>200 $</p>
        </div>
      </div>
    </div>
  );
}
