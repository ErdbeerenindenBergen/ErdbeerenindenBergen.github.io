import AnimatedLetters from '../AnimatedLetters/animatedLettersIndex';
import './skillsIndex.scss';
import React, { useEffect, useState } from 'react';
import { TagCloud } from "@frank-mayer/react-tag-cloud";
import Sparkles from 'react-sparkle';
import resume from '../../assets/images/resume.pdf';

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
                    <div className='home-background'>
                        <div className='centering-on-y-axis'>
                    <h1 className="right-sided">
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['S', 'k', 'i', 'l', 'l', 's']}
                            idx={15}
                        />
                    </h1>

                    <div className="skills">

                        <div className="text-sphere-container">
                            <TagCloud id="tag-cloud"
                                options={() => ({
                                    radius: 300,
                                    maxSpeed: "slow"
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

                        <div className="text-sphere-container-mobile">
                            <TagCloud id="tag-cloud-mobile"
                                options={() => ({
                                    radius: 150,
                                    maxSpeed: "slow",
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

                        <Sparkles
                            color="white"
                            count={50}
                            minSize={7}
                            maxSize={10}
                            overflowPx={0}
                            fadeOutSpeed={10}
                            flicker={false}
                        />
                    </div>
                    <div onTouchStart="">
                        <div className="button">
                            <a href={resume} 
                            // uncomment the line below to make resume automatically download
                            // download="KassiBurnettResume" 
                            rel="noreferrer"
                            target='_blank'>
                                View My Resume
                            </a>
                        </div>
                    </div>

                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Skills