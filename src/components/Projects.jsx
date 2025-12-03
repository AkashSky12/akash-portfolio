import React from 'react'

export default function Projects(){
  const projects = [
    {title: 'E-Commerce QA Suite', desc: 'End-to-end Playwright automation for checkout and payments', link:'#'},
    {title: 'Healthcare Interop', desc: 'API contract testing and device interoperability validation', link:'#'},
    {title: 'Supply Chain Automation', desc: 'Selenium hybrid framework and CI integration', link:'#'}
  ]
  return (
    <section id="projects" className="py-12">
      <h3 className="text-xl font-semibold mb-4">Selected Projects</h3>
      <div className="grid md:grid-cols-3 gap-4">
        {projects.map((p,i)=>(
          <a key={i} className="block p-4 border rounded hover:shadow" href={p.link}>
            <h4 className="font-semibold">{p.title}</h4>
            <p className="text-sm text-gray-600">{p.desc}</p>
          </a>
        ))}
      </div>
    </section>
  )
}
