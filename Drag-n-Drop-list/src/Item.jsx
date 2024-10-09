import React, { useContext } from "react";
import "./Item.css";
import { MyContext } from "./App";
export default function Item({ item }) {
  const { handleDrag } = useContext(MyContext);
  return (
    <div
      className="img"
      draggable={true}
      onDragStart={(e) => handleDrag(e, item)}
    >
      <img src={item} alt="" />
    </div>
  );
}
