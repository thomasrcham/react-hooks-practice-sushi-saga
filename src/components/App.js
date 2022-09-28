import React, { useEffect, useState } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  const [sushi, setSushi] = useState(null);
  const [plates, setPlates] = useState([]);
  const [wallet, setWallet] = useState(100);

  function handlePlates() {
    let newPlates = (plates) => [...plates, 0];
    setPlates(newPlates);
  }

  function handleWallet(price) {
    let newWallet = wallet - price.plate.price;
    setWallet(newWallet);
  }

  useEffect(() => {
    fetch("http://localhost:3001/sushis")
      .then((r) => r.json())
      .then((d) => setSushi(d));
  }, []);
  return (
    <div className="app">
      {sushi ? (
        <SushiContainer
          sushi={sushi}
          handlePlates={handlePlates}
          handleWallet={handleWallet}
          wallet={wallet}
        />
      ) : null}
      <Table plates={plates} wallet={wallet} />
    </div>
  );
}

export default App;
