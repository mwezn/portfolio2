import React from "react";
import './navbar.css'
const Navbar =()=>{
    let menuopen=false;
    let menubtn=document.querySelector('.menu-btn')
    const show =(e)=>{
        //document.getElementById('showbar').classList.toggle('active')
        if(!menuopen){
            menubtn.classList.add('open')
            document.getElementById('showbar').classList.add('active')
            menuopen=true;
        }
        else {
            menubtn.classList.remove('open')
            document.getElementById('showbar').classList.remove('active')
            menuopen=false;
        }
    }
    return(
        <nav id="navbar">
        <div className="menu-btn" onClick={e=>show(e)}>
            <div className="menu-btn-burger"></div>
        </div>
         <div id="showbar">
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
