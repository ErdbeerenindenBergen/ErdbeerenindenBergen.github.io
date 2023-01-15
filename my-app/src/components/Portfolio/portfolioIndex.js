import AnimatedLetters from '../AnimatedLetters/animatedLettersIndex'
import './portfolioIndex.scss'
import { useEffect, useState, React } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faScrewdriverWrench } from '@fortawesome/free-solid-svg-icons'
import ImageSlider from '../ImageSlider/imageSliderIndex'
import tasteBuds1 from '../../assets/images/tasteBuds1.jpg'
import tasteBuds2 from '../../assets/images/tasteBuds2.jpg'
import tasteBuds3 from '../../assets/images/tasteBuds3.png'
import tasteBuds4 from '../../assets/images/tasteBuds4.png'
import tbLogo from '../../assets/images/tbLogo.png'

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
          url: tasteBuds1,
          title: "log-in", 
          text:"Designed to find the perfect place to dine. Restaurant matching and voting application using MVC pattern and RESTful APIs. Registered Taste Buds users can search for restaurants in a desired area and create scheduled events. Friends are invited via unique links to view restaurant information and submit votes. The program will record votes and calculate the winning restaurants. Utilizes Java, SpringBoot, JSON, Vue.js, Yelp Fusion API, and PostgreSQL. Above is the log-in page.",
          subtitle: "placeholder"
        },
        {
          url: tasteBuds2,
          title: "create-account",
          text: "If you do not have an account, you can make one here. Duplicate usernames will trigger an error message as will a password that does not meet our minimum requirements for complexity.",
          subtitle: "placeholder"
        },
        {
          url: tasteBuds3,
          title: "search-or-plan",
          text: "After logging in, you can select whether to search for restaurants (and perhaps save some new favorites!) or to plan an event.",
          subtitle: "placeholder"
        },
        {
          url: tasteBuds4,
          title: "search",
          text: "If you choose to search for restaurants, you may enter a city or a zipcode (the state is optional). Anytime restaurants are displayed in a list like below, individualized links will be included below the image that connect to the restaurant's yelp page and to it's google location via google maps, which is navigable. Additional information will be displayed on the right side of the image, including ratings, opening hours, etc. and a link to dial the number if you are viewing the page with a cellphone.",
          subtitle: "placeholder"
        },
        // {
        //   url: "http://erdbeerenindenbergen.github.io/taste-buds-5.png",
        //   title: "search",
        //   text: "If you choose to plan an event, you will be taken to the plan and event form page. Here you may toggle between three forms as you please. Your information is saved as you plan. You may not submit the form, however, until all required inputs are complete. Once all information is entered and you click submit, invitations will be emailed to your invitees. Step 1. Plan the date and time of your event and give a deadline for when your \"buds\" must respond to an invite.",
        //   subtitle: "placeholder"
        // },        
      ];

    return (
        <>
            <div className='container about-page'>
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['P', 'o', 'r', 't', 'f', 'o', 'l', 'i', 'o']}
                            idx={15}
                        />
                    </h1>

                    <FontAwesomeIcon icon={faScrewdriverWrench} className="construction-icon" />

                    <h5>This page is currently under construction.</h5>

                    <br></br>

                    <div className="project-title">
                        <img src={tbLogo} class="tb-logo"></img>
                        <h6>taste buds</h6>
                    </div>

                    <div>
                        <div className='container-styles'>
                            <ImageSlider slides={slides} />
                        </div>
                    </div>
                    
                </div>
            </div>
        </>
    )
}

export default Portfolio