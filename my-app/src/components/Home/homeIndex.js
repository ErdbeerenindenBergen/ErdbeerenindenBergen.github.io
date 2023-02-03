import { useEffect, useState } from 'react'
import Portrait from '../../assets/images/Portrait.JPG'
import { useNavigate } from 'react-router-dom'
import AnimatedLetters from '../AnimatedLetters/animatedLettersIndex'
import './homeIndex.scss'
import React from "react"

const Home = () => {

  const [letterClass, setLetterClass] = useState('text-animate')

  const nameArray = ['K', 'a', 's', 's', 'i', ' ', 'B', 'u', 'r', 'n', 'e', 't', 't', ',', ' ', 'P', 'h', 'D']
  const jobArray = ['W', 'e', 'b', ' ', 'D', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r',]

  useEffect(() => {
    let timeout;

    timeout = setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 4000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  let navigate = useNavigate();
  const routeChange = () => {
    let path = `contact`;
    navigate(path);
  }

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <br/>
          <br/>
          <h1>
            <img src={Portrait} alt="portrait" className="portrait" />
            <br/>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={1}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={19}
            />
          </h1>
          <h2>Fullstack Software Engineer</h2>
          <h3>Award-winning Scholar and Writer</h3>
          <div className="button-space">
            <button onClick={routeChange} className="flat-button">
              CONTACT ME
            </button>
          </div>
        </div>

      </div>
    </>
  );

}

export default Home