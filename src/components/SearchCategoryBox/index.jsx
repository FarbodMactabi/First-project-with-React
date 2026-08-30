import "../../styles/SearchCategoryBox.css"
import { BsMegaphone } from "react-icons/bs"

function SearchCategoryBox() {
  const sponsoredProducts = [
    {
      id: 1,
      title: "گوشی موبایل میدسل مدل M230 دو سیم کارت ظرفیت 32 مگابایت و رم 32 مگابایت - به همراه هدیه سیم‌کارت آرین تل با 230 دقیقه مکالمه و 230 عدد پیامک رایگان",
      price: "۲,۷۹۹,۰۰۰",
      image: new URL("../../assets/images/searchsponsored-01.webp", import.meta.url).href,
    },
    {
      id: 2,
      title: "گوشی موبایل میدسل مدل M107 دو سیم کارت ظرفیت 32 مگابایت و رم 32 مگابایت",
      price: "۱,۹۱۹,۰۰۰",
      image: new URL("../../assets/images/searchsponsored-02.webp", import.meta.url).href,
    },
    {
      id: 3,
      title: "گوشی موبایل میدسل مدل M215  دوسیم کارت ظرفیت 32 مگابایت و رم 32 مگابایت",
      price: "۳,۳۹۹,۰۰۰",
      image: new URL("../../assets/images/searchsponsored-03.webp", import.meta.url).href,
    },
    {
      id: 4,
      title: "گوشی موبایل میدسل مدل M5310 دو سیم‌کارت ظرفیت 32 مگابایت و رم 32 مگابایت",
      price: "۴,۶۴۹,۰۰۰",
      image: new URL("../../assets/images/searchsponsored-04.webp", import.meta.url).href,
    },
  ]

  const brandLogo = new URL("../../assets/images/searchsponsored-logo.webp", import.meta.url).href

  return (
    <section className="search-sponsored-section">
      <div className="search-sponsored-container">

        <div className="search-sponsored-brand">
          <div className="search-sponsored-label">
            <BsMegaphone />
            <span>سفارشی</span>
          </div>

          <div className="search-sponsored-logo">
            <img src={brandLogo} alt="برند تبلیغاتی" />
          </div>

          <p>میدسل</p>
        </div>

        <div className="search-sponsored-products">
          {sponsoredProducts.map((product) => (
            <div className="search-sponsored-product" key={product.id}>
              <div className="search-sponsored-product-image">
                <img src={product.image} alt={product.title} />
              </div>

              <h3>{product.title}</h3>

              <div className="search-sponsored-price">
                <span>{product.price}</span>
                <small>تومان</small>
              </div>
            </div>
          ))}
        </div>

        <div className="search-sponsored-empty"></div>

      </div>
    </section>
  )
}

export default SearchCategoryBox