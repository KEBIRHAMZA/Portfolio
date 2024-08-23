import { useState } from 'react'
import About from './components/about'
import Hero from './components/hero'
import Navbar from './components/navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Hero/>
      <About/>
    </>
  )
}

export default App
