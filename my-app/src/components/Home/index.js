import { useEffect, useState } from 'react'
import Portrait from '../../assets/images/Portrait.JPG'
import SquarePortrait from '../../assets/images/SquarePortrait.JPG'
import { Link } from 'react-router-dom'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const Home = () => {

    const [letterClass, setLetterClass] = useState('text-animate')

    const nameArray = [' ','K','a','s','s','i',' ','B','u','r','n','e','t','t']
    const jobArray = ['W','e','b',' ','D','e','v','e','l','o','p','e','r']

return (
    <div className="container home-page">
        <div className="text-zone">
        <h1>
            {/* <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span> */}
                <img src={SquarePortrait} alt="portrait" className="portrait"/>
                <br/>
                <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={22}
            />
         </h1>
         <h2>Fullstack Software Developer</h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>

    </div>
);

}

export default Home