import React, { useContext } from "react";
import Totalpoints from "./Totalpoints";
import "./Accordian.css";
import { MyContext } from "./App";
export default function Accordian() {
  const { numberOfDays } = useContext(MyContext);

  return (
    <div className="accordian">
      <h1>Markets</h1>
      <div>
        {numberOfDays.map((day, i) => (
          <Totalpoints number={i + 1} key={i} />
        ))}
      </div>
    </div>
  );
}
