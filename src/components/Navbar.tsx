import { useState } from "react";

export default function Navbar() {

const [open, setOpen] = useState(false);
  return (
    
    <>
  <nav className="navbar">
      <h2 className="logo">François</h2>

      <div
        className={`menu-toggle ${open ? "open" : ""}`}
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
    </nav>

    </>
  )
}

