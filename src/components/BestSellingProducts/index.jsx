import "@/styles/BestSellingProducts.css"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"

function BestSellingProducts({ title, products }) {
  const productGroups = Array.from(
    { length: Math.ceil(products.length / 3) },
    (_, groupIndex) =>
      products.slice(
        groupIndex * 3,
        groupIndex * 3 + 3
      )
  )

  return (
    <section className="best-selling-section">
      <div className="best-selling-container">
        <div className="best-selling-header">
          <h2 className="best-selling-title">
            <span className="best-selling-icon">🔥</span>
            {title}
          </h2>

          <button
            className="best-selling-see-all"
            type="button"
          >
            مشاهده همه
          </button>
        </div>

        <Swiper
          className="best-selling-swiper"
          dir="rtl"
          modules={[Navigation]}
          navigation={{
            enabled: true,
            disabledClass: "best-selling-button-disabled",
            lockClass: "best-selling-button-lock",
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
          {productGroups.map((group, groupIndex) => (
            <SwiperSlide
              className="best-selling-slide"
              key={groupIndex}
            >
              <div className="best-selling-column">
                {group.map((product) => (
                  <div
                    className="best-selling-item"
                    key={product.id}
                  >
                    <div className="best-selling-image">
                      <img
                        src={product.image}
                        alt={product.title}
                      />
                    </div>

                    <span className="best-selling-rank">
                      {product.id}
                    </span>

                    <p className="best-selling-name">
                      <span>{product.title}</span>
                    </p>
                  </div>
                ))}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

export default BestSellingProducts