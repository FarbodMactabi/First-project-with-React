import "./ProductGallery.css"
import {
  FiBarChart2,
  FiBell,
  FiHeart,
  FiList,
  FiShare2,
  FiColumns,
  FiInfo,
} from "react-icons/fi"

import {
  productGalleryActions,
  productGalleryImages,
  productGalleryMoreThumbnail,
} from "../../data/productDetails"

function ProductGallery() {
  const galleryIconMap = {
    heart: <FiHeart />,
    share: <FiShare2 />,
    bell: <FiBell />,
    chart: <FiBarChart2 />,
    compare: <FiColumns />,
    list: <FiList />,
  }

  const mainImage = productGalleryImages[0]

  return (
    <section className="product-gallery">
      <div className="product-gallery-main">
        <div className="product-gallery-actions">
          {productGalleryActions.map((action) => (
            <button
              className="product-gallery-action-button"
              type="button"
              key={action.id}
              aria-label={action.title}
            >
              {galleryIconMap[action.iconName]}

              <span className="product-gallery-action-tooltip">
                {action.title}
              </span>
            </button>
          ))}
        </div>

        <div className="product-gallery-main-image">
          <img src={mainImage.image} alt={mainImage.alt} />
        </div>
      </div>

      <div className="product-gallery-thumbnails">
        {productGalleryImages.map((item) => (
          <button
            key={item.id}
            type="button"
            className={"product-gallery-thumbnail"}
          >
            <img src={item.image} alt={item.alt} />
          </button>
        ))}

        <button
          type="button"
          className="product-gallery-thumbnail product-gallery-thumbnail-more"
        >
          <img
            src={productGalleryMoreThumbnail.image}
            alt={productGalleryMoreThumbnail.alt}
          />

          <span>...</span>
        </button>
      </div>

      <div className="product-gallery-footer">
        <div className="product-gallery-report">
          <FiInfo />
          <span>گزارش مشخصات کالا یا موارد قانونی</span>
        </div>

        <span className="product-gallery-code">
          DKP-21294091
        </span>
      </div>
    </section>
  )
}

export default ProductGallery