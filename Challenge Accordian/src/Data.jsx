import React from "react";
import "./Data.css";
export default function Data({ name }) {
  return (
    <div className="data">
      <h2>{name}</h2>
      <button className="btn">4$</button>
    </div>
  );
}
