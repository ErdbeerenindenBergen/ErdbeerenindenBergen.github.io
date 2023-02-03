import { useState } from 'react'
import './imageSliderIndex.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareCaretLeft, faSquareCaretRight } from '@fortawesome/free-solid-svg-icons'

const ImageSlider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

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
    <>
      <div className='slider'>

        <div className='arrow-space' onClick={goToPrevious}>
          <FontAwesomeIcon icon={faSquareCaretLeft} className='left-arrow' />
        </div>

        <img src={slides[currentIndex].url} className="slide"></img>

        <div className='arrow-space' onClick={goToNext}>
          <FontAwesomeIcon icon={faSquareCaretRight} className='right-arrow' />
        </div>

      </div>

      <div className="spacing-for-subtext">
        <h4>{slides[currentIndex].text}</h4>
      </div>
      <br />
      <br />
      <br />
      <br />
    </>
  )
};

export default ImageSlider;