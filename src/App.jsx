import { useState } from 'react'
import Hero from './components/hero'
import Navbar from './components/navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Hero/>
    </>
  )
}

export default App
