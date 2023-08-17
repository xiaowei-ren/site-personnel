
import './App.css'
import About from '../src/components/About/About'
import Skills from '../src/pages/Skills'
import Experience from '../src/pages/Experience'
import Projet from "../src/pages/Projet"
import Footer from "../src/components/Footer/Footer"
import Header from "../src/components/Header/Header"
import Acceuil from "../src/components/Acceuil/Acceuil"
function App() {
  return (
    <div>
      <Header />
      <main>
          <Acceuil />
          <About />
          <Skills />
          <Experience />
          <Projet />
      </main>
      <Footer />
    </div>
  )
}

export default App
