// components
import FirstComponent from "./components/FiirstComponents";
import TemplateExpressions from "./components/TemplateExpressions";
import MyComponents from "./components/MyComponent";
import Events from "./components/Events";
import Challenge from "./components/Challenge";

import { useState } from "react";

// styles / css
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>Fundamentos React</h1>
      <FirstComponent />
      <TemplateExpressions />
      <MyComponents />
      <Events />
      <Challenge />
    </div>
  );
}

export default App;
