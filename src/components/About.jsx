import React from 'react'
import { useTranslation } from 'react-i18next'
import cvfile from '../assets/cv.pdf'

export default function About(){
  const { t } = useTranslation()
  return (
    <section className="container section" id="about">
      <h2>{t('about.title')}</h2>
      <p>{t('about.p1')}</p>
      <p><strong>Location:</strong> {t('about.location')}</p>
      <p><strong>Email:</strong> <a href="mailto:akash.simon@outlook.com">akash.simon@outlook.com</a></p>
      <p><strong>Phone:</strong> +60-127474204</p>
    </section>
  )
}
