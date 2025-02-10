import React from "react";
import './portfolio.css'
import { Carousel } from 'react-responsive-3d-carousel';
import 'react-responsive-3d-carousel/dist/styles.css';  

import img1 from '../assets/flexclip.gif'
import img2 from '../assets/medicalmaths.png'
import img3 from '../assets/maja.png'
import img5 from '../assets/sorting.png'
import img6 from '../assets/j&p.png'
import img7 from '../assets/crypto.png'
import c4 from '../assets/connect4.png'
import ttt from '../assets/tictactoe.png'
import sine from '../assets/sine.jpg'
import todo from '../assets/todo.png'


    function Slider(props) {
    return (
      <div className="App">
        <Carousel
          items={props.items}
          startIndex={0}
          onChange={(currentIndex) => console.log(currentIndex)}
          interval={3000}
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
        {name: "Equation Plotter", tech:"Javascript, D3.js",img:img1, href:''},
        {name:"Medical graph", tech:"HTML/JS, D3.js",img:img2,href:"https://mwezn.github.io/DueDateVisualizer/"},
        {name: "Sorting Algorithms", tech:"HTML,JS & D3", img:img5, href:"/SortingAlg/sorting.html"},
        {name: "Connect4", tech: "React", img:c4, href:"https://codepen.io/wezg/full/gOjRvMo"},
        {name: "Sine & Cos", tech: "HTML,JS", img:sine,href:''},
        {name: "Todo Emailer", tech: "React, Node", img:todo,href:'https://todoemailer.herokuapp.com/'}

    ]
    let result=mypages.map((d,i)=>{
        let classId=((i+1)%8)===0?8:((i+1)%8)
    
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
