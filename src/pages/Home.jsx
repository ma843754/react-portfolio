import { Link } from 'react-router-dom'
import '../styles/Home.css'

function Home() {
  return (
    <section className="home">
      <div className="hero-overlay">
        <h2>Hello, I’m Marcella</h2>
        <p>
          I’m a Digital Media student and aspiring web designer focused on
          responsive design, accessibility, and user-centered experiences.
        </p>
        <Link to="/projects" className="btn">View My Work</Link>
      </div>
    </section>
  )
}

export default Home