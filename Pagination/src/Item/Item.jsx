import React from "react";
import "./Item.css";
export default function Item({ item }) {
  return (
    <div className="container left">
      <h1>{item.device}</h1>
      <ul className="list">
        <li>brand : {item.brand}</li>
        <li>warranty: {item.warranty} years</li>
        <li>price: {item.price}$</li>
        <li>Units: {item.no}</li>
      </ul>
      <button className="btn">Buy Now</button>
    </div>
  );
}
