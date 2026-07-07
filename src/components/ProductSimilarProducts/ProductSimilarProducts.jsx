import { useEffect, useRef, useState } from "react"
import "./ProductSimilarProducts.css"
import {
  FiChevronLeft,
  FiChevronRight,
  FiTruck,
} from "react-icons/fi"

import {
  productSimilarProductsData,
  productSimilarSectionData,
} from "../../data/productDetails"

function ProductSimilarProducts() {
  const similarProductsRef = useRef(null)

  const [showNext, setShowNext] = useState(true)
  const [showPrev, setShowPrev] = useState(false)

  const checkButtons = () => {
    const track = similarProductsRef.current

    if (!track) {
      return
    }

    const scrollPosition = Math.abs(track.scrollLeft)
    const maxScroll = track.scrollWidth - track.clientWidth

    setShowPrev(scrollPosition > 5)
    setShowNext(scrollPosition < maxScroll - 5)
  }

  const goNext = () => {
    similarProductsRef.current.scrollLeft -= 500

    setTimeout(() => {
      checkButtons()
    }, 300)
  }

  const goPrev = () => {
    similarProductsRef.current.scrollLeft += 500

    setTimeout(() => {
      checkButtons()
    }, 300)
  }

  useEffect(() => {
    checkButtons()
  }, [])

  return (
    <section className="product-similar">
      <div className="product-similar-header">
        <h2>{productSimilarSectionData.title}</h2>

        <span>{productSimilarSectionData.subtitle}</span>
      </div>

      <div className="product-similar-wrapper">
        {showNext && (
          <button
            className="product-similar-scroll-btn product-similar-scroll-next"
            type="button"
            onClick={goNext}
            aria-label="مشاهده کالاهای بعدی"
          >
            <FiChevronLeft />
          </button>
        )}

        <div
          className="product-similar-products"
          ref={similarProductsRef}
          onScroll={checkButtons}
        >
          {productSimilarProductsData.map((product) => (
            <article className="product-similar-card" key={product.id}>
              <div className="product-similar-image">
                {product.image ? (
                  <img src={product.image} alt={product.imageAlt} />
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
                  {!product.deliveryText.includes("انبار") && <FiTruck />}

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
          ))}
        </div>

        {showPrev && (
          <button
            className="product-similar-scroll-btn product-similar-scroll-prev"
            type="button"
            onClick={goPrev}
            aria-label="مشاهده کالاهای قبلی"
          >
            <FiChevronRight />
          </button>
        )}
      </div>
    </section>
  )
}

export default ProductSimilarProducts