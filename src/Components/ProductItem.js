import React from "react";
import Laptop from "../Images/Laptop.svg";

export default function ProductItem({ description, price }) {
  return (
    <div>
      <div className="product-item">
        <img src={Laptop} alt="Product " id="product-item-img" />
        <p>{description}</p>
        <p>{price} $</p>
      </div>
    </div>
  );
}
