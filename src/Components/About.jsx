import React from 'react'
import AboutBackground from "../assets/assets/Landing Page Assets/about-background.png"
import AboutBackgroundImage from "../assets/assets/Landing Page Assets/about-background-image.png"
import { BsFillPlayCircleFill } from 'react-icons/bs'
const About = () => {
    return (
        <div className='about-section-container'>
            <div className='about-background-image-container'>
                <img src={AboutBackground} alt="" />
            </div>
            <div className='about-section-image-container'>
                <img src={AboutBackgroundImage} alt="" />
            </div>
            <div className='about-section-text-container'>
                <p className='primary-subheading'>
                    About
                </p>
                <h1 className='primary-heading'>
                    Food Is An Important Part Of A Balanced Diet
                </h1>
                <p className='primary-text'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse voluptas, dolores corporis officia quam sunt aliquid quasi incidunt minus quis!
                </p>
                <p className='primary-text'>
                    Autem magnam accusantium ullam placeat. Earum quisquam nam iste! A qui facere quas? Nihil, dolore?
                </p>
                <div className='about-buttons-container'>
                    <button className='secondary-button'>Learn More</button>
                    <button className='watch-video-button'><BsFillPlayCircleFill/> Watch Video</button>
                </div>
            </div>
        </div>
    )
}

export default About