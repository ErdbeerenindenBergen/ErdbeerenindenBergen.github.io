import { useState } from 'react'
import './imageSliderIndex.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareCaretLeft, faSquareCaretRight } from '@fortawesome/free-solid-svg-icons'

const ImageSlider = ({slides}) => {
  const [currentIndex, setCurrentUser] = useState(0);

  const backgroundImage = {
    backgroundImage: `url(${slides[currentIndex].url})`
  };

  return (
  <div className='slider'>

    <div className='arrowSpace'>            
      <FontAwesomeIcon icon={faSquareCaretLeft} className='leftArrow'/>
    </div>

    <div style={backgroundImage} className="slide"></div>

    <div className="spacingForSubtext">
      <h4>{slides[currentIndex].text}</h4>
    </div>  

    <div className='arrowSpace'>
      <FontAwesomeIcon icon={faSquareCaretRight} className='rightArrow'/>
    </div>

  </div>
  )
};

export default ImageSlider;