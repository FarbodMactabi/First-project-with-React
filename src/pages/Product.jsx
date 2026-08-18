import "./Product.css"

import ProductBreadcrumb from "../components/ProductBreadcrumb/ProductBreadcrumb"
import ProductGallery from "../components/ProductGallery/ProductGallery"
import ProductInfo from "../components/ProductInfo/ProductInfo"
import ProductBuyBox from "../components/ProductBuyBox/ProductBuyBox"
import ProductServices from "../components/ProductServices/ProductServices"
import ProductSellers from "../components/ProductSellers/ProductSellers"
import ProductSimilarProducts from "../components/ProductSimilarProducts/ProductSimilarProducts"
import ProductSections from "../components/ProductSections/ProductSections"

function Product() {
  return (
    <main className="product-page">
      <div className="product-container">
        <ProductBreadcrumb />

        <section className="product-main-layout">
          <div className="product-gallery-column">
            <ProductGallery />
          </div>

          <div className="product-info-column">
            <ProductInfo />
          </div>

          <div className="product-buybox-column">
            <ProductBuyBox />
          </div>
        </section>
            <ProductServices />
            <ProductSellers />
            <ProductSimilarProducts />
            <ProductSections />
      </div>
    </main>
  )
}

export default Product