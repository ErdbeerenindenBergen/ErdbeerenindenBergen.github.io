import AnimatedLetters from '../AnimatedLetters/animatedLettersIndex'
import './contactIndex.scss'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import React, { useEffect, useState, useRef } from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const form = useRef();
  

  useEffect(() => {
    let timeout;

    timeout = setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 3000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm('service_b0ifdvh', 'template_q427m8l', form.current, 'hMhE5pOvAEPDiPUfG')
      .then(
        () => {
          alert('Message successfully sent!')
          window.location.reload(false)
        },
        () => {
          alert('Failed to send the message, please try again')
        }
      )
  }

  return (
      <>
      <div className='container contact-page'>
        <div className="text-zone">
          <h1 className="left-sided">
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <h3 className="left-sided">
            If you have any requests or questions, please don't hesitate to contact me.
          </h3>
          <div className='contact-form'>
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input placeholder="Your name"
                    type="text"
                    name="name"
                    required />
                </li>
                <li className="half">
                  <input
                    placeholder="Your email address"
                    type="email"
                    name="email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>

          </div>
          {/* <br/><br/><br/><br/>
            <br/><br/><br/><br/> */}
            {/* <div></div> */}
            {/* <br/><br/><br/><br/>
            <br/><br/><br/><br/>
            <h8>.</h8> */}
        </div>


          <div className="info-map">
            Kassi Burnett
            <br />
            Atlanta, Georgia
            <br />
          </div>

        <div className="map-wrap">
          <MapContainer center={[33.75374, -84.386330]} zoom={6}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[33.75374, -84.386330]}>
              <Popup>I live here!</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
      </>
    // </div>
  )
}

export default Contact