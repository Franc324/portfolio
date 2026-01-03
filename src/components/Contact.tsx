import {motion} from 'framer-motion'

function Contact() {
  return (
    <>
 <motion.section
      id="contact"
      className="section dark"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}>
      <h2 className="section-title">Contact</h2>

      <form className="contact-form">
        <input type="text" placeholder="Votre nom" required />
        <input type="email" placeholder="Votre email" required />
        <textarea placeholder="Votre message" rows={5} required></textarea>

        <button type="submit">Envoyer</button>
      </form>
    </motion.section>
    </>
  )
}

export default Contact