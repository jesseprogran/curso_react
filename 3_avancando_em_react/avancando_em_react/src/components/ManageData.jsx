import { useState } from "react";

const ManageData = () => {
  let someData = 50;

  const [number, setNumber] = useState(35);
  return (
    <div>
      <div>
        <p>Valor: {someData}</p>
      </div>

      <div>
        <p>Valor: {number}</p>
        <button onClick={() => setNumber(20)}>Mudar o state</button>
      </div>
    </div>
  );
};

export default ManageData;
