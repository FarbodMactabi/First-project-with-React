import "@/styles/SupermarketAmazing.css"
import { supermarketAssets, supermarketProducts } from "@/data"

function SupermarketAmazing() {

  return (
    <section className="supermarket-section">

      <div className="supermarket-container">

        <div className="supermarket-right">

          <img
            className="supermarket-basket-image"
            src={supermarketAssets.basketImage}
            alt="سبد سوپرمارکتی"
          />

          <img
            className="supermarket-title-image"
            src={supermarketAssets.titleImage}
            alt="شگفت انگیز سوپرمارکتی"
          />

          <span className="supermarket-offer-badge">
            تا ۵۰٪ تخفیف
          </span>

        </div>

        <div className="supermarket-left">

          <div className="supermarket-products">

            {supermarketProducts.map((product) => (
              <div className="supermarket-product" key={product.id}>

                <div className="supermarket-product-image">
                  <img src={product.image} alt="محصول سوپرمارکتی" />
                </div>

                <span className="supermarket-discount">
                  {product.discount}٪
                </span>

              </div>
            ))}

          </div>

          <button className="supermarket-more-btn" type="button">
            بیش از ۱۰۰ کالا
            <span>›</span>
          </button>

        </div>

      </div>

    </section>
  )
}

export default SupermarketAmazing
