import React from 'react'
import PickMeals from "../assets/assets/Landing Page Assets/pick-meals-image.png";
import ChooseMeals from "../assets/assets/Landing Page Assets/choose-image.png";
import DeliveryMeals from "../assets/assets/Landing Page Assets/delivery-image.png";

const Work = () => {
    const workInfoData = [{
        image: PickMeals,
        title: "Pick Meals",
        text: "lorem ipsum dolor and the foish of the drink gritlo gonmiloft brink of it alone.",
    },
    {
        image: ChooseMeals,
        title: "Choose How Often",
        text: "lorem ipsum dolor and the foish of the drink gritlo",
    }, {
        image: DeliveryMeals,
        title: "Fast Deliveries",
        text: "lorem ipsum dolor and the foish of the drink gritlo.",
    }];
    return (
        <div className='work-section-wrapper'>
            <div className="work-section-top">
                <p className='primary-subheading'>Work</p>
                <p className='primary-heading'>How It Works</p>
                <p className="primary-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut adipisci eaque fuga optio molestiae veniam?</p>
            </div>
            <div className='work-section-bottom'>
                {workInfoData.map((data) => (
                    <div className="work-section-info">
                        <div className="info-boxes-img-container">
                            <img src={data.image} alt="" />
                        </div>
                        <h2>{data.title}</h2>
                        <p>{data.text}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Work