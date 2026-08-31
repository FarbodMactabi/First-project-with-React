import "@/styles/Product.css"

import ProductBreadcrumb from "@/components/ProductBreadcrumb"
import ProductGallery from "@/components/ProductGallery"
import ProductInfo from "@/components/ProductInfo"
import ProductBuyBox from "@/components/ProductBuyBox"
import ProductServices from "@/components/ProductServices"
import ProductSellers from "@/components/ProductSellers"
import ProductSimilarProducts from "@/components/ProductSimilarProducts"
import ProductSections from "@/components/ProductSections"

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