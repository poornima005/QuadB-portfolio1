import React from "react";
import './portfolio.css'
const Contact = () => {
    return (
        <>
            <section className="contact" id="contact">
                <h2 className="heading">Get in touch</h2>
                <form action="#">
                    <div className="input-box">
                        <input type="text" placeholder="Full Name" />
                        <input type="email" placeholder="Email Address" />
                    </div>
                    <div className="input-box">
                        <input type="tel" placeholder="Mobile Number" />
                        <input type="text" placeholder="Email Subject" />
                    </div>
                    <textarea name="" id="" cols="30" rows="10" placeholder="Your Message"></textarea>
                    <input type="submit" value="Send Message" className="btn" />
                </form>
            </section>

        </>
    );
};
export default Contact;