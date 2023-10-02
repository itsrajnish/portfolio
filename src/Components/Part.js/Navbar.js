import "./Navbar.css";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import React, { useEffect, useState } from 'react'

const Navbar = () => {

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);


    const [scroll, setScroll] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
      
            setScroll(window.scrollY > 50);
        });
    }, []);

    return (
        <div className="header" id={scroll ? "sticy" : null}>

            <h1>RAJNISH SHARMA </h1> 
            

            <ul className={click ? ("nav-menu active") : ("nav-menu")} >
                <li>
                    <Link to="/home">HOME</Link>
                </li>
                <li>
                    <Link to="/skills">SKILLS</Link>
                </li>
              
                <li>
                    <Link to="/blog">PROJECT</Link>
                </li>
                <li>
                    <Link to="/about">ABOUT</Link>
                </li>
                <li>
                    <Link to="/contact">CONTACT</Link>
                </li>
            </ul>
         <div className="hamburger" onClick={handleClick}>

                {click ? (<FaTimes size={20} style={{ color: "#fff" }} />) : (<FaBars size={20} style={{ color: "#fff" }} />)}

            </div> 

        </div>
    )
}

export default Navbar;
