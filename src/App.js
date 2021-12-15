import "./App.css";
import { useEffect, useState } from "react";
import Card from "./components/Card";
import { listCharacters } from "./services/characters";

function App() {
  const [card, setCard] = useState([]);
  const [dataInfo, setDataInfo] = useState({});

  useEffect(() => {
    const name = async () => {
      const { results, info } = await listCharacters();
      setCard(results);
      setDataInfo(info);
    };
    name();
  }, []);

  const handleClick = async (action) => {
    if (action === "next" && dataInfo.next !== null) {
      const page = dataInfo.next.split("?")[1];
      const { results, info } = await listCharacters(page);
      setCard(results);
      setDataInfo(info);
    }

    if (action === "prev" && dataInfo.prev !== null) {
      const page = dataInfo.prev.split("?")[1];
      const { results, info } = await listCharacters(page);
      setCard(results);
      setDataInfo(info);
    }
  };

  const cardUI = card.map(({ id, name, status, species, image }) => (
    <Card
      key={id}
      name={name}
      status={status}
      species={species}
      image={image}
    />
  ));

  const infoPrevNext = () => {
    if (dataInfo.prev === null) {
      return (
        <button className="btn" disabled>
          Prev
        </button>
      );
    } else {
      return (
        <button className="btn" onClick={() => handleClick("prev")}>
          Prev
        </button>
      );
    }
  };

  return (
    <div className="App">
      <div className="container">
        {infoPrevNext()}
        <button className="btn" onClick={() => handleClick("next")}>
          Next
        </button>
      </div>
      {setCard && cardUI}
    </div>
  );
}

export default App;
