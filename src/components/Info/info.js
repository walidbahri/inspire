import React from 'react'
import "./info.css"
import {data} from '../data'

export default function Info() {
  return (
    <div className="container info">
      <div className='content-info'>
    
   { data.map((e)=>{
     return   <div className="card-info col-md-5">
     <h2>{e.title}</h2>
     <p>{e.subtitle}</p>
     <p>
     {e.content}
     </p>
     <button className="inscription"> 
    {e.buttonTitle}
     </button>
 </div> 
   })
   }

    </div>

    </div>
  )
}

