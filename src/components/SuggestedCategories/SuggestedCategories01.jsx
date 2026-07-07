import "./SuggestedCategories.css"
import { suggestedCategories01 } from "../../data/suggestedCategories"

function SuggestedCategories() {
  return (
    <section className="suggested-section">

      <div className="suggested-container">

        {suggestedCategories01.map((category) => (
          <div className="suggested-card" key={category.id}>

            <div className="suggested-header">
              <h3>{category.title}</h3>
              <p>بر اساس سلیقه شما</p>
            </div>

            <div className="suggested-products">

              {category.products.map((product) => (
                <div className="suggested-product" key={product.id}>
                  <img src={product.image} alt={category.title} />
                </div>
              ))}

            </div>

            <button className="suggested-more" type="button">
              مشاهده
              <span>›</span>
            </button>

          </div>
        ))}

      </div>

    </section>
  )
}

export default SuggestedCategories