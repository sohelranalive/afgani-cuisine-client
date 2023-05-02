import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [serverData, setServerData] = useState(null)

  useEffect(() => {
    fetch('http://localhost:5000/')
      .then(res => res.json())
      .then(data => setServerData(data))
  }, [])

  return (
    <>
      <h1>{serverData.name}</h1>
      <h1>{serverData.age}</h1>
    </>
  )
}

export default App
