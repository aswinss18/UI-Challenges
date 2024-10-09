import React from "react";
import Item from "./Item";
import "./Box.css";
const items = [
  "/images/Calculator.jpeg",
  "/images/Circle.jpeg",
  "/images/CLOCK ICON.jpeg",
  "/images/Dice.jpeg",
  "/images/Disney.jpeg",
  "/images/Finger.jpeg",
  "/images/Global Color.jpeg",
  "/images/Design.jpeg",
  "/images/Muc.jpeg",
  "/images/Nasa.jpeg",
  "/images/Pizza.jpeg",
  "/images/React.jpeg",
  "/images/Snapshot.jpeg",
  "/images/steam.jpeg",
  "/images/Visa.jpeg",
];

export default function Box() {
  return (
    <div className="box">
      {items.map((item, i) => (
        <Item item={item} key={i} />
      ))}
    </div>
  );
}
