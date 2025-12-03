import React from 'react'
import { useTranslation } from 'react-i18next'

export default function Skills(){
  const { t } = useTranslation()
  const list = t('skills.list', { returnObjects: true })
  return (
    <section className="container section" id="skills">
      <h2>{t('skills.title')}</h2>
      <div className="skills-list">
        {list.map((s,i)=> <div key={i} className="skill">{s}</div>)}
      </div>
    </section>
  )
}
