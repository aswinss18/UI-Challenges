import React, { useContext } from "react";
import { MyContext } from "./App";
import "./Container.css";

export default function Container() {
  const { element, handleDrop, handleDragOver } = useContext(MyContext);

  return (
    <div className="container" onDrop={handleDrop} onDragOver={handleDragOver}>
      <h2>Drop Gallery</h2>
      <div className="img-container">
        {element.map((imgSrc, index) => (
          <img key={index} src={imgSrc} alt={`Dropped ${index}`} />
        ))}
      </div>
    </div>
  );
}
