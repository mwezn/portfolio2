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
                <h1>{data[0].name}</h1>
                <p>{data[0].description}</p>
            </div>
            :<h1>Loading</h1>
            }
        </div>
    )
}

export default DescribePage;
