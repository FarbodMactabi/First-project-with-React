import "@/styles/DiscountedProducts.css"
import { discountedProducts } from "@/data"

function DiscountedProducts() {
  return (
    <section className="discounted-section">

      <div className="discounted-container">

        <div className="discounted-header">

          <h2 className="discounted-title">
            <span className="discounted-title-icon">٪</span>
            منتخب محصولات تخفیف و حراج
          </h2>

        </div>

        <div className="discounted-list">

          {discountedProducts.map((product) => {
            const hasDiscount = product.discount !== null

            return (
              <div className="discounted-card" key={product.id}>

                <div className="discounted-image">
                  <img src={product.image} alt="محصول" />
                </div>

                <div className="discounted-price-row">

                  {hasDiscount ? (
                    <span className="discounted-badge">
                      {product.discount}٪
                    </span>
                  ) : (
                    <span></span>
                  )}

                  <div className="discounted-final-price">
                    <span>
                      {hasDiscount ? product.finalPrice : product.price}
                    </span>
                    <small>تومان</small>
                  </div>

                </div>

                {hasDiscount && (
                  <div className="discounted-old-price">
                    {product.price}
                  </div>
                )}

              </div>
            )
          })}

        </div>

      </div>

    </section>
  )
}

export default DiscountedProducts