import React, {useState} from 'react'
import { useTranslation } from 'react-i18next'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App(){
  const { i18n } = useTranslation()
  const [dark, setDark] = useState(false)
  return (
    <div className={dark ? 'theme-dark' : 'theme-light'}>
      <Navbar dark={dark} setDark={setDark} i18n={i18n} />
      <main>
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
