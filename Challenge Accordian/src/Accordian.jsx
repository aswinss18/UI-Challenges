import React from "react";
import Totalpoints from "./Totalpoints";
import "./Accordian.css";
export default function Accordian() {
  return (
    <div className="accordian">
      <h1>Markets</h1>
      <div>
        <Totalpoints />
        <Totalpoints />
        <Totalpoints />
      </div>
    </div>
  );
}
