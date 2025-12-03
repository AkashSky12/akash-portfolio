import React from 'react'

export default function Contact(){
  return (
    <section id="contact" className="py-12">
      <h3 className="text-xl font-semibold mb-4">Contact</h3>
      <p className="text-gray-600 mb-4">Send a message or reach out via email: <a href="mailto:akash.simon@outlook.com">akash.simon@outlook.com</a></p>
      <form name="contact" method="POST" data-netlify="true" className="max-w-xl">
        <input type="hidden" name="form-name" value="contact" />
        <div className="mb-3"><label className="block text-sm">Name<input name="name" required className="w-full px-3 py-2 border rounded" /></label></div>
        <div className="mb-3"><label className="block text-sm">Email<input name="email" type="email" required className="w-full px-3 py-2 border rounded" /></label></div>
        <div className="mb-3"><label className="block text-sm">Message<textarea name="message" rows="5" required className="w-full px-3 py-2 border rounded"></textarea></label></div>
        <div><button type="submit" className="px-4 py-2 bg-teal-500 text-white rounded">Send</button></div>
      </form>
    </section>
  )
}
