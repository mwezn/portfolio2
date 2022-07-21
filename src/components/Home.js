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
    <h2>I'm a maths graduate whose fascinated by computer science, technology & how our world works. 
        I'm currently working in construction but in my spare time I enjoy coding.
    </h2>

</div>
    )
}

export default Home;
