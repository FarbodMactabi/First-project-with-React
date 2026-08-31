import "@/styles/ProductSimilarProducts.css"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import { FiTruck } from "react-icons/fi"
import { productSimilarProductsData, productSimilarSectionData } from "@/data"

function ProductSimilarProducts() {
  return (
    <section className="product-similar">
      <div className="product-similar-header">
        <h2>{productSimilarSectionData.title}</h2>

        <span>{productSimilarSectionData.subtitle}</span>
      </div>

      <div className="product-similar-wrapper">
        <Swiper
          className="product-similar-swiper"
          dir="rtl"
          modules={[Navigation]}
          navigation
          slidesPerView="auto"
          slidesPerGroup={1}
          slidesPerGroupAuto={false}
          slidesOffsetBefore={0}
          slidesOffsetAfter={0}
          spaceBetween={0}
          speed={300}
          loop={false}
          rewind={false}
          centeredSlides={false}
          centerInsufficientSlides={false}
          resistance={false}
          snapToSlideEdge
          setWrapperSize
          watchOverflow
          grabCursor
        >
          {productSimilarProductsData.map((product) => (
            <SwiperSlide
              className="product-similar-slide"
              key={product.id}
            >
              <article className="product-similar-card">
                <div className="product-similar-image">
                  {product.image ? (
                    <img
                      src={product.image}
                      alt={product.imageAlt}
                    />
                  ) : (
                    <span className="product-similar-image-placeholder">
                      عکس
                    </span>
                  )}
                </div>

                <h3 className="product-similar-title">
                  {product.title}
                </h3>

                {product.deliveryText && (
                  <div
                    className={
                      product.deliveryText.includes("انبار")
                        ? "product-similar-delivery product-similar-delivery-warning"
                        : "product-similar-delivery"
                    }
                  >
                    {!product.deliveryText.includes("انبار") && (
                      <FiTruck />
                    )}

                    <span>{product.deliveryText}</span>
                  </div>
                )}

                <div className="product-similar-price-box">
                  <div className="product-similar-price-main-row">
                    <div className="product-similar-current-price">
                      <span>{product.price}</span>
                      <small>تومان</small>
                    </div>

                    {product.discount && (
                      <span className="product-similar-discount">
                        {product.discount}
                      </span>
                    )}
                  </div>

                  {product.oldPrice && (
                    <span className="product-similar-old-price">
                      {product.oldPrice}
                    </span>
                  )}
                </div>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

export default ProductSimilarProducts