import React from "react";
import "./Data.css";
export default function Data({ data }) {
  return (
    <div className="data">
      <h2>{data.name}</h2>
      <button
        className={
          data.money < 0
            ? "btn btn-red"
            : data.money === 0
            ? "btn btn-neutral"
            : "btn"
        }
      >
        {data.money} $
      </button>
    </div>
  );
}
