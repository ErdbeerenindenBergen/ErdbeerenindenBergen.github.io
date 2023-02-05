import AnimatedLetters from '../AnimatedLetters/animatedLettersIndex'
import './portfolioIndex.scss'
import { useEffect, useState, React } from 'react'
import ImageSlider from '../ImageSlider/imageSliderIndex'
import tasteBuds1 from '../../assets/images/tasteBuds1.png'
import tasteBuds2 from '../../assets/images/tasteBuds2.png'
import tasteBuds3 from '../../assets/images/tasteBuds3.png'
import tasteBuds4 from '../../assets/images/tasteBuds4.png'
import tasteBuds5 from '../../assets/images/tasteBuds5.png'
import tasteBuds6 from '../../assets/images/tasteBuds6.png'
import tasteBuds7 from '../../assets/images/tasteBuds7.png'
import tasteBuds8 from '../../assets/images/tasteBuds8.png'
import tasteBuds9 from '../../assets/images/tasteBuds9.png'
import tasteBuds10 from '../../assets/images/tasteBuds10.png'
import tasteBuds11 from '../../assets/images/tasteBuds11.png'
import tasteBudsMobile from '../../assets/images/tasteBudsMobile.png'
import COVIDCare1 from '../../assets/images/COVIDCare1.png'
import COVIDCare2 from '../../assets/images/COVIDCare2.png'
import COVIDCare3 from '../../assets/images/COVIDCare3.png'

import tbLogo from '../../assets/images/tbLogo.png'
import COVIDCareLogo from '../../assets/images/COVIDCareLogo.png'

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
            text: "Designed to find the perfect place to dine. Restaurant matching and voting application using MVC pattern and RESTful APIs. Registered Taste Buds users can search for restaurants in a desired area and create scheduled events. Friends are invited via unique links to view restaurant information and submit votes. The program will record votes and calculate the winning restaurants. Utilizes Java, SpringBoot, JSON, Vue.js, Yelp Fusion API, and PostgreSQL. Above is the log-in page.",
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
        {
            url: tasteBuds5,
            title: "plan: step 1",
            text: "If you choose to plan an event, you will be taken to the plan and event form page. Here you may toggle between three forms as you please. Your information is saved as you plan. You may not submit the form, however, until all required inputs are complete. Once all information is entered and you click submit, invitations will be emailed to your invitees. \n \n Step 1. Plan the date and time of your event and give a deadline for when your \"buds\" must respond to an invite.",
            subtitle: "placeholder"
        },
        {
            url: tasteBuds6,
            title: "plan: step 2",
            text: "Step 2. Select your restaurants. The fork and knife icon will toggle from purple to gold (or the reverse). If the icon is gold, you have added a restaurant to your event list.",
            subtitle: "placeholder"
        },
        {
            url: tasteBuds7,
            title: "step 2",
            text: "Step 2. Select your restaurants. The fork and knife icon will toggle from purple to gold (or the reverse). If the icon is gold, you have added a restaurant to your event list.",
            subtitle: "placeholder"
        },
        {
            url: tasteBuds8,
            title: "plan: step 3",
            text: "Step 3. Invite your buds by entering their email addresses!",
            subtitle: "placeholder"
        },
        {
            url: tasteBuds9,
            title: "vote",
            text: "If you are invited to vote on an event, you will receive a link via email. Click the link to open your voting form. Here you'll find a list of all the restaurants selected for the event and you can vote \"yes\" or \"no\" by clicking on the thumbs-up or thumbs-down icon. Clicking one will disable the other. The thumbs-up icon appears green for a \"yes\" vote while the thumbs-down appears red for a \"no\" vote.",
            subtitle: "placeholder"
        },
        {
            url: tasteBuds10,
            title: "event view",
            text: "If you are an authenticated user, you may view the voting results from any event you have organized by going to the Events page. By clicking on an event, you'll see a ranked list of restaurants from most to least votes. The winning restaurant(s) will display a gold trophy below their images (we thought this would be helpful in case there is a tie!).",
            subtitle: "placeholder"
        },
        {
            url: tasteBuds11,
            title: "about",
            text: "We included an \"About page\" so you can read more about our team.",
            subtitle: "placeholder"
        },
        {
            url: tasteBudsMobile,
            title: "mobile",
            text: "Finally, we ensured that our webpage was made mobile friendly. We also built all our CSS from scratch (without Bootstrap, Vuetify, etc.) so everything right down to the bars of the hamburger menu were hard-coded with care!",
            subtitle: "placeholder"
        },
    ];

    const slidesCC = [
        {
            url: COVIDCare1,
            title: "Home Page",
            text: "Developed for the GirlDevelopIt (GDI) Hackathon, Hack4Health. Built to increase awareness of and access to long COVID resources and to help track long-term symptoms; connects user with COVID-19 statistics and NIH informational web pages; symptoms are recorded in journal entries with the date, COVID-19 test results, and any notes the user wishes to enter; utilizes Java, Spring Boot, SQL, JavaScript, Vue.JS, ElephantSQL. More preview images of this project coming soon.",
            subtitle: "placeholder"
        },
        {
            url: COVIDCare2,
            title: "Journal Entry",
            text: "Users can create journal entries and check symptoms from a list as well as include individual notes. We consulted a physician and specialist from the Charité to ensure that our symptom list is as accurate and all-encompassing as possible.",
            subtitle: "placeholder"
        },
        {
            url: COVIDCare3,
            title: "Journal Details Page",
            text: "Users may view previously recorded journal entries and edit, add to, or delete them. Our goal was to make the app helpful for those suffering with COVID as well as for those health professionals who might treat them by providing a clear history tracker that will document symptoms over time.",
            subtitle: "placeholder"
        }
    ];

    return (
        <>
            <div className='container portfolio-page'>
                <div className="text-zone">
                    <div className="portfolio-background">
                        <h1>
                            <AnimatedLetters
                                letterClass={letterClass}
                                strArray={['P', 'o', 'r', 't', 'f', 'o', 'l', 'i', 'o']}
                                idx={15}
                            />
                        </h1>
                        <br></br>

                        <div className="background-for-portfolio">
                            <div className="project-title">
                                <img src={tbLogo} class="tb-logo"></img>
                                <h6>taste buds</h6>
                            </div>

                            <div>
                                <div className='container-styles-portfolio'>
                                    <ImageSlider slides={slides} />
                                </div>
                            </div>
                        </div>

                        <div className="background-for-portfolio">

                            <div className="project-title">
                                <img src={COVIDCareLogo} class="tb-logo"></img>
                                <h6>COVID Care</h6>
                            </div>

                            <div>
                                <div className='container-styles-portfolio'>
                                    <ImageSlider slides={slidesCC} />
                                </div>
                            </div>
                        </div>

                        <div className="background-for-portfolio">
                            <h6>More project overviews coming soon...</h6>
                            <br />
                            {/* <div className="project-title">
                            <img src={tbLogo} class="tb-logo"></img>
                            <h6>taste buds</h6>
                        </div>

                        <div>
                            <div className='container-styles-portfolio'>
                                <ImageSlider slides={slides} />
                            </div>
                        </div> */}
                        </div>


                        <br />
                        <br />
                        <br />
                        <br />
                        <br />

                    </div>

                </div>
            </div>
        </>
    )
}

export default Portfolio