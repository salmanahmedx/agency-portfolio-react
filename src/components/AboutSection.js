import React from 'react';
import home1 from "../img/home1.png"
import styled from 'styled-components';
import { About, Description, Image, Hide } from "../pages/styles"

const AboutSection = () => {
    return (

        <About>
            <Description>
                <Hide>
                    <h2>We work to make</h2>
                </Hide>
                <Hide>
                    <h2>your <span>dreams</span></h2>
                </Hide>
                <Hide>
                    <h2>come true</h2>
                </Hide>
                <p>Contact us for any photography or videography ideas that you have. We have professionals with amazing skills.</p>
                <button>Contact Us</button>
            </Description>
            <Image>
                <img src={home1} alt="Camera Operator" />
            </Image>
        </ About >
    );
};


export default AboutSection;