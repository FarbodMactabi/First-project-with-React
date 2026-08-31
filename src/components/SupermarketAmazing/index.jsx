import "@/styles/SupermarketAmazing.css"

function SupermarketAmazing() {

  const basketImage = new URL("@/assets/images/fresh.webp",import.meta.url).href
  const titleImage = new URL("@/assets/images/fresh-incredible-offer.svg",import.meta.url).href

  
  const products = [
    {
      id: 1,
      discount: "۵۰",
      image: new URL("@/assets/images/SupermarketAmazing-01.webp", import.meta.url).href,
    },
    {
      id: 2,
      discount: "۴۰",
      image: new URL("@/assets/images/SupermarketAmazing-02.webp", import.meta.url).href,
    },
    {
      id: 3,
      discount: "۴۰",
      image: new URL("@/assets/images/SupermarketAmazing-03.webp", import.meta.url).href,
    },
    {
      id: 4,
      discount: "۴۰",
      image: new URL("@/assets/images/SupermarketAmazing-04.webp", import.meta.url).href,
    },
    {
      id: 5,
      discount: "۴۰",
      image: new URL("@/assets/images/SupermarketAmazing-05.webp", import.meta.url).href,
    },
    {
      id: 6,
      discount: "۴۰",
      image: new URL("@/assets/images/SupermarketAmazing-06.webp", import.meta.url).href,
    },
  ]

  return (
    <section className="supermarket-section">

      <div className="supermarket-container">

        <div className="supermarket-right">

          <img
            className="supermarket-basket-image"
            src={basketImage}
            alt="سبد سوپرمارکتی"
          />

          <img
            className="supermarket-title-image"
            src={titleImage}
            alt="شگفت انگیز سوپرمارکتی"
          />

          <span className="supermarket-offer-badge">
            تا ۵۰٪ تخفیف
          </span>

        </div>

        <div className="supermarket-left">

          <div className="supermarket-products">

            {products.map((product) => (
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
