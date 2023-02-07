import { Link, NavLink } from 'react-router-dom'
import './sidebarIndex.scss'
import { useState } from 'react'
import LogoKB from '../../assets/images/LogoKB.png'
import LogoSubtitle from '../../assets/images/LogoSubtitle.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser, faEnvelope, faBook, faBars, faPenFancy, faClose } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => {
  const [showNav, setShowNav] = useState(false);

  const nav = document.querySelector('#nav');

  function outsideClose(event) {
    if (!nav.contains(event.target)) {
      setShowNav(false);
    }
  }

  function close() {
    window.addEventListener('mousedown', outsideClose);
  }

  return (
    <div className="nav-bar" onClick={close} >
      <Link className="logo"
        // class="left-corner" 
        to="/">
        <img src={LogoKB} alt="logo" />
        <img className="sub-logo" src={LogoSubtitle} alt="Kassi Burnett, PhD" />
      </Link>

      <nav id='nav' className={showNav ? 'mobile-show' : 'end-mobile-show'}>
        <NavLink exact="true" activeclassname="active"  className="nav-icon" to="/" onClick={() => setShowNav(false)}>
          <FontAwesomeIcon icon={faHome} />
        </NavLink>

        <NavLink exact="true" activeclassname="active" className="about-link nav-icon" to="/about" onClick={() => setShowNav(false)}>
          <FontAwesomeIcon icon={faUser} />
        </NavLink>

        <NavLink exact="true" activeclassname="active" className="contact-link nav-icon" to="/contact" onClick={() => setShowNav(false)}>
          <FontAwesomeIcon icon={faEnvelope} />
        </NavLink>

        <NavLink exact="true" activeclassname="active" className="portfolio-link nav-icon" to="/portfolio" onClick={() => setShowNav(false)}>
          <FontAwesomeIcon icon={faBook} />
        </NavLink>

        <NavLink exact="true" activeclassname="active" className="skills-link nav-icon" to="/skills" onClick={() => setShowNav(false)}>
          <FontAwesomeIcon icon={faPenFancy} />
        </NavLink>

        <FontAwesomeIcon 
          onClick={() => setShowNav(false)}
          icon={faClose}
          color="#ffd700"
          size="3x"
          className='close-icon' />
      </nav>

      <ul>
        <li>
          <a
            href="https://www.linkedin.com/in/kassi-burnett-phd/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              className="anchor-icon"
            />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/ErdbeerenindenBergen"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faGithub}
              className="anchor-icon"
            />
          </a>
        </li>
      </ul>
      <FontAwesomeIcon
        id='hamburger-icon'
        onClick={() => setShowNav(true)}
        icon={faBars}
        color="#ffd700"
        size="3x"
        className='hamburger-icon' />
    </div>
  )
}

export default Sidebar