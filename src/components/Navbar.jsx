import React from 'react'
import { useTranslation } from 'react-i18next'

export default function Navbar({dark,setDark,i18n}){
  const { t } = useTranslation()
  const changeLang = (lng) => i18n.changeLanguage(lng)
  return (
    <header className="container nav">
      <div style={{display:'flex',alignItems:'center',gap:12}}>
        <img src="/src/assets/logo.svg" alt="logo" width="48" height="48" />
        <strong>Akash Simon</strong>
      </div>
      <nav>
        <a href="#about">{t('nav.about')}</a>
        <a href="#skills">{t('nav.skills')}</a>
        <a href="#experience">{t('nav.experience')}</a>
        <a href="#projects">{t('nav.projects')}</a>
        <a href="#contact">{t('nav.contact')}</a>
        <button onClick={()=>setDark(d=>!d)} aria-label="Toggle dark">🌓</button>
        <button onClick={()=>changeLang('en')} title="English"><img src={import.meta.env.BASE_URL + 'favicons/flag-gb.png'} alt="gb" width="18" /></button>
        <button onClick={()=>changeLang('de')} title="Deutsch"><img src={import.meta.env.BASE_URL + 'favicons/flag-de.png'} alt="de" width="18" /></button>
        <button onClick={()=>changeLang('fr')} title="Français"><img src={import.meta.env.BASE_URL + 'favicons/flag-fr.png'} alt="fr" width="18" /></button>
      </nav>
    </header>
  )
}
