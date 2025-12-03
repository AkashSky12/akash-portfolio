import React from 'react'
import { useTranslation } from 'react-i18next'

export default function Hero(){
  const { t } = useTranslation()
  return (
    <section className="container hero" id="home">
      <div className="text">
        <h1>{t('hero.title')}</h1>
        <p style={{color:'var(--muted)'}}>{t('hero.subtitle')}</p>
        <a className="card" href="/Akash_Simon_CV.pdf" download>{t('hero.cta')}</a>
      </div>
      <div style={{width:320}}>
        <img src="/src/assets/hero-illustration.svg" alt="hero" width="320" height="240" loading="lazy" />
      </div>
    </section>
  )
}
