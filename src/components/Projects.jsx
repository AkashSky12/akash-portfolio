import React from 'react'
import { useTranslation } from 'react-i18next'

export default function Projects(){
  const projects = [
    {title: 'E-Commerce QA Suite', desc: 'End-to-end Playwright automation for checkout and payments', link:'#'},
    {title: 'Healthcare Interop', desc: 'API contract testing and device interoperability validation', link:'#'},
    {title: 'Supply Chain Automation', desc: 'Selenium hybrid framework and CI integration', link:'#'}
  ]
  return (
    <section className="container section" id="projects">
      <h2>Selected Projects</h2>
      <div className="grid">
        {projects.map((p,i)=>(
          <a key={i} className="card" href={p.link}>
            <h4>{p.title}</h4>
            <p style={{color:'var(--muted)'}}>{p.desc}</p>
          </a>
        ))}
      </div>
    </section>
  )
}
