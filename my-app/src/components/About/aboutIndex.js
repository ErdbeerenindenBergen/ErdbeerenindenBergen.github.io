import { useEffect, useState, React } from 'react'
import { faAngular, faCss3, faGitAlt, faHtml5, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters/animatedLettersIndex'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
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
    {  url: "http://localhost:3000/image-1.jpg", title: "Spent a lot of time teaching", text: "During my almost decade-long teaching career, I delivered over $4.1M in instructional services to 1700+ students and received an evaluation rating of 4.9 out of 5 across 47 courses with 3 different universities." },
    {  url: "http://localhost:3000/image-2.jpg", title: "Spent a lot of time abroad", text: "this is a test" },
    {  url: "http://localhost:3000/image-3.jpg", title: "Presented around the world", text: "this is a test" },
    {  url: "http://localhost:3000/image-4.jpg", title: "Dad is a coal miner.", text: "this is a test"  }
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
          <div className='containerStyles'>
            <ImageSlider slides={slides}/>
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