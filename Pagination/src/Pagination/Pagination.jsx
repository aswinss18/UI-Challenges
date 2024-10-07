import React, { useEffect, useState } from "react";
import Item from "../Item/Item";
import "./Pagination.css";

export default function Pagination() {
  const [items, setItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 1; // Define how many items to display per page

  // Fetch data from API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://run.mocky.io/v3/13d3bf78-5f53-42e1-bbd9-1a8c6b054940"
        );
        const data = await response.json();
        setItems(data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);

  // Function to handle next page
  const handlePageNext = () => {
    if (currentPage < Math.ceil(items.length / itemsPerPage)) {
      setCurrentPage((prevPage) => prevPage + 1);
    } else {
      setCurrentPage(1); // Loop back to first page
    }
  };

  // Function to handle previous page
  const handlePagePrev = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    } else {
      setCurrentPage(Math.ceil(items.length / itemsPerPage)); // Loop back to last page
    }
  };

  // Determine the items to display for the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);
  return (
    <div className="body">
      <div className="control">
        <button onClick={handlePagePrev}>&lt;</button>
        <h2>Page no: {currentPage}</h2>
        <button onClick={handlePageNext}>&gt;</button>
      </div>

      <div className="pagination">
        {currentItems.map((item, i) => (
          <Item item={item} key={i} />
        ))}
      </div>
    </div>
  );
}
