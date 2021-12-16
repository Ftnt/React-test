import "./App.css";
import { useState } from "react";
import CardCredit from "./components/CardCredit";

function App() {
  const [numberCard, setNumberCard] = useState("");
  const [nameCard, setNameCard] = useState("");
  const [dateCard, setDateCard] = useState("");
  const [cvcCard, setCvcCard] = useState("");

  const handleChange = (event) => {
    setNumberCard(event.target.value);
  };

  return (
    <div className="container">
      <CardCredit numberCard={numberCard} />
      <form className="form">
        <div className="">
          <input
            id="input1"
            type="text"
            onChange={handleChange}
            pattern="[0-9]{0,13}"
            mask="0000 0000 0000"
            value={numberCard}
          />
          <input
            id="input1"
            type="text"
            onChange={handleChange}
            value={numberCard}
          />
          <input
            id="input1"
            type="text"
            onChange={handleChange}
            value={numberCard}
          />
        </div>
      </form>
    </div>
  );
}

export default App;
