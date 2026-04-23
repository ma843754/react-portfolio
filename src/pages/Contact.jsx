import ContactForm from '../components/ContactForm'
import '../styles/Contact.css'

function Contact() {
  return (
    <section className="contact">
      <h2>Contact Me</h2>
      <p>
        Feel free to reach out through the form below or connect with me on social media.
      </p>

      <ContactForm />

      <div className="social-links">
        <a href="https://github.com/ma843754" target="_blank" rel="noreferrer">GitHub</a>
        <a href="https://www.linkedin.com/in/marcella-roberts-50146a318" target="_blank" rel="noreferrer">LinkedIn</a>
        <a href="mailto:marcy.roberts23451@gmail.com">Email</a>
      </div>
    </section>
  )
}

export default Contact