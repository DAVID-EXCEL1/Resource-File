import React from 'react';
import NavBar from './NavBar';
import BannerBackground from '../assets/assets/Landing Page Assets/home-banner-background.png';
import BannerImage from '../assets/assets/Landing Page Assets/home-banner-image.png';
import { FiArrowRight} from "react-icons/fi"



const Home = () => {
    return (
        <div className='home-container'>
            <NavBar />
            <div className='home-banner-container'>
                <div className='home-bannerImage-container'>
                    <img src={BannerBackground} alt="" />
                </div>
                <div className='home-text-section'>
                    <h1 className='primary-heading'>
                        Your Favourite Food Delivered Hot & Fresh
                    </h1>
                    <p className='primary-text'>
                        Healthy switcher chefs do all the prop work, live peeding, chopping & marinating, so you can cook a fresh food.
                    </p>
                    <button className='secondary-button'>Order Now <FiArrowRight/></button>
                </div>
                <div className='home-image-section'>
                    <img src={BannerImage} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Home