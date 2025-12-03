import React from 'react'

export default function Experience(){
  const timeline = [
    { role: 'Senior Quality Engineer', company: "Domino's Pizza Enterprises Limited", date: 'Aug 2023 - Present', details: ['Playwright automation','K6 performance monitoring','Team leadership'] },
    { role: 'Senior Automation QA Engineer', company: 'Solve.Care', date: 'Apr 2022 - Jul 2023', details: ['Selenium automation','API contract tests','Mentoring'] },
    { role: 'Senior Software QA Engineer', company: 'Quinta Systems', date: 'Oct 2017 - Mar 2022', details: ['Hybrid frameworks','Mobile & API testing','CI/CD'] }
  ]
  return (
    <section id="experience" className="py-12">
      <h3 className="text-xl font-semibold mb-4">Experience</h3>
      <div className="space-y-6">
        {timeline.map((t,i)=>(
          <div key={i} className="p-4 border rounded">
            <div className="flex justify-between items-center">
              <div><strong>{t.role}</strong><div className="text-sm text-gray-600">{t.company}</div></div>
              <div className="text-sm text-gray-500">{t.date}</div>
            </div>
            <ul className="mt-2 list-disc list-inside text-sm text-gray-600">
              {t.details.map((d,idx)=><li key={idx}>{d}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
