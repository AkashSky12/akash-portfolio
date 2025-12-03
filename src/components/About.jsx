import React from 'react'
import { useTranslation } from 'react-i18next'

export default function About(){
  const { t } = useTranslation()
  return (
    <section id="about" className="py-12">
      <h2 className="text-2xl font-semibold mb-4">{t('about.title')}</h2>
      <p className="text-gray-600 max-w-3xl">{t('about.p1')}</p>
      <div className="mt-4 text-sm text-gray-600">
        <div><strong>Location:</strong> {t('about.location')}</div>
        <div><strong>Email:</strong> <a href="mailto:akash.simon@outlook.com">akash.simon@outlook.com</a></div>
        <div><strong>Phone:</strong> +60-127474204</div>
      </div>
    </section>
  )
}
