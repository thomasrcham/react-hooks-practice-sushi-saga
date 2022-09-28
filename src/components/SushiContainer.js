import React, { useState } from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer({ sushi, handlePlates, handleWallet, wallet }) {
  const [page, setPage] = useState(1);
  let num1 = page * 4 - 3;
  let num2 = page * 4;

  function handleMoreButton() {
    let newPage = (page) => page + 1;
    setPage(newPage);
  }

  let tableSushi = sushi.filter(
    (sushi) => sushi.id >= num1 && sushi.id <= num2
  );
  return (
    <div className="belt">
      {tableSushi.map((plate) => (
        <Sushi
          plate={plate}
          key={plate.id}
          handlePlates={handlePlates}
          handleWallet={handleWallet}
          wallet={wallet}
        />
      ))}
      <MoreButton handleMoreButton={handleMoreButton} />
    </div>
  );
}

export default SushiContainer;
