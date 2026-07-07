import "./SearchProducts.css"
import { AiFillStar } from "react-icons/ai"
import { FiChevronLeft, FiChevronRight, FiSliders } from "react-icons/fi"
import {
  badgeMap,
  decorativePaginationItems,
  productStatusMap,
  searchProducts,
  sortItems,
} from "../../data/searchProducts"

function SearchProducts() {
  const visibleProducts = searchProducts.slice(0, 15)

  return (
    <section className="search-products">
      <div className="search-products-sort">
        <div className="search-products-sort-right">
          <div className="search-products-sort-title">
            <FiSliders />
            <span>مرتب سازی:</span>
          </div>

          <div className="search-products-sort-items">
            {sortItems.map((item) => (
              <button
                key={item.id}
                type="button"
                className={
                  item.value === "related"
                    ? "search-products-sort-item search-products-sort-item-active"
                    : "search-products-sort-item"
                }
              >
                {item.title}
              </button>
            ))}
          </div>
        </div>

        <span className="search-products-count">
          {searchProducts.length} کالا
        </span>
      </div>

      <div className="search-products-list">
        {visibleProducts.map((product) => {
          const badgeImage = product.badgeType ? badgeMap[product.badgeType] : null

          const statusData = productStatusMap[product.statusType] || {
            text: "",
            icon: null,
            className: "status-normal",
          }

          return (
            <article className="search-product-card" key={product.id}>
              <div className="search-product-card-inner">
                <div className="search-product-top-label">
                  {badgeImage && (
                    <img src={badgeImage} alt={product.badgeType} />
                  )}
                </div>

                <div className="search-product-image-and-colors">
                  <div className="search-product-colors">
                    {product.colors.map((color, index) => (
                      <span
                        key={`${product.id}-${index}`}
                        className="search-product-color"
                        style={{ backgroundColor: color }}
                      ></span>
                    ))}
                  </div>

                  <div className="search-product-image-box">
                    <img src={product.image} alt={product.title} />
                  </div>
                </div>

                <h3 className="search-product-title">
                  {product.title}
                </h3>

                <div className="search-product-meta-row">
                  <div className={`search-product-status ${statusData.className}`}>
                    {statusData.icon && (
                      <img src={statusData.icon} alt="" />
                    )}

                    {statusData.text && (
                      <span>{statusData.text}</span>
                    )}
                  </div>

                  <div className="search-product-rating">
                    <AiFillStar />
                    <span>{product.rating}</span>
                  </div>
                </div>

                <div className="search-product-price-row">
                  {product.discount ? (
                    <span className="search-product-discount">
                      {product.discount}
                    </span>
                  ) : (
                    <span className="search-product-discount-empty"></span>
                  )}

                  <div className="search-product-price-box">
                    <div className="search-product-price">
                      <span>{product.price}</span>
                      <small>تومان</small>
                    </div>

                    {product.oldPrice && (
                      <div className="search-product-old-price">
                        {product.oldPrice}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </article>
          )
        })}
      </div>

      <div className="search-products-pagination">
        <button
          type="button"
          className="search-products-pagination-nav"
        >
          <FiChevronRight />
          <span>قبلی</span>
        </button>

        <div className="search-products-pagination-numbers">
          {decorativePaginationItems.map((item) => {
            if (item.type === "dots") {
              return (
                <span
                  key={item.id}
                  className="search-products-pagination-dots"
                >
                  {item.title}
                </span>
              )
            }

            return (
              <button
                key={item.id}
                type="button"
                className={
                  item.active
                    ? "search-products-pagination-number search-products-pagination-number-active"
                    : "search-products-pagination-number"
                }
              >
                {item.title}
              </button>
            )
          })}
        </div>

        <button
          type="button"
          className="search-products-pagination-nav"
        >
          <span>بعدی</span>
          <FiChevronLeft />
        </button>
      </div>
    </section>
  )
}

export default SearchProducts