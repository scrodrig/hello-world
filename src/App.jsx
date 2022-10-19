import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <p>Hello world {11 + 20}</p>
    </div>
  )
}

export default App
