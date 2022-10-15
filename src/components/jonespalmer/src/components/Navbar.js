import React from 'react'
import './Navbar.css'
import img from '../assets/NavbarLogo.svg'
const Navbar =()=> {

    function show() {
        document.getElementById('jpshowbar').classList.toggle('active');
        document.getElementById('jphamburger').classList.toggle('active')
        document.getElementById('jpclose').classList.toggle('active')
    }

    return (
        <header>
        <nav id="jpnavbar">
            <div class="logodiv">
             <img src={img} alt="Random text" class="jplogo"></img>
            </div>
        <div id="jpshowbar">
        <div id="jpclose" class="jpclose">
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="45" viewBox="0 0 50 50" overflow="visible" stroke="#fff" stroke-width="5" >
                <g color="#fff">
                <line x2="50" y2="45" />
                <line x1="50" y2="45" fill="currentcolor"/>
                </g>
             </svg>
        </div>
        <div id="jphamburger" class="jphamburger" onClick={e=>show()}>
            <svg viewBox="0 0 100 80" width="40" height="40">
                <g color="#fff">
                <rect width="100" height="10" fill="currentcolor"></rect>
                <rect y="30" width="100" height="10" fill="currentcolor"></rect>
                <rect y="60" width="100" height="10" fill="currentcolor"></rect>
                </g>
            </svg>
        </div>
        <ul class="jpnavbar-links">
          <li><a href="#jpsection1">Section1</a></li>
          <li><a href="#section2">Section2</a></li>
          <li><a href="#contact">Contact</a></li>
          <div class="underbar"></div>
        </ul>
      </div>
    </nav>
    </header>
    )

}

export default Navbar
