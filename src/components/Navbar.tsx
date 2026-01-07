import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import { auth } from "../firebase";

export default function Navbar() {
const [user,setUser]= useState(null)
useEffect(()=>{
  // const unsubmit = onAuthStateChanged(auth,(usernull)=>{setUser(usernull)});
  //  return unsubmit();
},[])

const [open, setOpen] = useState(false);
  return (
    
    <>
  <nav className="navbar">
      <h2 className="logo">François</h2>

      <div className={`menu-toggle ${open ? "open" : ""}`}
        onClick={() => setOpen(!open)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul className={`nav-links ${open ? "active" : ""}`}>
        <li><a onClick={() => setOpen(false)} href="#about">À propos</a></li>
        <li><a onClick={() => setOpen(false)} href="#skills">Compétences</a></li>
        <li><a onClick={() => setOpen(false)} href="#projects">Projets</a></li>
        <li><a onClick={() => setOpen(false)} href="#contact">Contact</a></li>
      </ul>

       {
        !user && <li style={{width:'fit-content', display:'flex',gap:'1rem', textTransform:'capitalize'}}> <Link to="/register">register</Link>  <Link to="/login">login</Link> </li>
       }

       {
        user && <Link to="/logout" style={{textTransform:'capitalize'}}>logout</Link>
       }

    </nav>

    </>
  )
}

