import React from "react";
import './navbar.css'
const Navbar =()=>{

     let menuopen=false;
   const show =(e)=>{
        
       let menubtn=document.querySelector('.menu-btn')
       if(!menuopen){
            menubtn.classList.add('open')
            document.getElementById('links').classList.add('active')
            menuopen=true;
        }
        else {
            menubtn.classList.remove('open')
            document.getElementById('links').classList.remove('active')
            menuopen=false;
        }
        console.log('clicked')
    }    
    
    
    return(
        <nav className="main" id="navbar">
        <div className="menu-btn" onClick={e=>show(e)}>
            <div className="menu-btn-burger"></div>
        </div>
         <div id="links">
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
