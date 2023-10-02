import "./Heroimg.css";
import IntroImg from "../assets/img.jpg";
import React from 'react';
import { Link } from "react-router-dom";

const Heroimg = () => {


    return (
        <div className="hero">
            <div className="mask">
                <img className="intro-img" src={IntroImg} alt="IntroImg" />
            </div>

            <div className="content">
                
                <p>HI, I'M RAJNISH SHARMA</p>
                <h1>Software Developer</h1>
                <p>This is my official portfolio website to showcase my all work related to web devlopment and UI design</p>
                <div className="button">
                    <Link to="/project" className="btn">Download CV</Link>
                    {/* <Link to="/contact" className="btn-light">Contact</Link> */}
                </div>
            </div>

            <div className="part">
                <div className="card text-center">
                    
                    <div className="card-body">
                        <h5>WHEN WE STAND TOGETHER, WE CAN RAISE FOREVER</h5>
                        <h6>It’s about communicating your core values and culture and, to a certain extent, inspiring people with your vision and ambition.</h6>
                        <Link to="/Home" className="btn">GO Digital</Link>
                    </div>
                  
                </div>
            </div>


            <div className="container">


                <div className="box1">
                    <p> Address: </p>

                    <div className="address">

                        <h1>  1/111 <br>
                        </br>Lajpat Nagar
                            Rajori Garden ,<br></br> South Delhi<br></br></h1>
                        <p>Contact - 98XXXXXX</p>
                    </div>

                </div>
                <div className="box2">

                    <p> Join Us: </p>

                    <div className="join">
                        <input type="text" name="username" placeholder="Enter your name" /><br></br>
                        <input type="text" name="email" placeholder="Enter your email" /><br></br>
                        <input type="text" name="contact" placeholder="Enter your contact" /><br></br>
                        <button >Submit</button>
                    </div>
                </div>
            </div>

        </div>











    )
}
export default Heroimg;





















