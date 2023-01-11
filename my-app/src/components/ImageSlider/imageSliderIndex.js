import { useState } from 'react'
import './imageSliderIndex.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareCaretLeft, faSquareCaretRight } from '@fortawesome/free-solid-svg-icons'

const ImageSlider = ({slides}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const backgroundImage = {
    backgroundImage: `url(${slides[currentIndex].url})`
  };

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }

  return (
  <div className='slider'>

    <div className='arrowSpace' onClick={goToPrevious}>            
      <FontAwesomeIcon icon={faSquareCaretLeft} className='leftArrow'/>
    </div>

    <div style={backgroundImage} className="slide"></div>

    <div className="spacingForSubtext">
      <h4>{slides[currentIndex].text}</h4>
    </div>  

    <div className='arrowSpace' onClick={goToNext}>
      <FontAwesomeIcon icon={faSquareCaretRight} className='rightArrow'/>
    </div>

  </div>
  )
};

export default ImageSlider;