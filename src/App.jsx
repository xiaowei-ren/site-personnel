import { useState } from 'react'
import './App.css'
import Header from '../src/components/Header/Header'
import Acceuil from '../src/components/Acceuil/Acceuil'
import About from '../src/components/About/About'
import Skills from '../src/pages/Skills'

function App() {

  return (
    <main>
      <Acceuil />
      <About />
      <Skills />

    </main>
  )
}

export default App
