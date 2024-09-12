import React from "react";
import './portfolio.css';
const Services =()=>{
    return(
        <>
        
    <section className="services" id="services">
        <h2 className="heading">My <span>Services</span></h2>

        <div className="services-container">
            <div className="services-box">
                <i className="fa-solid fa-code"></i>
                <h3>Web Development</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus similique quibusdam pariatur
                    blanditiis atque est tempora illum dicta earum voluptate quaerat ea iste, magni laborum repellendus
                    amet voluptatum id qui?</p>
                <a href="#" className="btn">Read More</a>
            </div>
            <div className="services-box">
                <i className="fa-solid fa-palette"></i>
                <h3>UI/UX Designing</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus similique quibusdam pariatur
                    blanditiis atque est tempora illum dicta earum voluptate quaerat ea iste, magni laborum repellendus
                    amet voluptatum id qui?</p>
                <a href="#" className="btn">Read More</a>
            </div>
            <div className="services-box">
                <i className="fa-brands fa-android"></i>
                <h3>App Development</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus similique quibusdam pariatur
                    blanditiis atque est tempora illum dicta earum voluptate quaerat ea iste, magni laborum repellendus
                    amet voluptatum id qui?</p>
                <a href="#" className="btn">Read More</a>
            </div>
        </div>
    </section>

        </>
    );
};
export default Services;