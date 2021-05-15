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
import heart3 from './images/png/heart3.png'
import turksat6a from './images/png/turksat6a.png'
import geo from './images/png/geo.png'
import spaceshuttel from './images/png/spaceshuttel.png'
import moon from './images/png/moon.png'
import earth from './images/png/earth.png'
import monkey from './images/png/monkey.png'
import thy from './images/png/thy.png'
import gun from './images/png/gun.png'

export default function Parallax() {

    React.useEffect(() => {
        AOS.init({
            //duration: 2000
        });
    }, []);

    return (
        <main className="App">
             <div className="banner">
                <img src="world.png" alt="" className="world" />
                <Controller>
                    <Scene triggerHook="onCenter" duration={30000}>
                        <Tween from={{ yPercent: 10, scale: 1, opacity: 1 }} to={{ yPercent: -3000, scaleX: 5, scaleY: 20, opacity: -40, color: "red" }} /* ease="back.out(1.7)" */>
                            <h2 className="main-title">Explore.</h2>
                        </Tween>
                    </Scene>

                    <Scene triggerHook="onCenter" duration={1000}>
                        <Tween from={{ xPercent: 0, yPercent: 0 }} to={{ xPercent: 0, yPercent: 0, rotation: 90 }} /* ease="back.out(1.7)" */>
                            <img src={spaceshuttel} alt="" style={{ width: 125, height: 125, background: "transparent" }} />
                        </Tween>
                    </Scene>
                </Controller>
            </div>

            <div className="hearts-div">
                <img src={heart2} alt="" />
                <img src={heart1} alt="" />
                <img src={heart3} alt="" />
                <img src={geo} alt="" />
                <img src={spaceshuttel} alt="" />
                <img src={turksat6a} alt="" />
                <img src={moon} alt="" />
                <img src={thy} alt="" />
                <img src={earth} alt="" />
                <img src={monkey} alt="" />
                <img src={gun} alt="" />
            </div>

            <div style={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>
                <Controller>
                    <Scene triggerHook="onCenter" duration={500} classToggle="anime-ontoggle" indicators={true}>
                        {
                            (progress, event) => {
                                //console.log(event)
                                return (
                                    <img className="anime" src={heart1} alt="" />

                                )
                            }}
                    </Scene>
                </Controller>
            </div>
        </main >



    )


}