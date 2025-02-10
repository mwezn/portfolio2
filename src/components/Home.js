import React from 'react'
import './home.css'
import { useEffect } from 'react'
const Home =()=>{

    var txt='';
    var txt2='';
    var i = 0;
    var j=0;
    var speed =100;
   

    function typeWriter() {
        txt = ` Hello World I'm Michael.` 
         if (i < txt.length) {
           document.getElementById("demo").innerHTML += txt.charAt(i);
           i++;
           setTimeout(typeWriter, speed);
         }
    }

    function typer2() {
      txt2 = `A maths graduate whose fascinated by computer science, technology & how our world works
          currently working in construction but in my spare time I enjoy coding..` 
       if (j < txt2.length) {
         document.getElementById("demo2").innerHTML += txt2.charAt(j);
         j++;
         setTimeout(typer2, 50);
       }
  }

    useEffect(()=>{
     typeWriter() 
     setTimeout(typer2,1200);
    },)

  

    
    return(
    <div>
        <div id="about">
           <div className="typingeff">
           <h1 id="demo">~$:</h1>
        </div>

        <div className='typingeff'>
          <h2 className='heading' id='demo2'></h2>
        </div>
        </div>
    </div>

    )
}

export default Home;
