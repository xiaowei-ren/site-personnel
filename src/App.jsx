import { useState } from 'react'
import './App.css'
import Header from '../src/components/Header/Header'
import Acceuil from '../src/components/Acceuil/Acceuil'
import About from '../src/components/About/About'
import Skills from '../src/pages/Skills'
import Experience from '../src/pages/Experience'

function App() {

  return (
    <main>
      <Acceuil />
      <About />
      <Skills />
      <Experience />


    </main>
  )
}

export default App
