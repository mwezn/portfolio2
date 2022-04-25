import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import './description.css'

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
        <div className="describePage">
            {
            data.length>0?
            <div className='description'>
                <h1>{data[props.site].name}</h1>
                <p>{data[props.site].description}</p>
                <Carousel>{data[props.site].pics.map(d=><img alt={d} src={d}></img>)}</Carousel>
                <a target='_blank' rel="noreferrer" href={data[props.site].livelink}>The app is running here</a>
            </div>
            :<h1>Loading</h1>
            }
        </div>
    )
}

export default DescribePage;
