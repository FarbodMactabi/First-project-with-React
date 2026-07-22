import { useEffect, useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import "./AmazingOffers.css"
import { amazingProducts } from "../../data/amazingoffers"


function AmazingOffers() {
  const [timeLeft, setTimeLeft] = useState(3 * 60 * 60)

  const titleImage = new URL(
    "../../assets/images/Amazings.svg",
    import.meta.url
  ).href

  const boxImage = new URL(
    "../../assets/images/Amazing01.svg",
    import.meta.url
  ).href

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((previousTime) => {
        if (previousTime > 0) {
          return previousTime - 1
        }

        return 0
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const hours = Math.floor(timeLeft / 3600)
  const minutes = Math.floor((timeLeft % 3600) / 60)
  const seconds = timeLeft % 60

  const time = {
    hours: String(hours).padStart(2, "0"),
    minutes: String(minutes).padStart(2, "0"),
    seconds: String(seconds).padStart(2, "0"),
  }

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

          <button
            className="amazing-see-all"
            type="button"
          >
            مشاهده همه
            <span>›</span>
          </button>
        </div>

        <Swiper
          className="amazing-swiper"
          dir="rtl"
          modules={[Navigation]}
          navigation
          slidesPerView="auto"
          slidesPerGroup={3}
          spaceBetween={5}
          speed={450}
          loop={false}
          rewind={false}
          watchOverflow
          grabCursor
        >
          {amazingProducts.map((product, index) => (
            <SwiperSlide
              className={
                index === 0
                  ? "amazing-slide amazing-first-slide"
                  : "amazing-slide"
              }
              key={product.id}
            >
              <div className="amazing-card">
                <div className="amazing-image">
                  <img
                    src={product.image}
                    alt={product.title}
                  />
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
            </SwiperSlide>
          ))}

          <SwiperSlide className="amazing-slide amazing-more-slide">
            <div className="amazing-more-card">
              <div className="amazing-more-icon">
                ›
              </div>

              <p>مشاهده همه</p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  )
}

export default AmazingOffers