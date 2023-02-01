import AnimatedLetters from '../AnimatedLetters/animatedLettersIndex';
import './skillsIndex.scss';
import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faScrewdriverWrench } from '@fortawesome/free-solid-svg-icons';
import TextSphere from '../TextSphere/textSphereIndex';

const Skills = () => {
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
            <div className='container skills-page'>
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['S', 'k', 'i', 'l', 'l', 's']}
                            idx={15}
                        />
                    
                    </h1>
                        <FontAwesomeIcon icon={faScrewdriverWrench} className="construction-icon" />
                        <h5>This page is currently under construction.</h5>
                    <TextSphere/>

                </div>
            </div>
        </>
    )
}

export default Skills