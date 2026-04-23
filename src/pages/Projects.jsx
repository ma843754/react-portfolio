import ProjectCard from '../components/ProjectCard'
import '../styles/Projects.css'

import project1 from '../assets/Project1.png'
import project2 from '../assets/Project2.png'
import project3 from '../assets/Project3.png'

function Projects() {
  const projects = [
        {
      title: 'Trip Planner',
      image: project1,
      description:
        'A React-based travel planning application that helps users organize activities, budgets, and trip details in one place.',
      github: 'https://github.com/ma843754/trip-planner',
      live: 'https://lively-swan-3e7f87.netlify.app/'
    },
    {
      title: 'ARCO',
      image: project2,
      description:
        'A gamified violin education app designed to help children learn music theory and violin skills through interactive features.',
    },
    {
      title: 'Salty Paws Cafe',
      image: project3,
      description:
        'A branded website concept for a dog-friendly beach cafe featuring menu highlights, merchandise, and a fun coastal visual style.',
      github: 'https://github.com/ma843754/saltypawscafe',
      live: 'https://leafy-sprinkles-c6b50b.netlify.app/'
    }
  ]

  return (
    <section className="projects">
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  )
}

export default Projects