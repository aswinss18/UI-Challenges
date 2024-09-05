import React, { useState } from "react";
import Data from "./Data";
import "./Totalpoints.css";
const data = [
  { name: "Aswin", money: +12 },
  { name: "Sreeram", money: +8 },
  { name: "Athul", money: +5 },
  { name: "Anandh", money: -2 },
  { name: "Rahul", money: 0 },
];
export default function Totalpoints({ number }) {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  data.sort((a, b) => b.money - a.money);

  return (
    <div className="totalpoints">
      <div className="cover">
        <h2>Total points (day {number})</h2>
        <i
          className={isOpen ? "bi bi-chevron-down open" : "bi bi-chevron-up"}
          onClick={handleOpen}
        ></i>
      </div>
      {isOpen ? (
        <>
          {data.map((d, i) => (
            <Data key={i} data={data[i]} />
          ))}
        </>
      ) : (
        ""
      )}
    </div>
  );
}
