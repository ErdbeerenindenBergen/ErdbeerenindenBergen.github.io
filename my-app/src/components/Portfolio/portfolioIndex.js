import AnimatedLetters from '../AnimatedLetters/animatedLettersIndex'
import './portfolioIndex.scss'
import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faScrewdriverWrench } from '@fortawesome/free-solid-svg-icons'
import ImageSlider from '../ImageSlider/imageSliderIndex'

const Portfolio = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        let timeout;

        timeout = setTimeout(() => {
            setLetterClass("text-animate-hover");
        }, 3000);

        return () => {
            clearTimeout(timeout);
        };
    }, []);

    const slides = [
        {
          url: "http://localhost:3000/taste-buds-1.jpg", 
          title: "log-in", 
          text:"​Designed to find the perfect place to dine. Restaurant matching and voting application using MVC pattern and RESTful APIs. Registered Taste Buds users can search for restaurants in a desired area and create scheduled events. Friends are invited via unique links to view restaurant information and submit votes. The program will record votes and calculate the winning restaurants. Utilizes Java, SpringBoot, JSON, Vue.js, Yelp Fusion API, and PostgreSQL.​ Above is the log-in page.",
          subtitle: "placeholder"
        },
        {
          url: "http://localhost:3000/taste-buds-2.png",
          title: "create-account",
          text: "If you do not have an account, you can make one here.",
          subtitle: "placeholder"
        },
        {
          url: "http://localhost:3000/taste-buds-3.png",
          title: "search-or-plan",
          text: "After logging in, you can select whether to search for restaurants (and perhaps save some new favorites!) or to plan an event.",
          subtitle: "placeholder"
        },
        {
          url: "http://localhost:3000/taste-buds-4.png",
          title: "search",
          text: "If you choose to search for restaurants, you may enter a city or a zipcode (the state is optional). Anytime restaurants are displayed in a list like below, individualized links will be included below the image that connect to the restaurant's yelp page and to it's google location via google maps, which is navigable. Additional information will be displayed on the right side of the image, including ratings, opening hours, etc. and a link to dial the number if you are viewing the page with a cellphone.",
          subtitle: "placeholder"
        },
        {
          url: "http://localhost:3000/taste-buds-5.png",
          title: "search",
          text: "If you choose to plan an event, you will be taken to the plan and event form page. Here you may toggle between three forms as you please. Your information is saved as you plan. You may not submit the form, however, until all required inputs are complete. Once all information is entered and you click submit, invitations will be emailed to your invitees. Step 1. Plan the date and time of your event and give a deadline for when your \"buds\" must respond to an invite.",
          subtitle: "placeholder"
        },        
      ];

    return (
        <>
            <div className='container news-page'>
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['P', 'o', 'r', 't', 'f', 'o', 'l', 'i', 'o']}
                            idx={15}
                        />
                    </h1>
                    <FontAwesomeIcon icon={faScrewdriverWrench} className="constructionIcon" />
                    <h5>This page is currently under construction.</h5>
                    <br></br>
                    <h5>Project 1: taste buds</h5>
                    <div>
                        <div className='containerStyles'>
                            <ImageSlider slides={slides} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Portfolio