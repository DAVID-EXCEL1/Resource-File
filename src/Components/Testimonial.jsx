import React from 'react'
import ProfilePic from "../assets/assets/Landing Page Assets/john-doe-image.png";
import { AiFillStar } from "react-icons/ai";

const Testimonial = () => {
    return (
        <div className='work-section-wrapper'>
            <div className="work-section-top">
                <p className="primary-subheading">Testimonial</p>
                <h1 className='primary-heading'>
                    What our clients are saying
                </h1>
                <p className='primary-text'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed labore quae aliquam temporibus nesciunt quaerat doloribus quod omnis.
                </p>
            </div>
            <div className='testimonial-section-bottom'>
                <img src={ProfilePic} alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit est molestias delectus a! Dolore voluptatum distinctio architecto sit.</p>
                <div className="testimonials-stars-container">
                    <AiFillStar/>
                    <AiFillStar/>
                    <AiFillStar/>
                    <AiFillStar/>
                    <AiFillStar/>
                </div>
                <h2>John Doe</h2>
            </div>
        </div>
    )
}

export default Testimonial