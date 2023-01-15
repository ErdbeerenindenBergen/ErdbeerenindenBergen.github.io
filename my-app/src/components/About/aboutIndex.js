import { useEffect, useState, React } from 'react'
// import { faAngular, faCss3, faGitAlt, faHtml5, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons'
// import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters/animatedLettersIndex'
import './aboutIndex.scss'
import ImageSlider from '../ImageSlider/imageSliderIndex'


const About = () => {
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
      url: "http://localhost:3000/image-1.jpg",
      title: "teaching", 
      text: "During my almost decade-long teaching career, I delivered over $4.1M in instructional services to 1700+ students and received an evaluation rating of 4.9 out of 5 across 47 courses with 3 different universities.",
      subtitle: "Here, I am teaching a seminar titled \"Animal Cultures\" at TU Darmstadt"
    },
    {
      url: "http://erdbeerenindenbergen.github.io/image-2.jpg",
      title: "time abroad",
      text: "Since 2011, I have spent several years living abroad as a bilingual research scholar and instructor in Berlin, Dresden, and Munich, where I cultivated my love for people, food, and nature.",
      subtitle: "On a hike?"
    },
    {
      url: "http://erdbeerenindenbergen.github.io/image-3.jpg",
      title: "phd",
      text: "In December 2021, I graduated with my PhD in German Studies after the successful defense of my dissertation, a culmination of my research about cultural perceptions and representations of disability.",
      subtitle: "place holder"
    },
    {
      url: "http://erdbeerenindenbergen.github.io/image-4.jpg",
      title: "EU-Nato trip",
      text: "In 2019, I was selected alongside a NY Times journalist as one of only 2 nominees by the German and Belgian Fulbright Commissions for a week-long seminar at the EU and NATO headquarters. While there, I attended a global cybersecurity workshop and discussed government responses to cyberterrorism.",
      subtitle: "place holder"
    }
    //add pic for Sierra Club? - need to show experience!
  ];

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
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

          <p>
            Unlike most stories about young programming professionals, mine doesn’t begin with a love of technology, but rather a lack of it. How did the daughter of a coal miner from a tiny, formerly industrial town in West Virginia become a bilingual cultural scholar and aspiring software developer who attends cybersecurity panels at NATO headquarters? The simple answer is: an unquenchable curiosity about everything, a love of languages and learning, and most importantly, persistence. I’ve been writing for as long as I can remember: songs as a performer, restaurant orders as a server, lesson plans as a teacher, poetry for Harvard, research for Oxford. But it's taken me a long time to find my calling: writing code.
          </p>

        </div>
      </div>
    </>
  )
}

export default About