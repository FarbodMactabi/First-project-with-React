import { useEffect, useRef, useState } from "react"
import "./AmazingOffers.css"
import { amazingProducts } from "../../data/amazingoffers"

function AmazingOffers() {
  
  const productsRef = useRef(null)

  const [timeLeft, setTimeLeft] = useState(3 * 60 * 60)
  const [showNext, setShowNext] = useState(true)
  const [showPrev, setShowPrev] = useState(false)

  const titleImage = new URL("../../assets/images/Amazings.svg", import.meta.url).href
  const boxImage = new URL("../../assets/images/Amazing01.svg", import.meta.url).href

  const getTime = () => {

    const hours = Math.floor(timeLeft / 3600)
    const minutes = Math.floor((timeLeft % 3600) / 60)
    const seconds = timeLeft % 60

    return {
      hours: String(hours).padStart(2, "0"),
      minutes: String(minutes).padStart(2, "0"),
      seconds: String(seconds).padStart(2, "0"),
    }
  }

  const checkButtons = () => {

    const track = productsRef.current

    const scrollPosition = Math.abs(track.scrollLeft)
    const maxScroll = track.scrollWidth - track.clientWidth

    setShowPrev(scrollPosition > 5)
    setShowNext(scrollPosition < maxScroll - 5)
  }

  const goNext = () => {
    productsRef.current.scrollLeft -= 500
    setTimeout(checkButtons, 300)
  }

  const goPrev = () => {
    productsRef.current.scrollLeft += 500
    setTimeout(checkButtons, 300)
  }

  useEffect(() => {

    checkButtons()

    const timer = setInterval(() => {

      setTimeLeft((prevTime) => {

        if (prevTime > 0) {
          return prevTime - 1
        }

        return 0
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const time = getTime()

  return (
    <section className="amazing-section">

      <div className="amazing-container">

        <div className="amazing-title-box">

          <img
            className="amazing-title-image"
            src={titleImage}
            alt="پیشنهاد شگفت انگیز"
          />

          <div className="amazing-timer">
            <span>{time.seconds}</span>
            <b>:</b>
            <span>{time.minutes}</span>
            <b>:</b>
            <span>{time.hours}</span>
          </div>

          <img
            className="amazing-box-image"
            src={boxImage}
            alt="شگفت انگیز"
          />

          <button className="amazing-see-all" type="button">
            مشاهده همه
            <span>›</span>
          </button>

        </div>

        {showNext && (
          <button
            className="amazing-scroll-btn amazing-scroll-next"
            type="button"
            onClick={goNext}
          >
            ›
          </button>
        )}

        <div
          className="amazing-products"
          ref={productsRef}
          onScroll={checkButtons}
        >

          {amazingProducts.map((product) => (
            <div className="amazing-card" key={product.id}>

              <div className="amazing-image">
                <img src={product.image} alt={product.title} />
              </div>

              <h3 className="amazing-product-title">
                {product.title}
              </h3>

              <div className="amazing-price-row">

                <span className="amazing-discount">
                  {product.discount}٪
                </span>

                <div className="amazing-price">
                  <span>{product.discountPrice}</span>
                  <small>تومان</small>
                </div>

              </div>

              <div className="amazing-old-price">
                {product.price}
              </div>

            </div>
          ))}

          <div className="amazing-more-card">

            <div className="amazing-more-icon">
              ›
            </div>

            <p>مشاهده همه</p>

          </div>

        </div>

        {showPrev && (
          <button
            className="amazing-scroll-btn amazing-scroll-prev"
            type="button"
            onClick={goPrev}
          >
            ‹
          </button>
        )}

      </div>

    </section>
  )
}

export default AmazingOffers