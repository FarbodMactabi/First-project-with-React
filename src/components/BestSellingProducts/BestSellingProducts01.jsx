import { useEffect, useRef, useState } from "react"
import "./BestSellingProducts.css"
import { bestSellingProducts01 } from "../../data/bestSellingProducts"

function BestSellingProducts() {
  const listRef = useRef(null)

  const [showNext, setShowNext] = useState(true)
  const [showPrev, setShowPrev] = useState(false)

  const checkButtons = () => {
    const list = listRef.current

    if (!list) {
      return
    }

    const scrollPosition = Math.abs(list.scrollLeft)
    const maxScroll = list.scrollWidth - list.clientWidth

    if (scrollPosition > 5) {
      setShowPrev(true)
    } else {
      setShowPrev(false)
    }

    if (scrollPosition < maxScroll - 5) {
      setShowNext(true)
    } else {
      setShowNext(false)
    }
  }

  const goNext = () => {
    listRef.current.scrollLeft -= 500

    setTimeout(() => {
      checkButtons()
    }, 300)
  }

  const goPrev = () => {
    listRef.current.scrollLeft += 500

    setTimeout(() => {
      checkButtons()
    }, 300)
  }

  useEffect(() => {
    checkButtons()
  }, [])

  return (
    <section className="best-selling-section">

      <div className="best-selling-container">

        <div className="best-selling-header">

          <h2 className="best-selling-title">
            <span className="best-selling-icon">🔥</span>
            پرفروش‌ترین کالاها
          </h2>

          <button className="best-selling-see-all" type="button">
            مشاهده همه
          </button>

        </div>

        <div className="best-selling-wrapper">

          {showNext && (
            <button
              className="best-selling-btn best-selling-next"
              type="button"
              onClick={goNext}
            >
              ›
            </button>
          )}

          <div
            className="best-selling-list"
            ref={listRef}
            onScroll={checkButtons}
          >

            {bestSellingProducts01.map((product) => (
              <div className="best-selling-item" key={product.id}>

                <div className="best-selling-image">
                  <img src={product.image} alt={product.title} />
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

          {showPrev && (
            <button
              className="best-selling-btn best-selling-prev"
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

export default BestSellingProducts