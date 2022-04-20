import React from "react";
import './portfolio.css'

import img1 from '../assets/todo.png'
import img2 from '../assets/medicalmaths.png'
import img3 from '../assets/maja.png'
import img4 from '../assets/client-posts.png'
import img5 from '../assets/repo.png'




const MainPage =()=>{
   

    const onClick =(d,e)=>{
        window.location.href=d
    }
    let myprojects=[
        {name: "Todo Emailer", tech:"React, Mongo, Express",img:img1, href:'http://ec2-18-191-242-179.us-east-2.compute.amazonaws.com/'},
        {name:"Medical graph", tech:"HTML/JS, D3.js",img:img2},
        {name: "Maja Notes", tech:"CSS/JS, Ejs, Jest", img:img3, href:'http://ec2-18-191-242-179.us-east-2.compute.amazonaws.com:5000'},
        {name: "Telegram notes", tech:"Docker, Mongo, HTML", img:img4},
        {name: "Github repo tracker", tech:"React", img:img5,href:"repos"},
        {name: "Crypto price graph", tech: "React"},
        {name: "Tictactoe", tech:'React'}
    ]
    let result=myprojects.map((d,i)=>{
        let classId=((i+1)%8)===0?8:((i+1)%8)
    
        return (
        <div target='_blank' onClick={(e)=>onClick(d.href,e)} className={'card'+classId}>
            <h1>{d.name}</h1><p>{d.tech}</p><img className="screenshot" alt={i} src={d.img}/>
        </div>)
    })
    
    return(
        <div className="intro">
            <h1 id="projects">Things ive built</h1>
            <div className="projects">
                {result}
            </div>
        </div>
    )
}

export default MainPage;
