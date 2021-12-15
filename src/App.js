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
        <div>
          {/* <label htmlFor="input1">Titulo : </label> */}
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
