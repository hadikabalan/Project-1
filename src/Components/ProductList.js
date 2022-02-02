import React from "react";
import ProductItem from "./ProductItem";

export default function ProductList() {
  return (
    <div className="products">
      <h1>Latest products</h1>
      <div className="Product-list">
        <ProductItem description="Laptop" price="150" />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
      </div>
      <div className="Product-list">
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
      </div>
    </div>
  );
}
