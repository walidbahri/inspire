import React from "react";
import "./avis.css"
import {avisData} from "../avisData"
import deloitte from "../../images/deloitte.png"
import starselected from "../../images/starselected.png"
import userimg from "../../images/userimg.png"
const Avis = () => {
    return (
       <div className="avis">
            <div className="title-avis">
                      <h1>Derniers avis déposés</h1>
                <p>Derniers avis déposés par des utilisateurs inscrits sur la plateforme ou publiés en ligne suite à un audit RSE</p> 
                 </div>
              <div className="avis-cards">
            {avisData.map((e)=>{
                return  <div className="card-avis">
                <div className="card-title">
                 <img src={e.imgcompany} alt="" />
                 <div className="company-info">
                     <span>{e.companyTitle}</span>
                     <p>{e.companyAdress}</p>
                 </div>
              </div> 
              <div className="rating">
               <img src={starselected} alt="" />
               <img src={starselected} alt="" />
               <img src={starselected} alt="" />
              </div>
              <div className="card-note">
                 <span>{e.noteTitle}</span> 
                 <p>{e.description}</p>
  
              </div>
              <div className="userInfo">
                  <img src={e.imgUser} />
                  <span>{e.userName}</span>
              </div>
              </div> 
            })}
            </div>
       </div>
    )}

    export default Avis;