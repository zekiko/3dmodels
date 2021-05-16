import React from "react"
import { Controller, Scene } from 'react-scrollmagic'; //to scroll parallax
import { Controls, PlayState, Tween, Timeline } from 'react-gsap'; //to animations
import clsx from 'clsx';
import AOS from 'aos'; //to animation on scroll - core
import "aos/dist/aos.css" //to animation on scroll - css
import Fade from 'react-reveal/Fade';

import "./parallax.css"
import heart1 from './images/png/heart1.png'
import heart2 from './images/png/heart2.png'
 
const Navbar = () => {
    const [visible, setVisible] = React.useState(false)
    const prevScrollpos = React.useRef(100);

    React.useEffect(() => {
        //console.log("effect", window.pageYOffset, prevScrollpos.current, visible)
        window.addEventListener("scroll", handleScroll);

        return () => {
            //console.log("effect return")
            window.removeEventListener("scroll", handleScroll);
        }

    }, [visible])

    const handleScroll = () => {
        const currentScrollPos = window.pageYOffset
        //console.log(prevScrollpos.current >= currentScrollPos, prevScrollpos, currentScrollPos, window.pageYOffset, window.scrollY)
        setVisible(!(prevScrollpos.current >= currentScrollPos));//visible -> not transparent

    }

    return (
        <div
            className={clsx("nav-bar", {
                "nav-bar--hidden": !visible
            })}
         >
            <img src={visible ? heart1 : heart2} alt=""/>
             <ul>
                <li>Technology</li>
                <li>Design</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </div>
    );
}

export default Navbar;