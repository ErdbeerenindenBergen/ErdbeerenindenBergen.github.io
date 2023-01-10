import { useEffect, useState, React } from 'react'
import { faAngular, faCss3, faGitAlt, faHtml5, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters/animatedLettersIndex'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './aboutIndex.scss'
import DadCoalMiner from '../../assets/images/DadCoalMiner.jpg'
import LifeAbroad from '../../assets/images/LifeAbroad.jpg'
import EnglandPresentation from '../../assets/images/EnglandPresentation.jpg'
import RachelCarsonCenter from '../../assets/images/RachelCarsonCenter.jpg'
import Teaching from '../../assets/images/Teaching.jpg'
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
    {photo: Teaching,
    title: 'Teaching',
    description: 'description of my experience teaching'
    },
    {photo: DadCoalMiner,
    title: 'Dad is a Coal Miner',
    description: 'description of my background'
    },
    {photo: LifeAbroad,
    title: 'Life Abroad',
    description: 'description'
    },
    {photo: EnglandPresentation,
    title: 'Presenting',
    description: 'presented around the world'
    },
    {photo: RachelCarsonCenter,
    title: 'Fulbright',
    description: 'Fulbright recipient'
    },
  ]

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
          <p>
          Unlike most stories about young programming professionals, mine doesn’t begin with a love of technology, but rather a lack of it. How did the daughter of a coal miner from a tiny, formerly industrial town in West Virginia become a bilingual cultural scholar and aspiring software developer who attends cybersecurity panels at NATO headquarters? The simple answer is: an unquenchable curiosity about everything, a love of languages and learning, and most importantly, persistence. I’ve been writing for as long as I can remember: songs as a performer, restaurant orders as a server, lesson plans as a teacher, poetry for Harvard, research for Oxford. But it's taken me a long time to find my calling: writing code. 
          </p>
          <ImageSlider slides={slides}/>
          <p>
          {/* Looking back, it all makes sense. As an elementary school student, I excelled at logic problems and math: I was the fastest multiplier in the 3rd grade. I won Math Counts and physics competitions in high school. Over the past almost eleven years in Higher Ed., I have fine-tuned my analytical reasoning alongside my communication, teamwork, and leadership skills. As a scholar and an activist, I have pursued innovative research topics that bridge the gap between social injustices and contemporary cultural studies, and I have presented my work all over the U.S. and Europe. I've always been interested in tackling the big problems: how to break them down, talk about and debate them with others, and figure out what goals can and should be set for the future.  */}
          </p>
          <p>
          {/* My unconventional solution-seeking is the very reason I am now pursuing software development after many successful years in the humanities. I’ve never been afraid of facing up to challenges. No matter what I’ve done, I’ve done it with grit, gusto, and a simple goal in mind: to make the world a better place. As a scholar, I identified, evaluated, and critiqued social and cultural problems. As a software developer, I aspire to build solutions for the future. */}
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faAngular} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About