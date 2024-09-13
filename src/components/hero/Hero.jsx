import React, { useEffect } from 'react'
import pdf from '../../pdf/AZAM.pdf'
import './Hero.css';
import "aos/dist/aos.css";

import { aa, bb, cc, dd, ee } from '../images';
import Aos from 'aos';
const Hero = () => {
    useEffect(() => {
        Aos.init()
        
      }, [])
    return (
        <>
            <section className='hero-contanier' id='home'>
                <div className='hero-content'>
                    <h2>Buildeing digiitl Experience that inspire</h2>
                    <p>Passionete frontend developer transforming into seemless and visule stuning we solution </p>
                    <a href={pdf} download="AZAM.pdf" className='a btn btn-outline-warning'>DOWNLOAD RESUME</a>

                </div>
                <div className='hero-image'>
                    <div>
                        <div
                            data-aos="flip-left"
                            data-aos-duration="1000"
                        >
                            <div className='tech-icon'>
                                <img src={bb} />
                            </div>
                        </div>
                        <div className='profile-image'>
                            <img src={aa}></img>
                        </div>
                    </div>
                    <div>
                        <div className='tech-icon'>
                            <img src={cc} />
                        </div>
                        <div className='tech-icon'>
                            <img src={dd} />
                        </div>
                        <div className='tech-icon'>
                            <img src={ee} />
                        </div>
                    </div>
                </div>
            </section >
        </>
    )
}

export default Hero
