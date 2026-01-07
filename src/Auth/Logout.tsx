// import { signOut } from "firebase/auth";
// import { auth } from "../firebase";

// function Logout() {
//   const handleLogout = async () => {
//     await signOut(auth);
//     alert("Déconnecté !");
//   };

//   return <button onClick={handleLogout}>Logout</button>;
// }

// export default Logout;

import React from 'react'
import { motion } from 'framer-motion';
import { signOut } from 'firebase/auth';

function Logout() {
  
     const handleLogout= async()=>{
      // await signOut()
      alert('user is checkoutting')
     }
  return (
        <motion.section className="hero" id="home"
    initial={{opacity:0,y:50}} animate={{opacity:1,y:0}} transition={{duration:0.8}}>
      
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

export default Logout