import React, { useEffect } from 'react';
import Aos from 'aos';
import "aos/dist/aos.css";



const Header = () => {



    useEffect(() => { // effet d'apparition title header
        Aos.init({ duration: 1500 })

    }, [])

    return (
        <div className="header">
                <a href='/'><img className="logo" src="/images/logo.png" alt="logo" /></a>
                <div class="title-board">
                    <span class="letter letter-D"></span>
                    <span class="letter letter-E"></span>
                    <span class="letter letter-S"></span>
                    <span class="letter letter-T"></span>
                    <span class="letter letter-I"></span>
                    <span class="letter letter-N"></span>
                    <span class="letter letter-A"></span>
                    <span class="letter letter-T"></span>
                    <span class="letter letter-I"></span>
                    <span class="letter letter-O"></span>
                    <span class="letter letter-N"></span>
                    <span class="letter letter-blank"></span>
                    <span class="letter letter-R"></span>
                    <span class="letter letter-H"></span>
                    <span class="letter letter-R"></span>
                </div>
                <img className="logo-sncf" src="/images/logosncf.png" alt="logo-sncf" />
        </div >
    );
};

export default Header;