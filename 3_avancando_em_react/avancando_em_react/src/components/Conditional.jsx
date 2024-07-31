import { useState } from "react";

const Conditional = () => {
  const [x] = useState(false);
  const [name, setName] = useState("Jessé Silva");
  return (
    <div>
      <h1>Isso será exibido?</h1>
      {x && <p>Se x for true, sim!</p>}
      {!x && <p>agora x é false</p>}
      <h1>If ternário</h1>
      {name === "Davi Silva" ? (
        <div>
          <p>O nome é Davi Silva</p>
        </div>
      ) : (
        <div>
          <p>Nonme Não encontrado!</p>
        </div>
      )}
      <button onClick={() => setName("Davi Silva")}> CLique aqui!</button>
    </div>
  );
};

export default Conditional;
