import React from "react";
import "./item.css";
export default function item({ item, i }) {
  return (
    <div className="item">
      <h3>
        {i + 1}.{item.name}
      </h3>
      <ul className="list">
        <li>brand : {item.brand}</li>
        <li>price : {item.price}</li>
        <li>type : {item.type}</li>
        <li>features : {item.power_usage}</li>
      </ul>
    </div>
  );
}
