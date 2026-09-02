import "@/styles/ProductBreadcrumb.css"
import { breadcrumbItems } from "@/data"
import { PiStorefront } from "react-icons/pi"

function ProductBreadcrumb() {

  return (
    <nav className="product-breadcrumb">
      <div className="product-breadcrumb-right">
      {breadcrumbItems.map((item, index) => (
        <div className="product-breadcrumb-part" key={item.id}>
          <span className="product-breadcrumb-item">
            {item.title}
          </span>

          {index !== breadcrumbItems.length - 1 && (
            <span className="product-breadcrumb-separator">
              /
            </span>
          )}
        </div>
      ))}
      </div>
        <div className="product-breadcrumb-left">
          <span>فروش در دیجی‌کالا</span>
          <PiStorefront/>        
        </div>
    </nav>
  )
}

export default ProductBreadcrumb