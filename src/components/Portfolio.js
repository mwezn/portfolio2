import React from "react";
import './portfolio.css'
import { Carousel } from 'react-responsive-3d-carousel';
import 'react-responsive-3d-carousel/dist/styles.css';  

import img1 from '../assets/flexclip.gif'
import img2 from '../assets/medicalmaths.png'
import img5 from '../assets/sorting.png'
import c4 from '../assets/connect4.png'
import ttt from '../assets/tictactoe.png'
import sine from '../assets/sine.jpg'
import todo from '../assets/todo.png'
import ng from '../assets/network2.gif'
import cube from '../assets/cube.gif'


    function Slider(props) {
    return (
      <div className="App">
        <Carousel
          items={props.items}
          startIndex={0}
          onChange={(currentIndex) => console.log(currentIndex)}
          interval={5000}
        />
      </div>
    );
  }



const MainPage =()=>{
   

    const onClick =(d,e)=>{
        //window.location.href=d;
        window.open(d, '_blank');
    }
    //https://todoemailer.herokuapp.com/
    let mypages = [
        {name: "Equation Plotter", tech:"Javascript, D3.js",img:img1, href:'/D3/interactive.html'},
        {name:"Medical graph", tech:"HTML/JS, D3.js",img:img2,href:"https://mwezn.github.io/DueDateVisualizer/"},
        {name: "Sorting Algorithms", tech:"HTML,JS & D3", img:img5, href:"/D3/sorting.html"},
        {name: "Connect4", tech: "React", img:c4, href:"https://codepen.io/wezg/full/gOjRvMo"},
        {name: "Sine & Cos", tech: "HTML,JS", img:sine,href:'/D3/sinewave.html'},
        {name: 'TicTacToe', tech: 'React', img:ttt, href:'/tictactoe'},
        {name: '3D Windows Logo', tech: 'Three.js,JS,HTML', img:cube, href:'/3DJS/cube.html'},
        {name: 'Network Graph', tech: 'D3,JS,HTML', img:ng, href:'/D3/countries.html'}

    ]
    let result=mypages.map((d,i)=>{
        let classId=((i+1)%9)===0?9:((i+1)%9)
    
        return (
        <div target='_blank' href={d.href} onClick={(e)=>onClick(d.href,e)} className={'pcard'+classId}>
            <h1>{d.name}</h1><p>{d.tech}</p><img className="screenshot" alt={i} src={d.img}/>
        </div>)
    })
    
    return(
        <div className="projects2" >
            <h1 id="projects">Some past & current projects</h1>
            <Slider items={result}/>
        </div>
    )
}

export default MainPage;
