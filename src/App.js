import "./App.css";
import { Counter } from "./components/Counter";
import NavBar from "./components/NavBar";
import { useEffect, useState } from "react";
import Line from "./components/Line";
import Card from "./components/Card";

function App() {
  const [card, setCard] = useState([]);

  useEffect(() => {
    const getPersonajes = async () => {
      const response = await fetch(
        "https://rickandmortyapi.com/api/character/"
      );
      const data = await response.json();
      console.log(data.results);
      setCard(data.results);
    };
    getPersonajes();
  }, []);

  const cardUI = card.map(({ id, name, status, species, image }) => (
    <Card
      key={id}
      name={name}
      status={status}
      species={species}
      image={image}
    />
  ));

  return (
    <div className="App">
      {/* <header className="App-header">
        <Line color="#ff000045"></Line>
        <Counter />
        <NavBar />
      </header> */}
      {cardUI}
    </div>
  );
}

export default App;
