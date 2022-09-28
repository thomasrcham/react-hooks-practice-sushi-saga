import { useState } from "react";

function Sushi({ plate, handlePlates, handleWallet, wallet }) {
  const [eaten, setEaten] = useState(false);

  let clickVar =
    wallet > plate.price
      ? (e) => {
          setEaten(true);
          handlePlates();
          handleWallet({ plate });
        }
      : null;

  return (
    <div className="sushi">
      <div className="plate" onClick={clickVar}>
        {eaten ? null : (
          <img src={plate.img_url} alt={plate.name + " Sushi"} width="100%" />
        )}
      </div>
      <h4 className="sushi-details">
        {plate.name} - ${plate.price}
      </h4>
    </div>
  );
}

export default Sushi;
