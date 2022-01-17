import React, { useState, useEffect } from 'react'
import img1 from '../images/net_logo.png';
import img2 from '../images/Netflix.png';
import '../design/Nav.css';


const Nav = () => {

    const [show, setshow] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                setshow(true);
            }
            else {
                setshow(false);
            }
        })

        return () => {
            window.removeEventListener('scroll');
        }
    }, [])

    return (
        <div className={`nav ${show && "nav_black"}`}>
            <img className="nav_logo" src={img1} alt="Netflix Logo" />
            <img className="nav_avatar" src={img2} alt="Netflix Logo" />
        </div>
    )
}

export default Nav
