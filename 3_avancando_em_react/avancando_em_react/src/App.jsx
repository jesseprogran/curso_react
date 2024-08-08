
import { useState } from "react";
import ManageData from "./components/ManageData";
import ListRender from "./components/ListRender";
import Conditional from "./components/Conditional";
import ShowUserName from "./components/ShowUserName";
import CarDetails from "./components/CarDetails";


import "./App.css";
import hilux from "./assets/hilux.jpg";




function App() {

  let color = "Azul"
  let km = 120.00
  const brand = "Hilux"

  const userName = useState("Jessé Silva")
  return (
    <div className="App">
      <h1>Avançando no React</h1>
      {/* imagem em public */}
      <div>
        <img src="/ima01.jpg" alt="paisagem com lobo e filhote" />
      </div>
      {/* imagem em asset*/}
      <div>
        <img src={hilux} alt="foto de gelo" />
      </div>
      {/* <ManageData />
      <ListRender />
      <Conditional /> */}
      {/* Props */}
      <ShowUserName name={userName} />
      {/* Destructuring */}
      <CarDetails brand={brand} km={km} color={color} newCar={false} />
      {/* reaproveitando */}
      <CarDetails brand="Ford" color="Vermelha" km={0} newCar={true} />
      <CarDetails brand="Fiat" color="Branco" km={20000}  newCar={false} />
    </div>
  );
}

export default App;
