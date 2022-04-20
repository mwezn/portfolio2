import React from 'react'
import mypic from '../assets/mypic.jpg'
import './home.css'
const Home =()=>{
    return(
    <div id="aboutme">
        <div id="about">
        <div className="typingeff">
          <h1>Hello im Michael</h1>
        </div>
        <div className="mypic">
        <img className="mypic" alt="mypic" src={mypic}></img>
        </div>
        </div>
    <h2>Im a maths graduate with a deep interest in computer science , technology & how our world works. 
        Prior to working as a freelancer I worked several other jobs including roles as a teaching assistant, 
        bartender & construction work</h2>
    <div className='tech'>
    <div className='currenttech'>
        <h3>Technologies im familiar with:</h3>
    <ul>
        <li>HTML/CSS</li>
        <li>React</li>
        <li>Redux</li>
        <li>Jest</li>
        <li>MongoDB</li>
        <li>Postgres/ SQL</li>
        <li>Python</li>
        <li>Docker</li>
        <li>AWS</li>
    </ul>
    </div>
    <div className='futuretech'>
        <h3>Technologies & skills I want to learn more about:</h3>
    <ul>
        <li>Machine Learning</li>
        <li>Nanonetworks</li>
        <li>CyberSecurity/ Ethical Hacking</li>
    </ul>
    </div>
    </div>

</div>
    )
}

export default Home;
