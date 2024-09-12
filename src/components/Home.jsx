import React from "react";
import './portfolio.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';


const Home =()=>{
    return(
        <>
        <section id="home" className="home">
        <div className="home-content">
            <h3>Hi, Myself</h3>
            <h1>Poornima Tanwar</h1>
            <h3><span>Frontend Developer</span></h3>
            <p></p>
            <div className="social-media">
                <a href=""> <FontAwesomeIcon icon={faInstagram} /></a>
                <a href="">      <FontAwesomeIcon icon={faGithub} /></a>
                <a href=""><FontAwesomeIcon icon={faLinkedin} />
                </a>
                
            </div>
            <a href="#" className="btn">Download CV</a>
        </div>
        {/*<div className="home-img">
            <img src="./assets/images/profile.jpg" alt="profile"/>
        </div>*/}
    </section>

        </>
    );
};
export default Home;