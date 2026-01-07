import { motion } from 'framer-motion';

function Register() {
  return (
        <motion.section className="hero" id="home"
        initial={{opacity:0,y:50}} animate={{opacity:1,y:0}} transition={{duration:0.8}}>
           <div className="hero-content content-login">
                <div className="meta">
                    <span>vous etes pret?</span>
                    <p>connexion? <a href="/login">login</a></p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum accusantium quidem illo.</p>
                </div>
                <form action="" className="form">
                  <h1 className=' '>Sing up</h1>
                  <label ><input type="text" name="" id="" placeholder="user name" /></label>
                  <label ><input type="email" name="" id="" placeholder="user email" /></label>
                  <label ><input type="password" name="" id="" placeholder="user password" /></label>
                  <input type="submit" value="Register"  />

                  <div className="lienExterne">
                    <p>ou ses connectés aux autres platforms</p>
                     <li className="li">
                         <a href="http://"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-facebook logIcon " viewBox="0 0 16 16"> <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/></svg></a>
                         <a href="http://"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-twitter logIcon " viewBox="0 0 16 16"> <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334q.002-.211-.006-.422A6.7 6.7 0 0 0 16 3.542a6.7 6.7 0 0 1-1.889.518 3.3 3.3 0 0 0 1.447-1.817 6.5 6.5 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.32 9.32 0 0 1-6.767-3.429 3.29 3.29 0 0 0 1.018 4.382A3.3 3.3 0 0 1 .64 6.575v.045a3.29 3.29 0 0 0 2.632 3.218 3.2 3.2 0 0 1-.865.115 3 3 0 0 1-.614-.057 3.28 3.28 0 0 0 3.067 2.277A6.6 6.6 0 0 1 .78 13.58a6 6 0 0 1-.78-.045A9.34 9.34 0 0 0 5.026 15"/></svg></a>
                         <a href="http://"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-facebook logIcon " viewBox="0 0 16 16"> <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/></svg></a>
                         <a href="http://"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-twitter logIcon " viewBox="0 0 16 16"> <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334q.002-.211-.006-.422A6.7 6.7 0 0 0 16 3.542a6.7 6.7 0 0 1-1.889.518 3.3 3.3 0 0 0 1.447-1.817 6.5 6.5 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.32 9.32 0 0 1-6.767-3.429 3.29 3.29 0 0 0 1.018 4.382A3.3 3.3 0 0 1 .64 6.575v.045a3.29 3.29 0 0 0 2.632 3.218 3.2 3.2 0 0 1-.865.115 3 3 0 0 1-.614-.057 3.28 3.28 0 0 0 3.067 2.277A6.6 6.6 0 0 1 .78 13.58a6 6 0 0 1-.78-.045A9.34 9.34 0 0 0 5.026 15"/></svg></a>
                    </li>
                  </div>
                </form>

      </div>
     
      <div className="absolu">
              <div className="ronde">
                    <span className='item' style={{'--i':12}}></span>
                    <span className='item' style={{'--i':11}}></span>
                    <span className='item' style={{'--i':32}}></span>
                    <span className='item' style={{'--i':21}}></span>
                    <span className='item' style={{'--i':12}}></span>
                    <span className='item' style={{'--i':15}}></span>
                    <span className='item' style={{'--i':21}}></span>
                    <span className='item' style={{'--i':16}}></span>
                    <span className='item' style={{'--i':12}}></span>
                    <span className='item' style={{'--i':12}}></span>
                    <span className='item' style={{'--i':32}}></span>
                    <span className='item' style={{'--i':22}}></span>
                    <span className='item' style={{'--i':12}}></span>
                    <span className='item' style={{'--i':25}}></span>
                    <span className='item' style={{'--i':42}}></span>
                    <span className='item' style={{'--i':21}}></span>
                    <span className='item' style={{'--i':22}}></span>
                    <span className='item' style={{'--i':56}}></span>
                    <span className='item' style={{'--i':22}}></span>
                    <span className='item' style={{'--i':32}}></span>
                    <span className='item' style={{'--i':22}}></span>
                    <span className='item' style={{'--i':12}}></span>
                    <span className='item' style={{'--i':15}}></span>
                    <span className='item' style={{'--i':42}}></span>
                    <span className='item' style={{'--i':11}}></span>
                    <span className='item' style={{'--i':22}}></span>
                    <span className='item' style={{'--i':11}}></span>
                    <span className='item' style={{'--i':10}}></span>
                </div>
             </div>
        </motion.section>
  )
}

export default Register