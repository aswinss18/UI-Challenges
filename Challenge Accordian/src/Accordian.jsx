import React from "react";
import Totalpoints from "./Totalpoints";
import "./Accordian.css";
const numberOfDays = [1, 2, 3, 4, 5, 6, 7];
export default function Accordian() {
  const i = 1;
  return (
    <div className="accordian">
      <h1>Markets</h1>
      <div>
        {numberOfDays.map((day, i) => (
          <Totalpoints number={i + 1} />
        ))}
      </div>
    </div>
  );
}
