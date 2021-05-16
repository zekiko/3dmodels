import React from "react"
import { Controller, Scene } from 'react-scrollmagic'; //to scroll parallax
import { Controls, PlayState, Tween, Timeline } from 'react-gsap'; //to animations
import clsx from 'clsx';
import AOS from 'aos'; //to animation on scroll - core
import "aos/dist/aos.css" //to animation on scroll - css
import Fade from 'react-reveal/Fade';

import "./parallax.css"
import Mobil from "./Mobil"
import Web from "./Web"
import Navbar from "./Navbar"

import useWindowSize from "./UseWindowSize"

export default function Parallax() {
    const [isMobile, setIsMobile] = React.useState(false);

    const [width, height] = useWindowSize();

    React.useEffect(() => {
        if (width <= 700) {
            setIsMobile(true)
        } else {
            setIsMobile(false)
        }
    }, [width]);

    console.log("isMobile: ", isMobile)
    return (
        <>
             {isMobile ?
                <Mobil />
                :
                <Web />
            }
        </>

    )


}