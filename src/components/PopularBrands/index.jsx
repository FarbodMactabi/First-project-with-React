import "@/styles/PopularBrands.css"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import { popularBrands } from "@/data"

function PopularBrands() {
  return (
    <section className="popular-brands-section">
      <div className="popular-brands-container">
        <h2 className="popular-brands-title">
          <span className="popular-brands-star">★</span>
          محبوب‌ترین برندها
        </h2>

        <Swiper
          className="popular-brands-swiper"
          dir="rtl"
          modules={[Navigation]}
          navigation={{
            enabled: true,
            disabledClass: "popular-brands-button-disabled",
            lockClass: "popular-brands-button-lock",
          }}
          slidesPerView="auto"
          slidesPerGroup={1}
          spaceBetween={0}
          speed={450}
          loop={false}
          rewind={false}
          centeredSlides={false}
          watchOverflow
          grabCursor
        >
          {popularBrands.map((brand) => (
            <SwiperSlide
              className="popular-brand-slide"
              key={brand.id}
            >
              <div className="popular-brand-card">
                <img
                  src={brand.image}
                  alt={brand.title || "برند محبوب"}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

export default PopularBrands