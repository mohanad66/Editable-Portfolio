import "./css/styles.css"
import { useState } from 'react'
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs"
export default function Carousel({images}) {

    const [currentSlide, setCurrentSlide] = useState(0)
    
    function handlePreview() {
        setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1)
    }
    function handleNext() {
        setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1)
    }
    
  return (
    <div className='Container'>
      <BsArrowLeftCircleFill onClick={handlePreview} color={"#fff"} className='arrow arrowLeft' />
      {images && images.length > 1 ?
        images.map((image, index) =>
        (
          <img key={image.id} src={`http://127.0.0.1:8000${image.img}`} className={currentSlide === index ? 'currentImage' : 'currentImage hide-current-image'} />
        ))
        : null}
      <BsArrowRightCircleFill onClick={handleNext} color={"#fff"} className='arrow arrowRight' />
      <span className='circle-indicator'>
        {
          images && images.length ?
            images.map((_, index) => <button key={index} className={currentSlide === index ? 'current-indicator' : 'current-indicator hide-current-indicator'} onClick={() => { setCurrentSlide(index) }}></button>)
            : null
        }
      </span>
    </div>
  )
}
