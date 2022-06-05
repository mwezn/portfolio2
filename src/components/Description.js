import React, { useState, useEffect } from 'react';
import './description.css';

const DescribePage =(props)=>{
    const [data,updateData]= useState([])
    console.log(data)
    const getData= async ()=>{
        let options={ headers : { 'Content-Type': 'application/json','Accept': 'application/json'}
        }
        await fetch('mypages.json',options)
          .then( res=> {
            console.log(res)
            return res.json()
        })
        .then(function(myJson) {
           console.log(myJson);
           updateData(myJson)
    

          });
    }
    useEffect(()=>{
        getData()
    
      },[])

    return (
        <div>
        <nav id="navbar">
         <div id="show">
         <ul className='navbar-links'>
          <li><a href="/">Home</a></li>
         </ul>
         </div>
        </nav>
         

        <div className="describePage">
            {
            data.length>0?
            <div className='description'>
                <h1>{data[props.site].name}</h1>
                {data[props.site].github?<a target='_blank' rel="noreferrer" href={data[props.site].github}>Click here to view the code</a>:null}
                {data[props.site].livelink?<a target='_blank' rel="noreferrer" href={data[props.site].livelink}>The app is deployed here</a>:null}
                <h3>{data[props.site].description}</h3>
                <div className='grid'>{data[props.site].pics.map(d=><img alt={d} src={d}></img>)}</div>
                
            </div>
            :<h1>Loading</h1>
            }
        </div>
        </div>
    )
}

export default DescribePage;
