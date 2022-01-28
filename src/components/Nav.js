import React, { useState, useEffect } from 'react'
import img1 from '../images/net_logo.png';
import img2 from '../images/Netflix.png';
import '../design/Nav.css';


const Nav = () => {
    // usestate to black in navbar or not 
    const [show, setshow] = useState(false);

    useEffect(() => {
        // as soon as the scroll length increases 100, navbar moved to be transparent
        // addEventListener (javascript function to call a particular thing and callback function)
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
