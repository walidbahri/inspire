import React from "react";
import "./hero.css"
import play from "../../images/play.svg"
const Hero = () => {
  return (
    <div className="hero">
        <div className="content container">
    <h1>Chercher les entreprises <br/> les plus responsable</h1> 
    <p>
    Sautons le pas pour que chaque voix compte quand il s’agit de sauver ce <br/> que nous avons de plus précieux
    </p>
    <p><img src={play} /> LANCER LA VIDÉO</p>
    </div>
    </div>
  );
};

export default Hero;
