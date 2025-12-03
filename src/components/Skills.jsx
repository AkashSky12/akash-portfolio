import React from 'react'
import { useTranslation } from 'react-i18next'

export default function Skills(){
  const { t } = useTranslation()
  const list = t('skills.list', { returnObjects: true })
  return (
    <section id="skills" className="py-12">
      <h3 className="text-xl font-semibold mb-4">{t('skills.title')}</h3>
      <div className="flex flex-wrap gap-2">
        {list.map((s,i)=>(<span key={i} className="px-3 py-1 bg-gray-100 rounded-full text-sm">{s}</span>))}
      </div>
    </section>
  )
}
