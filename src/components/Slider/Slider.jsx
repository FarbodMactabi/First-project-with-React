import { useEffect, useState } from "react"
import "./Slider.css"
import { slides } from "../../data/slider"

function Slider() {

  const [activeIndex, setActiveIndex] = useState(0)

  const nextSlide = () => {

    setActiveIndex((prevIndex) => {

      if (prevIndex === slides.length - 1) {
        return 0
      } 
      
      else {
        return prevIndex + 1
      }
    })
  }

  const prevSlide = () => {

    setActiveIndex((prevIndex) => {

      if (prevIndex === 0) {
        return slides.length - 1
      } 
      
      else {
        return prevIndex - 1
      }
    })
  }

  useEffect(() => {

    const timer = setInterval(() => {
      
      setActiveIndex((prevIndex) => {

        if (prevIndex === slides.length - 1) {
          return 0
        } 
        
        else {
          return prevIndex + 1
        }
      })
    }, 3000)

    return () => {
      clearInterval(timer)
    }
  }, [])

  return (
    <section className="slider">

      <div
        className="slider-track"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {slides.map((slide) => (
          <div className="slider-item" key={slide.id}>
            <img src={slide.image} alt={slide.alt} />
          </div>
        ))}
      </div>

      <button
        className="slider-btn slider-btn-right"
        type="button"
        onClick={nextSlide}
      >
        ›
      </button>

      <button
        className="slider-btn slider-btn-left"
        type="button"
        onClick={prevSlide}
      >
        ‹
      </button>

      <div className="slider-dots">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            className={activeIndex === index ? "slider-dot active" : "slider-dot"}
            type="button"
            onClick={() => setActiveIndex(index)}
          ></button>
        ))}
      </div>

    </section>
  )
}

export default Slider