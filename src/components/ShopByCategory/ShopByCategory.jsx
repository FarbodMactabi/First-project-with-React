import "./ShopByCategory.css"
import { shopCategories } from "../../data/shopCategories"

function ShopByCategory() {
  return (
    <section className="shop-category-section">

      <div className="shop-category-container">

        <h2 className="shop-category-title">
          خرید بر اساس دسته‌بندی
        </h2>

        <div className="shop-category-list">

          {shopCategories.map((category) => (
            <div className="shop-category-card" key={category.id}>

              <div className="shop-category-image">
                <img src={category.image} alt={category.title} />
              </div>

              <p className="shop-category-name">
                {category.title}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  )
}

export default ShopByCategory