import {motion} from 'framer-motion'

function Skills() {
  return (
    <>
     <motion.section
      id="skills"
      className="section dark"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}>
      <h2 className="section-title">Compétences</h2>

      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            {skill}
          </div>
        ))}
      </div>
    </motion.section>
    </>
  )
}

export default Skills
 const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node.js",
    "Firebase",
    "MongoDB",
    "Mysql",
    "Git & GitHub",
  ];