import React from 'react'
import { useTranslation } from 'react-i18next'

export default function Experience(){
  // Data pulled from the uploaded CV. See README for citation.
  const timeline = [
    { role: 'Senior Quality Engineer', company: "Domino's Pizza Enterprises Limited", date: 'Aug 2023 - Dec 2025', details: ['Developed Playwright automation with Python','Integrated Grafana + K6 performance monitoring','Led AI-driven QA initiatives'] },
    { role: 'Senior Automation QA Engineer', company: 'Solve.Care', date: 'Apr 2022 - Jul 2023', details: ['Automation using Selenium','Blockchain API contract testing','Managed a QA team of 10'] },
    { role: 'Senior Software QA Engineer', company: 'Quinta Systems', date: 'Oct 2017 - Mar 2022', details: ['Designed hybrid automation frameworks','Mobile & API testing','CI/CD integration'] }
  ]
  return (
    <section className="container section" id="experience">
      <h2>Experience</h2>
      <div>
        {timeline.map((t,i)=>(
          <article key={i} style={{marginBottom:12}}>
            <h3>{t.role} — {t.company}</h3>
            <small style={{color:'var(--muted)'}}>{t.date}</small>
            <ul>
              {t.details.map((d,idx)=><li key={idx}>{d}</li>)}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}
