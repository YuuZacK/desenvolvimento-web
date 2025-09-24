import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState("Sandro")
  const [frutas, setFrutas] = useState

  return (
    <>
      <h1>Contador - {name}</h1>
      <div>
        <button onClick={() => setCount}></button>
      </div>
    </>
  )
}

export default App
