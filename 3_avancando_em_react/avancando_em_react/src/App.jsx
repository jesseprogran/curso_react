
import { useState } from "react";
import ManageData from "./components/ManageData";
import ListRender from "./components/ListRender";
import Conditional from "./components/Conditional";
import ShowUserName from "./components/ShowUserName";

import "./App.css";
import Ima02 from "./assets/ima02.jpg";



function App() {

  const userName = useState("Dalila Pereira")
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
      <ManageData />
      <ListRender />
      <Conditional />
      <ShowUserName name={userName} />
    </div>
  );
}

export default App;
