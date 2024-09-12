import React from "react";
import './portfolio.css';
import profile from './images/profile1.jpeg'
const About=()=>{
    return(
        <>
         <section className="about" id="about">
        <div className="about-img">
            <img src={profile}/>
        </div>
        <div className="about-content">
            <h2 className="heading-about">ABOUT <span>ME</span></h2>
            <h3>Frontend Developer</h3>
            
            <p>Hi, I am <span>Poornima Tanwar</span>, a Web Development enthusiast, pursuing a Master's degree in Information Technology at International Institute of Professional Studies
                DAVV, Indore. I am passionate and have problem-solving skills. Currently I am learning JAVA language and 
                code daily to improve my coding skills. Beyond coding, I am an Core Team member of <span>AWS Cloud Club IIPS</span>,where we have organized numerious events like AWS LaunchPad, Hands-on experirnce on AWS, also I have developed website for the club which is used by students of our college. Excited to 
                explore new technologies and broaden my knowledge.
            </p>
            <a href="#" className="btn">Read More</a>
        </div>
    </section>

        </>
    );
};

export default About;