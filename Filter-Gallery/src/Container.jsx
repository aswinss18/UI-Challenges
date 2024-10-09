import React, { useEffect, useState } from "react";
import "./container.css";
import Item from "./item";
export default function Container() {
  // https://run.mocky.io/v3/79a7a1ad-7aeb-4cae-a66d-479a1b92a24d

  const [data, setData] = useState([]);
  const [originalData, setOriginalData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "https://run.mocky.io/v3/79a7a1ad-7aeb-4cae-a66d-479a1b92a24d"
      );
      const responseData = await response.json();

      setData(responseData);
      setOriginalData(responseData);
    }
    fetchData();
    console.log(data, 1);
  }, []);
  let sortedData = [];
  const sortByPrice = () => {
    const sortedData = [...data].sort((a, b) => a.price - b.price);
    setData((data) => [...sortedData]);
  };
  const filterByItem = (itemType) => {
    const filteredData = [...originalData].filter(
      (item) => item.name === itemType
    );
    console.log(filteredData);
    setData((data) => [...filteredData]);
  };
  const reset = () => {
    setData(originalData);
  };
  return (
    <div className="full">
      <div className="controls">
        <button onClick={sortByPrice}>sort by price</button>
        <select onChange={(e) => filterByItem(e.target.value)}>
          <option value="Television">Television</option>{" "}
          <option value="Air Conditioner">Air Conditioner</option>{" "}
          <option value="Laptop">Laptop</option>{" "}
          <option value="Washing Machine">Washing Machine</option>{" "}
          <option value="Microwave Oven">Microwave Oven</option>
        </select>
        <button onClick={reset}>reset</button>
      </div>
      <div className="container">
        {data.map((item, i) => (
          <Item item={item} key={i} i={i} />
        ))}
      </div>
    </div>
  );
}
