import AnimatedLetters from '../AnimatedLetters/animatedLettersIndex';
import './skillsIndex.scss';
import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faScrewdriverWrench } from '@fortawesome/free-solid-svg-icons';
import { TagCloud } from "@frank-mayer/react-tag-cloud";

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

                    {/* <FontAwesomeIcon icon={faScrewdriverWrench} className="construction-icon" />
                    <h5>This page is currently under construction.</h5> */}

                    <TagCloud
                    options={(w: Window & typeof globalThis): TagCloudOptions => ({
                            radius: Math.min(500) / 2,
                            maxSpeed: "normal",
                        })} 
                        class="tagcloud text-sphere">
                        {[
                            "HTML",
                            "CSS",
                            "SASS",
                            "JavaScript",
                            "React",
                            "Vue",
                            "Java",
                            "IntelliJ",
                            "Unit Testing",
                            "GIT",
                            "GITHUB",
                            "Spring Boot",
                            "PostgreSQL",
                            "Responsive Design",
                            "E/R Diagrams",
                            "Integration Testing"
                        ]}
                    </TagCloud>

                </div>
            </div>
        </>
    )
}

export default Skills