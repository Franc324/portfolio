import {motion} from 'framer-motion'
import { Language } from 'firebase/ai';
import { span } from 'framer-motion/client';

function Skills() {

  return (
    <>
     <motion.section
      id="skills"
      className="section dark"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }} style={{display:'flex',gap:'5rem', justifyContent:'space-between',position:'relative'}}>
      <h2 className="section-title titre" style={{position:'absolute', top:'4%'}}>Compétences</h2>
        <div className="pointage">
        </div>
    <div className="content-skill">
      <h2 className="title-skill titreWB" > WEB</h2>

      <div className="skills-grid" >
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            {skill}
          </div>
        ))}

        </div>
    </div>


    <div className="content-skill ">
      <h2 className="title-skill" >RESEAUX</h2>
          
      <div className="skills-grid skillAnimation">
        {skillesRS.map((skill, index) => (
          <div key={index} className="skill-card" style={{height:'80px',fontSize:'14px'}}>
            {skill}
          </div>
        ))}

      </div>

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
    "PHP",
    "Firebase",
    "MongoDB",
    "Mysql",
    "Git & GitHub",
  ];
  
  const skillesRS=[
    "Administration Réseau", 
    "Configaration Reseau", 
    "Inst-Syst-Exploitation", 
    "Routage d'Adresse"
  ]