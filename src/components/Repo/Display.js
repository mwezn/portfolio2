import React from 'react';
import './display.css'

const RenderList = (props) =>{

    let values2=[]
    let data=props.data
    data.forEach(d => {
            values2.push(
            <li className='repo'>
              <h2>{d.name}</h2>
                <a target="_blank" without rel="noreferrer" href={d.html_url}>{d.html_url}</a>
                <p >Languages: {d.language}</p>
                <p>Last Push: {new Date(d.pushed_at).toLocaleDateString()} at {new Date(d.pushed_at).toLocaleTimeString()} </p>
                <p>Stargazers: {d.stargazers_count}</p>
                <p>Visibility: {d.visibility}</p>
                <p>Forks: {d.forks}</p>
                <p>Issues Count: {d.open_issues}</p>
                
    </li>)
        
}) 
  const click =(e)=>{
    let view=document.getElementById('results')
    view.classList.toggle('active')
  }

        
    ;
    let user=props.username
    
    return (
           <div>
             <p onClick={(e)=>click()}>X</p>
			     <div id="results" className='results'>
                
                <div><h1>There are {props.data.length} repos for {user}</h1><br></br>
                <ul className="repolist">{values2}</ul>
                </div>
            </div>
            </div>
	);
}

export default RenderList;
