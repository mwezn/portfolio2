import React from "react";
import './portfolio.css'

import img1 from '../assets/todo.png'
import img2 from '../assets/medicalmaths.png'
import img3 from '../assets/maja.png'
import img5 from '../assets/sorting.png'
import img6 from '../assets/j&p.png'
import img7 from '../assets/crypto.png'
import c4 from '../assets/connect4.png'

const MainPage =()=>{
   

    const onClick =(d,e)=>{
        //window.location.href=d;
        window.open(d, '_blank');
    }

    let mypages = [
        {name: "Todo Emailer", tech:"React, Mongo, Express",img:img1, href:'https://todoemailer.herokuapp.com/'},
        {name:"Medical graph", tech:"HTML/JS, D3.js",img:img2,href:"https://mwezn.github.io/DueDateVisualizer/"},
        {name: "Maja Notes", tech:"CSS/JS, Ejs, Jest", img:img3, href:"http://13.40.184.90:3000/"},
        {name: "Sorting Algorithms", tech:"HTML,JS & D3", img:img5, href:"/SortingAlg/sorting.html"},
        {name: "Jones & Palmer", tech: "React", img:img6, href:"/jp"},
        {name: "Crypto prices", tech:"React D3",img:img7, href:"/cryptod3"},
        {name: "Connect4", tech: "React", img:c4, href:"https://codepen.io/wezg/full/gOjRvMo"}
    ]
    let result=mypages.map((d,i)=>{
        //let classId=((i+1)%8)===0?8:((i+1)%8)
    
        return (
        <div target='_blank' href={d.href} onClick={(e)=>onClick(d.href,e)} className={'pcard'+4}>
            <h1>{d.name}</h1><p>{d.tech}</p><img className="screenshot" alt={i} src={d.img}/>
        </div>)
    })
    /*let result2=myprojects.map((d,i)=>{
        //let classId=((i+1)%8)===0?8:((i+1)%8)
    
        return (
        <div target='_blank' onClick={(e)=>onClick(d.href,e)} className='roundedCard'>
            <h1>{d.name}</h1><p>{d.tech}</p><img className="screenshot" alt={i} src={d.img}/>
        </div>)
    })*/
    
    return(
        <div className="main">
            <h1 id="projects">Some past & current projects</h1>
            <div className="projects">
                {result}
            </div>
        </div>
    )
}

export default MainPage;
