import { useState } from 'react'
import './imageSliderIndex.scss'
import LeftArrowHomeMade from '../../assets/images/LeftArrowHomeMade.png';
import RightArrowHomeMade from '../../assets/images/RightArrowHomeMade.png';
import ReversedLeftArrowHomeMade from '../../assets/images/ReversedLeftArrowHomeMade.png';
import ReversedRightArrowHomeMade from '../../assets/images/ReversedRightArrowHomeMade.png';

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

  const [isHoveringLeft, setIsHoveringLeft] = useState(false);

  const handleMouseOverLeft = () => {
    setIsHoveringLeft(true);
  };

  const handleMouseOutLeft = () => {
    setIsHoveringLeft(false);
  };

  const [isHoveringRight, setIsHoveringRight] = useState(false);

  const handleMouseOverRight = () => {
    setIsHoveringRight(true);
  };

  const handleMouseOutRight = () => {
    setIsHoveringRight(false);
  };

  return (
    <>
      <div className='slider'>

        <div className='arrow-space' onClick={goToPrevious}>
          <div onMouseOver={handleMouseOverLeft}
              onMouseOut={handleMouseOutLeft} >
            <img src={LeftArrowHomeMade} alt="clickable left arrow" className='left-arrow' 
              />
            {isHoveringLeft && ( <img src={ReversedLeftArrowHomeMade} alt="left arrow that has been clicked or hovered over"
            className='left-arrow' />
            )}
          </div>
        </div>

        <img src={slides[currentIndex].url} alt={slides[currentIndex].altText} className={slides[currentIndex].slideStyleType}></img>

        <div className='arrow-space' onClick={goToNext} onMouseOver={handleMouseOverRight}
            onMouseOut={handleMouseOutRight} >
          <img src={RightArrowHomeMade} alt="clickable right arrow"  className='right-arrow' />
          {isHoveringRight && ( <img src={ReversedRightArrowHomeMade} alt="right arrow that has been clicked or hovered over"
          className='right-arrow' />
          )}
        </div>

      </div>

      <div className="spacing-for-subtext">
        <h4>{slides[currentIndex].text}</h4>
      </div>
      <br/>
      <br/>
      <br/>
      <br/>
    </>
  )
};

export default ImageSlider;