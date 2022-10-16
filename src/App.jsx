import { useState } from 'react'
import './App.css'

function App() {
  const [id, setId] = useState()
  const [letter, setLetter] = useState()
  const arrayDNI = ["T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E"]
  const calculateletter = () => {
    const indexofarray = id % 23
    setLetter(arrayDNI[indexofarray])
    console.log(indexofarray)

  }
  
  return (
    <div className="App">
      <input value={id} onChange={e => setId(e.target.value)} />
      <button onClick={() => calculateletter()}> Calcular </button>
      <div> {letter} </div>
    </div>
  )
}

export default App
