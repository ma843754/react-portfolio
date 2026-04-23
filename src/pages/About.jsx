import '../styles/About.css'

function About() {
  return (
    <section className="about">
      <h2>About Me</h2>
      <p>
        I am a Digital Media student at UCF with a focus on web design and front-end
        development. I enjoy building clean, responsive, and visually engaging websites
        that prioritize accessibility and user experience.
      </p>

      <h3>Skills</h3>
      <ul className="skills-list">
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>Figma</li>
        <li>Responsive Design</li>
        <li>Accessibility</li>
      </ul>

      <h3>Interests</h3>
      <p>
        I’m interested in UX/UI design, branding, visual storytelling, and creating
        digital experiences that feel both useful and memorable.
      </p>
    </section>
  )
}

export default About