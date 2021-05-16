import React from "react"
import { Controller, Scene } from 'react-scrollmagic'; //to scroll parallax
import { Controls, PlayState, Tween, Timeline } from 'react-gsap'; //to animations
import clsx from 'clsx';
import AOS from 'aos'; //to animation on scroll - core
import "aos/dist/aos.css" //to animation on scroll - css
import Fade from 'react-reveal/Fade';

import "./parallax.css"
import Navbar from "./Navbar"


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

import useWindowSize from "./UseWindowSize"

export default function Parallax() {
    const [width, height] = useWindowSize();


    React.useEffect(() => {
        AOS.init({
            //duration: 2000
        });
    }, []);

    return (
        <main className="App">
            <Navbar />
            <div className="banner">
                <img src="world.png" alt="" className="world" />
                <Controller>
                    <Scene triggerHook="onCenter" duration={10000}>
                        <Tween from={{ yPercent: 0, scale: 1, opacity: 1 }} to={{ yPercent: -350, scaleX: 1.1, scaleY: 0, opacity: -4, color: "white" }} >
                            <h1 className="main-title">Explore.</h1>
                        </Tween>
                    </Scene>

                    <Scene triggerHook="onCenter" duration={1000}>
                        <Tween from={{ xPercent: 0, yPercent: 0 }} to={{ xPercent: Math.floor(width / 125 - 1) * 100, yPercent: -(Math.floor(height / 125 - 1) * 100), rotation: 90 }} >
                            <img className="shuttel" src={spaceshuttel} alt="" />
                        </Tween>
                    </Scene>
                </Controller>
            </div>

            <div className="animation-1">
                <Controller>
                    <Scene triggerHook="onCenter" duration={200}>
                        <Tween from={{ xPercent: 100, yPercent: 0, opacity: 1 }} to={{ xPercent: 0, yPercent: 0, rotationY: 0, opacity: 1 }} >
                            <div>
                                <img src={heart2} alt="" />
                            </div>
                        </Tween>
                    </Scene>
                    <Scene triggerHook="onCenter" duration={200}>
                        <Tween from={{ xPercent: -100, yPercent: 0, opacity: 1 }} to={{ xPercent: 0, yPercent: 0, rotationY: 0, opacity: 1 }} >
                            <div>
                                <img src={heart1} alt="" />
                            </div>
                        </Tween>
                    </Scene>
                    <Scene triggerHook="onCenter" duration={200}>
                        <Tween from={{ xPercent: 100, yPercent: 0, opacity: 1 }} to={{ xPercent: 0, yPercent: 0, rotationY: 0, opacity: 1 }} >
                            <div>
                                <img src={heart3} alt="" />
                            </div>
                        </Tween>
                    </Scene>

                    <Scene triggerHook="onCenter" duration={200}>
                        <Tween from={{ xPercent: 100, yPercent: 0, opacity: 1 }} to={{ xPercent: 0, yPercent: 0, rotationY: 0, opacity: 1 }} >
                            <div>
                                <img src={geo} alt="" />
                            </div>
                        </Tween>
                    </Scene>
                    <Scene triggerHook="onCenter" duration={200}>
                        <Tween from={{ xPercent: -100, yPercent: 0, opacity: 1 }} to={{ xPercent: 0, yPercent: 0, rotationY: 0, opacity: 1 }} >
                            <div>
                                <img src={spaceshuttel} alt="" />
                            </div>
                        </Tween>
                    </Scene>
                    <Scene triggerHook="onCenter" duration={200}>
                        <Tween from={{ xPercent: 100, yPercent: 0, opacity: 1 }} to={{ xPercent: 0, yPercent: 0, rotationY: 0, opacity: 1 }} >
                            <div>
                                <img src={turksat6a} alt="" />
                            </div>
                        </Tween>
                    </Scene>

                    <Scene triggerHook="onCenter" duration={200}>
                        <Tween from={{ xPercent: 100, yPercent: 0, opacity: 1 }} to={{ xPercent: 0, yPercent: 0, rotationY: 0, opacity: 1 }} >
                            <div>
                                <img src={moon} alt="" />
                            </div>
                        </Tween>
                    </Scene>
                    <Scene triggerHook="onCenter" duration={200}>
                        <Tween from={{ xPercent: -100, yPercent: 0, opacity: 1 }} to={{ xPercent: 0, yPercent: 0, rotationY: 0, opacity: 1 }} >
                            <div>
                                <img src={thy} alt="" />
                            </div>
                        </Tween>
                    </Scene>
                    <Scene triggerHook="onCenter" duration={200}>
                        <Tween from={{ xPercent: 100, yPercent: 0, opacity: 1 }} to={{ xPercent: 0, yPercent: 0, rotationY: 0, opacity: 1 }} >
                            <div>
                                <img src={earth} alt="" />
                            </div>
                        </Tween>
                    </Scene>

                    <Scene triggerHook="onCenter" duration={200}>
                        <Tween from={{ xPercent: 100, yPercent: 0, opacity: 1 }} to={{ xPercent: 0, yPercent: 0, rotationY: 0, opacity: 1 }} >
                            <div>
                                <img src={monkey} alt="" />
                            </div>
                        </Tween>
                    </Scene>
                    <Scene triggerHook="onCenter" duration={200}>
                        <Tween from={{ xPercent: -100, yPercent: 0, opacity: 1 }} to={{ xPercent: 0, yPercent: 0, rotationY: 0, opacity: 1 }} >
                            <div>
                                <img src={gun} alt="" />
                            </div>
                        </Tween>
                    </Scene>
                    <Scene triggerHook="onCenter" duration={200}>
                        <Tween from={{ xPercent: 100, yPercent: 0, opacity: 1 }} to={{ xPercent: 0, yPercent: 0, rotationY: 0, opacity: 1 }} >
                            <div>
                                <img src={monkey} alt="" />
                            </div>
                        </Tween>
                    </Scene>
                </Controller>
            </div>


            <div className="rotating-div" >
                <img className="rotating-img" src={heart1} alt=""/>
            </div>
        </main >



    )


}