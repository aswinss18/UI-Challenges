import { createContext, useState } from "react";
import Accordian from "./Accordian";
import "./App.css";
export const MyContext = createContext();
const numberOfDays = [1, 2, 3, 4, 5, 6, 7];
const data = [
  { name: "Aswin", money: +12 },
  { name: "Sreeram", money: +8 },
  { name: "Athul", money: -5 },
  { name: "Anandh", money: -2 },
  { name: "Rahul", money: 0 },
];

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = (index) => {
    setIsOpen((isOpen) => !isOpen);
  };
  return (
    <>
      <MyContext.Provider
        value={{ numberOfDays, data, isOpen, setIsOpen, handleOpen }}
      >
        <div className="container">
          <Accordian />
        </div>
      </MyContext.Provider>
    </>
  );
}

export default App;
