import AnimatedLetters from '../AnimatedLetters/animatedLettersIndex'
import './portfolioIndex.scss'
import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faScrewdriverWrench } from '@fortawesome/free-solid-svg-icons'

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
          <FontAwesomeIcon icon={faScrewdriverWrench} className="constructionIcon"/>
          <h5>This page is currently under construction.</h5>
        </div>
    </div>
    </>
)
}

export default Portfolio