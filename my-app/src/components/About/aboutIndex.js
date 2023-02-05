import { useEffect, useState, React } from 'react'
import AnimatedLetters from '../AnimatedLetters/animatedLettersIndex'
import './aboutIndex.scss'
import ImageSlider from '../ImageSlider/imageSliderIndex'
// import familyChristmas from '../../assets/images/familyChristmas.png'
import FamilyBirthday from '../../assets/images/FamilyBirthday.png'


const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate');

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
      slideStyleType: 'photoSlide',
      url: FamilyBirthday,
      title: "Family and background",
      text: "Unlike most stories about young programming professionals, mine doesn't begin with a love of technology, but rather a lack of it. How did the daughter of a coal miner from a tiny, formerly industrial town in West Virginia become a bilingual cultural scholar and aspiring software developer who attends cybersecurity panels at NATO headquarters? The simple answer is: an unquenchable curiosity about everything, a love of languages and learning, and most importantly, persistence. I’ve been writing for as long as I can remember: songs as a performer, restaurant orders as a server, lesson plans as a teacher, poetry for Harvard, research for Oxford. But it's taken me a long time to find my calling: writing code.",
      altText: "picture of the author's family in a restaurant in front a cream-colored brick wall. Everyone is smiling."
    },
    {
      slideStyleType: 'photoSlide',
      url: "http://erdbeerenindenbergen.github.io/image-1.jpg",
      title: "teaching",
      text: "During my almost decade-long teaching career, I delivered over $4.1M in instructional services to 1700+ students and received an evaluation rating of 4.9 out of 5 across 47 courses with 3 different universities.",
      altText: "The author is standing at a marker board and drawing a mind-map with animals and different descriptors. Several others are sitting in a circle discussing. Many are smiling warmly."
    },
    {
      slideStyleType: 'photoSlide',
      url: "http://erdbeerenindenbergen.github.io/image-2.jpg",
      title: "time abroad",
      text: "Since 2011, I have spent several years living abroad as a bilingual research scholar and instructor in Berlin, Dresden, and Munich, where I cultivated my love for people, food, and nature.",
      altText: "The author stands in front of a stone wall on top of the fortress in Salzburg, Austria. In the background, one can see the sprawling city and the river that divides the older buildings from the new."
    },
    {
      slideStyleType: 'photoSlide',
      url: "http://erdbeerenindenbergen.github.io/image-3.jpg",
      title: "phd",
      text: "In December 2021, I graduated with my PhD in German Studies after the successful defense of my dissertation, a culmination of my research about cultural perceptions and representations of disability.",
      altText: "The author stands in her red and silver graduation robe, royal blue hood, and velvet black tam. The background is red with The Ohio State University on it."
    },
    {
      slideStyleType: 'photoSlide',
      url: "http://erdbeerenindenbergen.github.io/image-4.jpg",
      title: "EU-Nato trip",
      text: "In 2019, I was selected alongside a NY Times journalist as one of only 2 nominees by the German and Belgian Fulbright Commissions for a week-long seminar at the EU and NATO headquarters. While there, I attended a global cybersecurity workshop and discussed government responses to cyberterrorism.",
      altText: "The author in a black dress, wearing a security pass around her neck, stands next to a New York Times journalist with a teal sweater and green shoulder bag. In the background is a stretch of flags. They stand outside the EU Court of Justice."
    }
  ];

  return (
    <div className='scroll-yes'>
      <>
        <div className="container about-page">
          <div className="text-zone">

            <div className='home-background'>

              <h1>
                <AnimatedLetters
                  letterClass={letterClass}
                  strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                  idx={15}
                />
              </h1>

              <div>
                <div className='container-styles'>
                  <ImageSlider slides={slides} />
                </div>
              </div>
            </div>

              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>

          </div>
        </div>
      </>
    </div>
  )
}

export default About