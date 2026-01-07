import {motion} from 'framer-motion'
import Photo2 from '../assets/photo2.jpg'
function About() {
  return (
    <>
    <motion.section
      className="section"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }} id="about" >

      <div className="about-content">
        <div className="pointage">
        </div>
        <div className="card-content">
          <div className="text">
              <p className="about-text-absolut">
                Je suis <strong style={{color:'yellow'}}>étudient finaliste</strong>  à l'université Espoir d'Afrique au Burundi 
                <p className='p1'>Dans le domain de la télécommunication pressisement dans le système de sécurité des réseaux <strong style={{color:'#345633'}}>SSR</strong> </p>
              </p>
             <h2 className="section-title">À propos de moi</h2>
             <p className="about-text">
                Mais aussi <strong style={{color:'#38bdf8'}}>développeur web </strong> passionné par la création d’applications
                modernes et performantes.<p className='p1'> J’ai de l’expérience avec React,
                JavaScript, Node.js et Firebase. J’aime résoudre des problèmes
                et apprendre de nouvelles technologies.</p>
              </p>
              <div className="language">
                <ul>
                  <li className="list-lang"><strong>Français</strong>  <span className="volume volume1"> </span>  <h3 className="percent">70%</h3></li>
                  <li className="list-lang"><strong>Anglais</strong>  <span className="volume volume2"> </span>  <h3 className="percent">50%</h3></li>
                  <li className="list-lang"><strong>Swahili</strong>  <span className="volume volume3"> </span>  <h3 className="percent">70%</h3></li>
                </ul>
              </div>
              {/* <div className="language language1"></div> */}
              {/* <div className="language language2"></div> */}
         </div>
        </div>

      </div>
    </motion.section>
    </>
  )
}

export default About