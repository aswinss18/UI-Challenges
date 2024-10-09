import Box from "./Box";
import Container from "./Container";
import "./App.css";
import { createContext, useState } from "react";

export const MyContext = createContext();
function App() {
  const [element, setElement] = useState([]);
  const handleDrag = (event, item) => {
    event.dataTransfer.setData("item", JSON.stringify(item));
  };
  const handleDrop = (event) => {
    const data = event.dataTransfer.getData("item");
    const droppedItem = JSON.parse(data);
    setElement((prev) => [...prev, droppedItem]);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };
  return (
    <>
      <MyContext.Provider
        value={{ element, setElement, handleDrag, handleDrop, handleDragOver }}
      >
        <div className="app">
          <Box />
          <Container />
        </div>
      </MyContext.Provider>
    </>
  );
}

export default App;
