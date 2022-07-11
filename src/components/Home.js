import React from 'react'
import mypic from '../assets/mypic.jpg'
import './home.css'
import { useEffect } from 'react'
const Home =()=>{

    var txt='';
    var i = 0;
    var speed = 200;
    function typeWriter() {
        txt = ` Hello I'm Michael.` 
         if (i < txt.length) {
           document.getElementById("demo").innerHTML += txt.charAt(i);
           i++;
           setTimeout(typeWriter, speed);
         }
    }

    useEffect(()=>{
     typeWriter();
    })

    
    return(
    <div id="aboutme">
        <div id="about">
        <div className="typingeff">
          <h1 id="demo">:~</h1>
        </div>
        <div className="mypic">
        <img className="mypic" alt="mypic" src={mypic}></img>
        </div>
        </div>
    <h2>Im a maths graduate with a deep interest in computer science, technology & how our world works. 
        Before working as a freelancer I worked in several other different places including roles as a teaching assistant, bartender & construction work. This site is just like me...a constant work in progress!
        </h2>
    <div className='tech'>
    <div className='currenttech'>
        <h3>Technologies im familiar with:</h3>
    <ul>
        <li>HTML/CSS</li>
        <li>React</li>
        <li>Redux</li>
        <li>Jest</li>
        <li>MongoDB</li>
        <li>Python</li>
        <li>Docker</li>
        <li>AWS</li>
    </ul>
    </div>
    <div className='futuretech'>
        <h3>Technologies & skills I want to learn more about:</h3>
    <ul>
        <li>Machine Learning</li>
        <li>Django</li>
        <li>Postgres/ SQL</li>
        <li>Nanonetworks</li>
        <li>CyberSecurity/ Ethical Hacking</li>
    </ul>
    </div>
    </div>

</div>
    )
}

export default Home;
