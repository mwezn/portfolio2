import React from "react";
import './navbar.css'
const Navbar =()=>{
    const show =(e)=>{
        document.getElementById('hamburger').classList.toggle('active')
         document.getElementById('close').classList.toggle('active')
}
    return(
        <nav id="navbar">
         <div id="showbar">
    <div id="close" class="close">
        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="45" viewBox="0 0 50 50" overflow="visible" stroke="#fff" stroke-width="5" >
            <g color="#fff">
            <line x2="50" y2="45" />
            <line x1="50" y2="45" fill="currentcolor"/>
            </g>
         </svg>
    </div>
    <div id="hamburger" class="hamburger" onClick={e=>show(e)}>
        <svg viewBox="0 0 100 80" width="40" height="40">
            <g color="#fff">
            <rect width="100" height="10" fill="currentcolor"></rect>
            <rect y="30" width="100" height="10" fill="currentcolor"></rect>
            <rect y="60" width="100" height="10" fill="currentcolor"></rect>
            </g>
        </svg>
    </div>
    <ul className="navbar-links">
      <li><a href="#aboutme">About</a></li>
      <li><a href="#projects">Projects</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </div>
</nav>
    )
}

export default Navbar;
