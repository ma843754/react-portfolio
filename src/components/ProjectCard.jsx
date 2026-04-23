function ProjectCard({ title, image, description, github, live }) {
  return (
    <div className="project-card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="project-links">
        <a href={github} target="_blank" rel="noreferrer">GitHub</a>
        <a href={live} target="_blank" rel="noreferrer">Live Demo</a>
      </div>
    </div>
  )
}

export default ProjectCard