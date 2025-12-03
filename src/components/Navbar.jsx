import React from 'react'
import { useTranslation } from 'react-i18next'

export default function Navbar({dark,setDark}){
  const { t, i18n } = useTranslation()
  return (
    <header className="container flex items-center justify-between py-6">
      <div className="flex items-center gap-3">
        <img src={import.meta.env.BASE_URL + 'assets/logo.svg'} alt="logo" className="w-12 h-12"/>
        <div>
          <div className="font-bold">Akash Simon</div>
          <div className="text-sm text-gray-500">Senior QA Engineer</div>
        </div>
      </div>
      <nav className="flex items-center gap-4">
        <a href="#about" className="text-sm">{t('nav.about')}</a>
        <a href="#skills" className="text-sm">{t('nav.skills')}</a>
        <a href="#experience" className="text-sm">{t('nav.experience')}</a>
        <a href="#projects" className="text-sm">{t('nav.projects')}</a>
        <button onClick={()=>setDark(d=>!d)} className="px-3 py-1 rounded bg-gray-100">Toggle</button>
        <button onClick={()=>i18n.changeLanguage('en')} title="English"><img src={import.meta.env.BASE_URL + 'favicons/flag-gb.png'} alt="en" className="w-5 h-5" /></button>
        <button onClick={()=>i18n.changeLanguage('de')} title="Deutsch"><img src={import.meta.env.BASE_URL + 'favicons/flag-de.png'} alt="de" className="w-5 h-5" /></button>
        <button onClick={()=>i18n.changeLanguage('fr')} title="French"><img src={import.meta.env.BASE_URL + 'favicons/flag-fr.png'} alt="fr" className="w-5 h-5" /></button>
      </nav>
    </header>
  )
}
