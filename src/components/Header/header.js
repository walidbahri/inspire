import React from "react";
import './header.css'
import logo from "../../images/logo.png";
import iconlanguage from "../../images/iconlanguage.svg"

const Header = () => {
    return (
        <header className="header">
            
                <div className="nav-menu col-md-6">
                    <img src={logo} alt="" />
                
                
                    <ul className="list-menu col-md-8">
                        <li><a href="#">Noter</a> </li>
                        <li><a href="#">Audit RSE</a></li>
                        <li><a href="#">Devnir pro</a></li>
                        <li><a href="#">Contact</a></li>

                    </ul>
               
                </div>

                <div>
                <div class="dropdown">
			<button class="dropbtn">
			<img src={iconlanguage} />	FR
			</button>
			
			<div class="dropdown-content">
				<a href="#">Français</a>
                <a href="#">English</a>
				
			</div>
		</div>
                    <button className="btn-connexion" >Connexion</button>
                    <button className="btn-inscription">Inscription</button>
                </div>
            
        </header>
    );
};

export default Header;
