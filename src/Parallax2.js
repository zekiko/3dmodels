import React from "react"
import { Controller, Scene } from 'react-scrollmagic'; //to scroll parallax
import { Controls, PlayState, Tween, Timeline } from 'react-gsap'; //to animations
import clsx from 'clsx';
import AOS from 'aos'; //to animation on scroll - core
import "aos/dist/aos.css" //to animation on scroll - css
import Fade from 'react-reveal/Fade';

import "./parallax2.css"

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

const Navbar = () => {
    const [visible, setVisible] = React.useState(false)
    const prevScrollpos = React.useRef(100);

    React.useEffect(() => {
        console.log("effect", window.pageYOffset, prevScrollpos.current, visible)
        window.addEventListener("scroll", handleScroll);

        return () => {
            console.log("effect return")
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
            onScroll={handleScroll}
        >
            <ul>
                <li>Technology</li>
                <li>Design</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </div>
    );
}


export default function Parallax() {

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
                    <Scene triggerHook="onCenter" duration={30000}>
                        <Tween from={{ yPercent: 10, scale: 1, opacity: 1 }} to={{ yPercent: -3000, scaleX: 5, scaleY: 20, opacity: -40, color: "red" }} /* ease="back.out(1.7)" */>
                            <h2 className="main-title">Explore.</h2>
                        </Tween>
                    </Scene>
                    <Scene triggerHook="onCenter" duration={1000}>
                        <Tween from={{ xPercent: -550, yPercent: 200 }} to={{ xPercent: 400, yPercent: -250, rotation: 90 }} /* ease="back.out(1.7)" */>
                            <img src={spaceshuttel} alt="" style={{ width: 125, height: 125, background: "transparent" }} />
                        </Tween>
                    </Scene>
                </Controller>
            </div>
            
            <div>
                <Controller>
                    <div className="hearts-div">
                        <Scene triggerHook="onCenter" duration={500}>
                            <Tween from={{ xPercent: -200, yPercent: 200, opacity: 0 }} to={{ xPercent: 0, yPercent: 0, rotation: 0, opacity: 1 }} >
                                <img src={heart2} alt="" />
                            </Tween>
                        </Scene>
                        <Scene triggerHook="onCenter" duration={300}>
                            <Tween from={{ xPercent: 0, yPercent: 0, opacity: 1, rotationY: 90 }} to={{ xPercent: 0, yPercent: 0, rotationY: 0, opacity: 1 }} ease="back.out(1.7)">
                                <img src={heart1} alt="" />
                            </Tween>
                        </Scene>
                        <Scene triggerHook="onCenter" duration={500}>
                            <Tween from={{ xPercent: 200, yPercent: 200 }} to={{ xPercent: 0, yPercent: 0, rotation: 0 }}  >
                                <img src={heart3} alt="" />
                            </Tween>
                        </Scene>
                    </div>

                    <div className="hearts-div">
                        <Scene triggerHook="onCenter" duration={500}>
                            <Tween from={{ xPercent: 0, yPercent: 200, rotation: 180 }} to={{ xPercent: 0, yPercent: 0, rotation: 0 }} /* ease="back.out(1.7)" */>
                                <img src={geo} alt="" />
                            </Tween>
                        </Scene>
                        <Scene triggerHook="onCenter" duration={250}>
                            <Tween from={{ xPercent: 0, yPercent: 200 }} to={{ xPercent: 0, yPercent: 0, rotation: 0 }}>
                                <img src={spaceshuttel} alt="" />
                            </Tween>
                        </Scene>
                        <Scene triggerHook="onCenter" duration={500}>
                            <Tween from={{ xPercent: 0, yPercent: 200 }} to={{ xPercent: 0, yPercent: 0, rotation: 180 }} /* ease="back.out(1.7)" */>
                                <img src={turksat6a} alt="" />
                            </Tween>
                        </Scene>
                    </div>

                    <div className="hearts-div">
                        <Scene triggerHook="onCenter" duration={500}>
                            <Tween from={{ xPercent: 0, yPercent: 200 }} to={{ xPercent: 0, yPercent: 0, rotation: 0 }} /* ease="back.out(1.7)" */>
                                <img src={moon} alt="" />
                            </Tween>
                        </Scene>
                        <Scene triggerHook="onCenter" duration={250}>
                            <Tween from={{ xPercent: 0, yPercent: 200, rotationY: 0 }} to={{ xPercent: 0, yPercent: 0, rotationY: 360 }}>
                                <img src={thy} alt="" />
                            </Tween>
                        </Scene>
                        <Scene triggerHook="onCenter" duration={500}>
                            <Tween from={{ xPercent: 0, yPercent: 200 }} to={{ xPercent: 0, yPercent: 0, rotation: 0 }} /* ease="back.out(1.7)" */>
                                <img src={earth} alt="" />
                            </Tween>
                        </Scene>
                    </div>

                    <div className="hearts-div">
                        <Scene triggerHook="onCenter" duration={500}>
                            <Tween from={{ xPercent: 0, yPercent: 200 }} to={{ xPercent: 0, yPercent: 0, rotation: 0 }} >
                                <img src={monkey} alt="" />
                            </Tween>
                        </Scene>
                        <Scene triggerHook="onCenter" duration={250}>
                            <Tween from={{ xPercent: 0, yPercent: 200 }} to={{ xPercent: 0, yPercent: 0, rotationZ: 360 }}>
                                <img src={gun} alt="" />
                            </Tween>
                        </Scene>
                        <Scene triggerHook="onCenter" duration={500}>
                            <Tween from={{ xPercent: 0, yPercent: 200 }} to={{ xPercent: 0, yPercent: 0, rotationX: 0 }} >
                                <img src={monkey} alt="" />
                            </Tween>
                        </Scene>
                    </div>
                </Controller>
            </div>

            <div style={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>
                <Controller>
                    <Scene triggerHook="onCenter" duration={500} classToggle="anime-ontoggle" indicators={true}>
                        {
                            (progress, event) => {
                                console.log(event)
                                return (
                                    <img className="anime" src={heart1} alt="" />

                                )
                            }}
                    </Scene>
                </Controller>
            </div>

            {/* <div style={{ display: "flex", justifyContent: "center", background: "" }} data-aos="fade-left">
                <img src={heart1} alt="" data-aos={"flip-left"} data-aos-duration="500" style={{ width: "", height: "" }} />
            </div> */}

        </main >

    )
}