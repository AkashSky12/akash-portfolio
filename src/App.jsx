import React, {useState} from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App(){
  const [dark,setDark] = useState(false)
  return (
    <div className={dark ? 'dark' : ''}>
      <Navbar dark={dark} setDark={setDark} />
      <main className="container">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
