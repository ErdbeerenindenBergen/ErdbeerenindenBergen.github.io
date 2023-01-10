import { useState } from 'react'
import LogoKB from '../../assets/images/LogoKB.png'

const ImageSlider = ({slides}) => {
  const [currentIndex, setCurrentUser] = useState(0);
  return (
  <div>ImageSlider
    {/* <div style={{backgroundImage: LogoKB}}></div> */}
  </div>
  )
};

export default ImageSlider;