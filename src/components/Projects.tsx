import {motion} from 'framer-motion'
type Project = {
  title: string;
  description: string;
  tech: string[];
  github: string;
};

function Projects() {
   const projects: Project[] = [
    {
      title: "Gestion d'hôpital",
      description: "Application web pour la gestion des patients, rendez-vous et dossiers médicaux.",
      tech: ["React", "Node.js", "Firebase"],
      github: "#",
    },
    {
      title: "Portfolio personnel",
      description: "Portfolio moderne développé avec React et TypeScript.",
      tech: ["React", "TypeScript", "CSS"],
      github: "#",
    },
    {
      title: "API Étudiants",
      description: "API REST pour la gestion des étudiants avec Node.js et MongoDB.",
      tech: ["Node.js", "MongoDB", "Express"],
      github: "#",
    },
  ];

  return (
    <>
<motion.section
      id="projects"
      className="section"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}>
      <h2 className="section-title">Projets</h2>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>

            <div className="tech-list">
              {project.tech.map((t, i) => (
                <span key={i}>{t}</span>
              ))}
            </div>

            <a href={project.github} target="_blank">
              Voir sur GitHub
            </a>
          </div>
        ))}
      </div>
    </motion.section>
    </>
  )
}


export default Projects
