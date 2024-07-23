import "./App.css";
import Ima02 from "./assets/ima02.jpg";

function App() {
  return (
    <div className="App">
      <h1>Avançando no React</h1>
      {/* imagem em public */}
      <div>
        <img src="/ima01.jpg" alt="paisagem com lobo e filhote" />
      </div>
      {/* imagem em asset*/}
      <div>
       <img src={Ima02} alt="foto de gelo" />
      </div>
    </div>
  );
}

export default App;
