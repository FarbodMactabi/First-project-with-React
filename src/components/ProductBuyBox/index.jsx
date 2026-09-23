import "@/styles/ProductBuyBox.css"
import { FiChevronLeft, FiInfo, FiShield } from "react-icons/fi"
import { MdOutlineLocalShipping, MdOutlineSpeed } from "react-icons/md"
import { PiStarFour } from "react-icons/pi"
import { productBuyBoxData, productBuyBoxFooterData, productBuyBoxPlusData, productBuyBoxSellerInfoItems, productBuyBoxShippingItems } from "@/data"

function ProductBuyBox() {
  
  const shippingIconMap = {
    truck: <MdOutlineLocalShipping />,
    fast: <MdOutlineSpeed />,
  }

  return (
    <aside className="product-buybox-first">
      <div className="product-buybox-card-first">
        <div className="product-buybox-header-first">
          <h3>{productBuyBoxData.sellerTitle}</h3>

          <button type="button">
            {productBuyBoxData.otherSellers}
          </button>
        </div>

        <div className="product-buybox-seller-main">
          <div className="product-buybox-seller-identity">
            <div className="product-buybox-seller-logo-box">
              {productBuyBoxData.sellerLogo ? (
                <img
                  src={productBuyBoxData.sellerLogo}
                  alt={productBuyBoxData.sellerLogoAlt}
                  className="product-buybox-seller-logo"
                />
              ) : (
                <span className="product-buybox-image-placeholder">
                  عکس
                </span>
              )}
            </div>

            <span className="product-buybox-seller-name">
              {productBuyBoxData.sellerName}
            </span>
          </div>
        </div>

        <div className="product-buybox-seller-info">
          {productBuyBoxSellerInfoItems.map((item) => (
            <span key={item.id} className={item.className}>
              {item.text}
            </span>
          ))}
        </div>

        <div className="product-buybox-divider"></div>

        <button type="button" className="product-buybox-cheaper-box">
          <FiInfo />
          <span>{productBuyBoxData.cheaperNotice}</span>
          <FiChevronLeft />
        </button>

        <div className="product-buybox-price-section">
          <div className="product-buybox-price-top">
            <span className="product-buybox-discount">
              {productBuyBoxData.discount}
            </span>

            <span className="product-buybox-old-price">
              {productBuyBoxData.oldPrice}
            </span>
          </div>

          <div className="product-buybox-price-main">
            <span>{productBuyBoxData.price}</span>
            <small>{productBuyBoxData.currency}</small>
          </div>
        </div>

        <button type="button" className="product-buybox-add-button">
          {productBuyBoxData.addToCartText}
        </button>

        <div className="product-buybox-guarantee">
          <FiShield />
          <span>{productBuyBoxData.guarantee}</span>
        </div>

        <div className="product-buybox-divider"></div>

        <div className="product-buybox-shipping-header">
          <span>روش‌ها و هزینه‌های ارسال</span>
          <FiChevronLeft />
        </div>

        <div className="product-buybox-shipping-list">
          {productBuyBoxShippingItems.map((item) => (
            <div className="product-buybox-shipping-item" key={item.id}>
              <span className={`product-buybox-shipping-icon ${item.colorClass}`}>
                {shippingIconMap[item.iconType]}
              </span>

              <span>{item.text}</span>
            </div>
          ))}
        </div>

        <div className="product-buybox-divider"></div>

        <div className="product-buybox-plus">
          <div className="product-buybox-plus-title">
            <PiStarFour />
            <span>{productBuyBoxPlusData.title}</span>
          </div>

          <div className="product-buybox-plus-text">
            <span className="product-buybox-plus-dot"></span>
            <span>{productBuyBoxPlusData.text}</span>
          </div>
        </div>

        <div className="product-buybox-divider"></div>

        <div className="product-buybox-club">
          <div className="product-buybox-club-logo-box">
            {productBuyBoxData.clubLogo ? (
              <img
                src={productBuyBoxData.clubLogo}
                alt={productBuyBoxData.clubLogoAlt}
                className="product-buybox-club-logo"
              />
            ) : (
              <span className="product-buybox-image-placeholder">
              </span>
            )}
          </div>

          <span>{productBuyBoxData.clubPoint}</span>

          <FiInfo />
        </div>
      </div>

      <button type="button" className="product-buybox-footer">
        <FiInfo />
        <span>{productBuyBoxFooterData.text}</span>
        <FiChevronLeft />
      </button>
    </aside>
  )
}

export default ProductBuyBox