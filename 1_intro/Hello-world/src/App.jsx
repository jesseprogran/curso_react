import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>Hello world React</h1>
      <h2>Emmet funcionou</h2>
      <p className="paragrafo">
        Fazendo a Resolução do Primeiro desafio do curso, que são três coisa que é preciso
        fazer, primeira tenho que adcionar um elemento(html) no meu app.js, segundo tenho 
        que criar uma regra de estilo pra esse elemento e a alterar a cor dele e por ultimo 
        tenho que no meu index.html alerar o título da meta tag; 
      </p>
      
    </div>
  );
}

export default App;

