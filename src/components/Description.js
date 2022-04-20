import React, { useState, useEffect } from 'react';

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
            {
            data.length>0?
            <div>
                <h1>{data[props.site].name}</h1>
                <p>{data[props.site].description}</p>
                <img alt="img"src={data[props.site].pics}></img>
                <a target='_blank' rel="noreferrer"href="http://ec2-18-191-242-179.us-east-2.compute.amazonaws.com/">The app is running here</a>
            </div>
            :<h1>Loading</h1>
            }
        </div>
    )
}

export default DescribePage;
