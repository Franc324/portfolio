import {motion} from 'framer-motion'

function Hero() {
  return (
    <>
    <motion.section className="hero" id="home"
    initial={{opacity:0,y:50}} animate={{opacity:1,y:0}} transition={{duration:0.8}}
    >
      <div className="hero-content">
        <h1>François Nkumwimba</h1>
        <h2>Développeur Web Full Stack</h2>
        <p>
          Je conçois des applications web modernes, rapides et sécurisées
          avec React, Node.js et Firebase.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="btn primary">Voir mes projets</a>
          <a href="#contact" className="btn secondary">Me contacter</a>
        </div>
      </div>
    </motion.section>

    </>
  )
}

export default Hero