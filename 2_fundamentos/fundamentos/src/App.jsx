// components
import FirstComponent from "./components/FiirstComponents"



import { useState } from 'react'
// styles / css
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div className='App'>
    <h1>Fundamentos React</h1>
    <FirstComponent />
   </div>
  )
}

export default App
