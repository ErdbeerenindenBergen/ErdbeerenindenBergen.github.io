import { useEffect, useState } from 'react';
import './imageSliderIndex.scss';

const ImageSlider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fadeClass, setFadeClass] = useState('fade-in');

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeClass('fade-out'); // Start fade-out animation

      setTimeout(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === slides.length - 1 ? 0 : prevIndex + 1
        );
        setFadeClass('fade-in'); // Start fade-in animation
      }, 500); // Adjust timing for smooth transition
    }, 7000); // Adjust speed (5000ms = 5 seconds per slide)

    return () => clearInterval(interval);
  }, [slides.length]);

  // Handle manual dot selection
  const goToSlide = (index) => {
    setFadeClass('fade-out');
    setTimeout(() => {
      setCurrentIndex(index);
      setFadeClass('fade-in');
    }, 500);
  };

  return (
    <div className="carousel-container">
      <div className={`carousel-slide ${fadeClass}`}>
        <img
          src={slides[currentIndex].url}
          alt={slides[currentIndex].altText}
          className="carousel-image"
        />
        <div className={`carousel-caption ${fadeClass}`}>{slides[currentIndex].text}</div>
      </div>

      {/* Navigation Dots */}
      <div className="dots-container">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
