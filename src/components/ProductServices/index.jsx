import "@/styles/ProductServices.css"

import { productServicesData } from "@/data"

function ProductServices() {
  return (
    <section className="product-services">
      {productServicesData.map((service) => (
        <div className="product-services-item" key={service.id}>
          <div className="product-services-image-box">
            {service.image ? (
              <img
                src={service.image}
                alt={service.imageAlt}
                className="product-services-image"
              />
            ) : (
              <span className="product-services-image-placeholder">
                عکس
              </span>
            )}
          </div>

          <span className="product-services-title">
            {service.title}
          </span>
        </div>
      ))}
    </section>
  )
}

export default ProductServices