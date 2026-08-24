import "./Slider.css"

import { Swiper, SwiperSlide } from "swiper/react"
import {
  Autoplay,
  Navigation,
  Pagination,
} from "swiper/modules"

import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

import { slides } from "../../data"

function Slider() {
  return (
    <section className="slider">
      <Swiper
        className="slider-swiper"
        dir="rtl"
        modules={[
          Autoplay,
          Navigation,
          Pagination,
        ]}
        slidesPerView={1}
        slidesPerGroup={1}
        spaceBetween={0}
        speed={450}
        loop={slides.length > 1}
        rewind={false}
        navigation
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
        }}
        watchOverflow
        grabCursor
      >
        {slides.map((slide) => (
          <SwiperSlide
            className="slider-item"
            key={slide.id}
          >
            <img
              src={slide.image}
              alt={slide.alt}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default Slider