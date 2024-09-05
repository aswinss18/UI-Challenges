import React, { useState } from "react";
import Data from "./Data";
import "./Totalpoints.css";
const data = ["Aswin", "Sreeram", "Anandh", "Rahul", "Athul"];
export default function Totalpoints() {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="totalpoints">
      <div className="cover">
        <h2>Total points</h2>
        <i
          className={isOpen ? "bi bi-chevron-down open" : "bi bi-chevron-up"}
          onClick={handleOpen}
        ></i>
      </div>
      {isOpen ? (
        <>
          {data.map((d, i) => (
            <Data key={i} name={d} />
          ))}
        </>
      ) : (
        ""
      )}
    </div>
  );
}
