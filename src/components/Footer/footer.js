import React from "react";
import "./footer.css"
import logofooter from "../../images/logofooter.png";
import linkedin from "../../images/linkedin.png"
import facebook from "../../images/facebook.png"
import twiter from "../../images/twiter.png"
import youtube from "../../images/youtube.png"

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
<div className="row">
                <div className="footer-contact col-md-4">
                    <img src={logofooter} alt="" width="100%" />
                   
                    <section className="mb-4 text-center">
                    
                        <a className="media-link"
                            href="#!"
                           
                        > <img className="media-pic" src={linkedin} alt="linkedin" /></a>
                        <a className="media-link"
                            href="#!"
                            
                        ><img className="media-pic" src={twiter} alt="twiter" /></a>
                        <a className="media-link"
                            href="#!"
                           
                        ><img className="media-pic" src={facebook} alt="facebook" /></a>
                        <a className="media-link"
                            href="#!"
                           
                        > <img className="media-pic" src={youtube} alt="youtube" /></a>
                       
                    </section>
                </div>
                <div className="footer-link row col-md-8 ">
                    <div class="col-md-4 footer-link-info mt-3">
                        <h6 class="mb-4 font-weight-bold">
                            Rate a company
                        </h6>
                        <p>
                            A propos de Rate A Company
                        </p>
                        <p>
                            Articles sur la RSE
                        </p>
                        <p>
                            Vidéos sur la RSE
                        </p>
                        <p>
                            Tarifs
                        </p>
                        <p>
                            Contact
                        </p>
                    </div>

                    <div class="col-md-4 footer-link-info mt-3">
                        <h6 class=" mb-4 font-weight-bold">
                            Services PRO
                        </h6>
                        <p>
                            AUDIT RSE
                        </p>
                        <p>
                            Devenir PRO
                        </p>

                    </div>
                    <div class="col-md-4 footer-link-info mt-3">
                        <h6 class=" mb-4 font-weight-bold">
                            Legal
                        </h6>
                        <p>
                            Mentions légales
                        </p>
                        <p>
                            Conditions d’utilisation
                        </p>
                        <p>
                            Plan de site
                        </p>

                    </div>
                </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
