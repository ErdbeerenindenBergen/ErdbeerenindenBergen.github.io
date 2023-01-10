import { Link, NavLink } from 'react-router-dom'
import './sidebarIndex.scss'
import { useState } from 'react'
import LogoKB from '../../assets/images/LogoKB.png'
import LogoSubtitleCream from '../../assets/images/LogoSubtitleCream.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser, faEnvelope, faBook, faTelevision } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => {
    const [showNav, setShowNav] = useState(false);

return (
  <div className="nav-bar" >
    <Link className="logo" to="/">
        <img src={LogoKB} alt="logo" />
        <img className="sub-logo" src={LogoSubtitleCream} alt="Kassi Burnett, PhD" />
    </Link>

    <nav className={showNav ? 'mobile-show' : ''}>
        <NavLink exact="true" activeclassname="active" to="/" onClick={() => setShowNav(false)}>
            <FontAwesomeIcon icon={faHome} />
        </NavLink>

        <NavLink exact="true" activeclassname="active" className="about-link" to="/about" onClick={() => setShowNav(false)}>
            <FontAwesomeIcon icon={faUser}  />
        </NavLink>

        <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact" onClick={() => setShowNav(false)}>
            <FontAwesomeIcon icon={faEnvelope} />
        </NavLink>

        <NavLink exact="true" activeclassname="active" className="portfolio-link" to="/portfolio" onClick={() => setShowNav(false)}>
            <FontAwesomeIcon icon={faBook}  />
        </NavLink>

        <NavLink exact="true" activeclassname="active" className="news-link" to="/news" onClick={() => setShowNav(false)}>
            <FontAwesomeIcon icon={faTelevision} />
        </NavLink>

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

    </div>
  )
}

export default Sidebar