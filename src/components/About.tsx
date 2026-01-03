import {motion} from 'framer-motion'

function About() {
  return (
    <>
    <motion.section
      className="section"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }} id="about" >
      <h2 className="section-title">À propos de moi</h2>

      <p className="about-text">
        Je suis développeur web passionné par la création d’applications
        modernes et performantes. J’ai de l’expérience avec React,
        JavaScript, Node.js et Firebase. J’aime résoudre des problèmes
        et apprendre de nouvelles technologies.
      </p>
    </motion.section>
    </>
  )
}

export default About