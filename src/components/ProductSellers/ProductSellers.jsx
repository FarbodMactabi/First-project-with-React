import "./ProductSellers.css"
import {
  FiShield,
  FiTruck,
  FiUser,
} from "react-icons/fi"
import { PiStarFour, PiStorefront } from "react-icons/pi"

import {
  productSellersData,
  productSellersSectionData,
} from "../../data/productDetails"

function ProductSellers() {
  const sellerIconMap = {
    truck: <FiTruck />,
    seller: <FiUser />,
    shield: <FiShield />,
    store: <PiStorefront />,
  }

  return (
    <section className="product-sellers">
      <div className="product-sellers-header">
        <h2>{productSellersSectionData.title}</h2>
      </div>

      <div className="product-sellers-list">
        {productSellersData.map((item) => (
          <article
            className={
              item.highlight
                ? "product-sellers-row product-sellers-row-highlight"
                : "product-sellers-row"
            }
            key={item.id}
          >
            <div className="product-sellers-main-row">
              <div className="product-sellers-seller-cell">
                <div className="product-sellers-logo-box">
                    {item.seller.logoType === "store" ? (
                        <PiStorefront className="product-sellers-store-icon" />
                    ) : item.seller.logo ? (
                        <img
                        src={item.seller.logo}
                        alt={item.seller.logoAlt}
                        className="product-sellers-logo"
                        />
                    ) : (
                        <span className="product-sellers-logo-placeholder">
                        عکس
                        </span>
                    )}
                </div>

                <div className="product-sellers-seller-info">
                  <div className="product-sellers-seller-title-row">
                    <span className="product-sellers-seller-name">
                      {item.seller.name}
                    </span>

                    {item.seller.selected && (
                      <span className="product-sellers-selected-badge">
                        منتخب
                      </span>
                    )}
                  </div>

                  <div className="product-sellers-performance-row">
                    {item.seller.rate && (
                      <>
                        <span className="product-sellers-rate">
                          {item.seller.rate}
                        </span>

                        <span className="product-sellers-separator">
                          |
                        </span>
                      </>
                    )}

                    <span className="product-sellers-performance">
                      {item.seller.performance}
                    </span>
                  </div>
                </div>
              </div>

              <div className="product-sellers-delivery-cell">
                <div className="product-sellers-cell-title">
                  {sellerIconMap[item.delivery.iconType]}
                  <span>{item.delivery.title}</span>
                </div>

                {item.delivery.description && (
                  <span className="product-sellers-cell-description">
                    {item.delivery.description}
                  </span>
                )}
              </div>

              <div className="product-sellers-warranty-cell">
                <div className="product-sellers-cell-title">
                  {sellerIconMap[item.warranty.iconType]}
                  <span>{item.warranty.title}</span>
                </div>
              </div>

              <div className="product-sellers-price-cell">
                <div className="product-sellers-price-row">
                  {item.price.discount && (
                    <span className="product-sellers-discount">
                      {item.price.discount}
                    </span>
                  )}

                  <div className="product-sellers-price-content">
                    {item.price.oldPrice && (
                      <span className="product-sellers-old-price">
                        {item.price.oldPrice}
                      </span>
                    )}

                    <div className="product-sellers-current-price">
                      <span>{item.price.currentPrice}</span>
                      <small>{item.price.currency}</small>
                    </div>
                  </div>
                </div>

                <button type="button" className="product-sellers-add-button">
                  {item.actionText}
                </button>
              </div>
            </div>

            {item.plus.active && (
            <div className="product-sellers-plus-row">
                <div className="product-sellers-plus-content">
                <PiStarFour />
                <strong>{item.plus.title}</strong>
                <span>{item.plus.description}</span>
                </div>
            </div>
            )}
          </article>
        ))}
      </div>
    </section>
  )
}

export default ProductSellers