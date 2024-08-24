import { useState } from 'react'
import About from './components/about'
import Timeline from './components/education'
import Hero from './components/hero'
import Navbar from './components/navbar'
import Skills from './components/skills'

function App() {

  return (
    <>
      <Navbar/>
      <Hero/>
      <About/>
      <Timeline/>
      <Skills/>
    </>
  )
}

export default App
