import "./ProductInfo.css"
import { AiFillStar } from "react-icons/ai"
import { HiSparkles } from "react-icons/hi2"
import { PiStarFour } from "react-icons/pi"
import { TbLetterP } from "react-icons/tb"
import { FiChevronLeft, FiInfo, FiCheck } from "react-icons/fi"
import { deliveryBoxData, insuranceData, installmentBoxData, plusBoxData, productColors, productFeaturesData, productInfoData, productInfoMetaItems, returnPolicyData } from "../../data"

function ProductInfo() {
  const activeColor = productColors[0]

  const metaIconMap = {
    sparkles: <HiSparkles />,
    chevron: <FiChevronLeft />,
  }

  const infoSections = [
    {
      id: 1,
      type: "insurance",
      title: "بیمه",
    },
    {
      id: 2,
      type: "features",
      title: "ویژگی‌ها",
    },
  ]

  return (
    <section className="product-info">
      <div className="product-info-breadcrumb-mini">
        <span>{productInfoData.brand}</span>
        <span className="product-info-breadcrumb">/</span>
        <span>{productInfoData.category}</span>
      </div>

      <h1 className="product-info-title">
        {productInfoData.title}
      </h1>

      <div className="product-info-english">
        {productInfoData.englishTitle}
      </div>

      <div className="product-info-divider"></div>

      <div className="product-info-meta-row">
        <div className="product-info-rating-box">
          <AiFillStar />
          <span>{productInfoData.rating}</span>
          <span className="product-info-meta-light">
            ({productInfoData.buyersCount} امتیاز)
          </span>
        </div>

        {productInfoMetaItems.map((item) => (
          <button
            key={item.id}
            type="button"
            className={
              item.className
                ? `product-info-chip ${item.className}`
                : "product-info-chip"
            }
          >
            {item.iconName === "sparkles" && metaIconMap[item.iconName]}

            <span>{item.title}</span>

            {item.iconName === "chevron" && metaIconMap[item.iconName]}
          </button>
        ))}
      </div>

      <div className="product-info-color-section">
        <div className="product-info-color-title">
          <span>رنگ:</span>
          <strong>{activeColor.title}</strong>
          <span
            className="product-info-color"
            style={{ backgroundColor: activeColor.colorCode }}
          ></span>
        </div>

        <div className="product-info-colors">
          {productColors.map((color) => (
            <button
              key={color.id}
              type="button"
              className={"product-info-color-btn"}
              style={{ border: color.border }}
              aria-label={color.title}
            >
              <span
                className="product-info-color-circle"
                style={{ backgroundColor: color.colorCode}}
              ></span>

              {color.active && (
                <span className="product-info-color-check"><FiCheck /></span>
              )}
            </button>
          ))}
        </div>
      </div>

      <div className="product-info-delivery-box">
        {deliveryBoxData.image ? (
          <img
            src={deliveryBoxData.image}
            alt={deliveryBoxData.imageAlt}
            className="product-info-delivery-image"
          />
        ) : (
          <div className="product-info-delivery-image-placeholder">
            عکس
          </div>
        )}

        <span>{deliveryBoxData.text}</span>
      </div>

      {infoSections.map((section) => {
        if (section.type === "insurance") {
          return (
            <div className="product-info-section" key={section.id}>
              <div className="product-info-section-title">
                {section.title}
              </div>

              <div className="product-info-insurance-box">
                <div className="product-info-insurance-right">
                  <div className="product-info-insurance-checkbox"></div>
                </div>

                <div className="product-info-insurance-center">
                  <span className="product-info-insurance-title">
                    {insuranceData.title}
                  </span>

                  <div className="product-info-insurance-price-row">
                    <span className="product-info-insurance-discount">
                      {insuranceData.discount}
                    </span>

                    <span className="product-info-insurance-old-price">
                      {insuranceData.oldPrice}
                    </span>

                    <span className="product-info-insurance-price">
                      {insuranceData.price} تومان
                    </span>
                  </div>
                </div>

                <div className="product-info-insurance-left">
                  <button type="button">
                    {insuranceData.details}
                    <FiChevronLeft />
                  </button>
                </div>
              </div>
            </div>
          )
        }

        if (section.type === "features") {
          return (
            <div className="product-info-section" key={section.id}>
              <div className="product-info-section-title">
                {section.title}
              </div>

              <div className="product-info-features-wrap">
                {productFeaturesData.map((item) => (
                  <div
                    key={item.id}
                    className="product-info-feature-card"
                  >
                    <span className="product-info-feature-label">
                      {item.label}
                    </span>

                    <strong className="product-info-feature-value">
                      {item.value}
                    </strong>
                  </div>
                ))}
              </div>

              <div className="product-info-all-features-row">
                <span className="product-info-all-features-line"></span>

                <button
                  type="button"
                  className="product-info-all-features-btn"
                >
                  مشاهده همه ویژگی‌ها
                  <FiChevronLeft />
                </button>

                <span className="product-info-all-features-line"></span>
              </div>
            </div>
          )
        }

        return null
      })}

      <div className="product-info-return-row">
        <FiInfo />
        <p>{returnPolicyData.text}</p>
      </div>

      <div className="product-info-plus-box">
        <div className="product-info-plus-content">
          <h3><PiStarFour/>{plusBoxData.title}</h3>

          <ul>
            {plusBoxData.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <button type="button" className="product-info-link-btn">
            {plusBoxData.linkText}
            <FiChevronLeft />
          </button>
        </div>

        <div className="product-info-plus-image-placeholder">
            <img src={plusBoxData.image} alt="none img" />
        </div>
      </div>

      <div className="product-info-installment-box">
        <div className="product-info-installment-header">
          <span><TbLetterP/>{installmentBoxData.title}</span>
        </div>

        <ul className="product-info-installment-list">
          <li>{installmentBoxData.priceText}</li>
          <li>{installmentBoxData.creditText}</li>
        </ul>
      </div>
    </section>
  )
}

export default ProductInfo