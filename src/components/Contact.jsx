import React from 'react'
export default function Contact(){
  return (
    <section className="container section" id="contact">
      <h2>Contact</h2>
      <p>Send a message or reach out via email: <a href="mailto:akash.simon@outlook.com">akash.simon@outlook.com</a></p>
      <form name="contact" method="POST" data-netlify="true">
        <input type="hidden" name="form-name" value="contact" />
        <div><label>Name<input name="name" required /></label></div>
        <div><label>Email<input name="email" type="email" required /></label></div>
        <div><label>Message<textarea name="message" rows="5" required></textarea></label></div>
        <div><button type="submit">Send</button></div>
      </form>
    </section>
  )
}
