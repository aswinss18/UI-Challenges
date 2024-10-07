import React, { useContext, useState } from "react";
import Data from "./Data";
import "./Totalpoints.css";
import { MyContext } from "./App";
export default function Totalpoints({ number }) {
  const { data, isOpen, setIsOpen, handleOpen } = useContext(MyContext);
  data.sort((a, b) => b.money - a.money);

  return (
    <div className="totalpoints" onClick={handleOpen}>
      <div className="cover">
        <h2>Total points (day {number})</h2>
        <i
          className={isOpen ? "bi bi-chevron-down open" : "bi bi-chevron-up"}
        ></i>
      </div>
      {isOpen && (
        <>
          {data.map((d, i) => (
            <Data key={i} data={data[i]} />
          ))}
        </>
      )}
    </div>
  );
}
