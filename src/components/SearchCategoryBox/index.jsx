import "@/styles/SearchCategoryBox.css"
import { sponsoredProducts, sponsoredBrandLogo } from "@/data"
import { BsMegaphone } from "react-icons/bs"


function SearchCategoryBox() {

  return (
    <section className="search-sponsored-section">
      <div className="search-sponsored-container">

        <div className="search-sponsored-brand">
          <div className="search-sponsored-label">
            <BsMegaphone />
            <span>سفارشی</span>
          </div>

          <div className="search-sponsored-logo">
            <img src={sponsoredBrandLogo} alt="برند تبلیغاتی" />
          </div>

          <p>میدسل</p>
        </div>

        <div className="search-sponsored-products">
          {sponsoredProducts.map((product) => (
            <div className="search-sponsored-product" key={product.id}>
              <div className="search-sponsored-product-image">
                <img src={product.image} alt={product.title} />
              </div>

              <h3>{product.title}</h3>

              <div className="search-sponsored-price">
                <span>{product.price}</span>
                <small>تومان</small>
              </div>
            </div>
          ))}
        </div>

        <div className="search-sponsored-empty"></div>

      </div>
    </section>
  )
}

export default SearchCategoryBox