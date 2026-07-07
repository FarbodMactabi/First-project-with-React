import { useEffect, useRef, useState } from "react"
import "./PopularBrands.css"
import { popularBrands } from "../../data/popularBrands"

function PopularBrands() {
  
  const brandsRef = useRef(null)

  const [showNext, setShowNext] = useState(true)
  const [showPrev, setShowPrev] = useState(false)

  const checkButtons = () => {

    const brandsList = brandsRef.current

    const scrollPosition = Math.abs(brandsList.scrollLeft)
    const maxScroll = brandsList.scrollWidth - brandsList.clientWidth

    if (scrollPosition > 5) {
      setShowPrev(true)
    } 
    
    else {
      setShowPrev(false)
    }

    if (scrollPosition < maxScroll - 5) {
      setShowNext(true)
    } 
    
    else {
      setShowNext(false)
    }
  }

  const goNext = () => {
    brandsRef.current.scrollLeft -= 500

    setTimeout(() => {
      checkButtons()
    }, 300)
  }

  const goPrev = () => {
    brandsRef.current.scrollLeft += 500

    setTimeout(() => {
      checkButtons()
    }, 300)
  }

  useEffect(() => {
    checkButtons()
  }, [])

  return (
    <section className="popular-brands-section">

      <div className="popular-brands-container">

        <h2 className="popular-brands-title">
          <span className="popular-brands-star">★</span>
          محبوب‌ترین برندها
        </h2>

        <div className="popular-brands-wrapper">

          {showNext && (
            <button
              className="popular-brands-btn popular-brands-next"
              type="button"
              onClick={goNext}
            >
              ›
            </button>
          )}

          <div
            className="popular-brands-list"
            ref={brandsRef}
            onScroll={checkButtons}
          >

            {popularBrands.map((brand) => (
              <div className="popular-brand-card" key={brand.id}>
                <img src={brand.image} alt="برند محبوب" />
              </div>
            ))}

          </div>

          {showPrev && (
            <button
              className="popular-brands-btn popular-brands-prev"
              type="button"
              onClick={goPrev}
            >
              ‹
            </button>
          )}

        </div>

      </div>

    </section>
  )
}

export default PopularBrands