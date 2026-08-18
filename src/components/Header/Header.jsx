import "./Header.css"
import { Link } from "react-router-dom"
import { categories } from "../../data/categories"
import logoImage from "../../assets/images/full-horizontal.svg"
import { GiGoldBar } from "react-icons/gi"
import { BsBasket3, BsFire } from "react-icons/bs"
import {
  FiSearch,
  FiLogIn,
  FiShoppingCart,
  FiBell,
  FiZap,
  FiX,
} from "react-icons/fi"
import { HiBars3, HiOutlineMapPin } from "react-icons/hi2"
import { useEffect, useState } from "react"

function Header() {
  const [search, setSearch] = useState("")
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [isSearchFocused, setIsSearchFocused] = useState(false)
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false)
  const [activeCategoryId, setActiveCategoryId] = useState(categories[0].id)
  const [isHeaderBottomHidden, setIsHeaderBottomHidden] = useState(false)

  const activeCategory =
    categories.find((category) => category.id === activeCategoryId) || categories[0]

  const recentSearches = ["موبایل"]

  const popularSearches = [
    "آیفون ۱۶",
    "Ps5",
    "اپل واچ",
    "پنکه شارژی",
    "ایرپاد",
    "لپ تاپ",
  ]

  useEffect(() => {
    let lastScrollY = window.scrollY

    const handleScroll = () => {
      const currentScrollY = window.scrollY
      const scrollDifference = Math.abs(currentScrollY - lastScrollY)

      if (currentScrollY < 80) {
        setIsHeaderBottomHidden(false)
        lastScrollY = currentScrollY
        return
      }

      if (scrollDifference < 8) {
        return
      }

      if (currentScrollY > lastScrollY) {
        setIsHeaderBottomHidden(true)
      } else {
        setIsHeaderBottomHidden(false)
      }

      lastScrollY = currentScrollY
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <>
      <header
        className={
          isHeaderBottomHidden
            ? "site-header header-bottom-hidden"
            : "site-header"
        }
      >
        <div className="header-top">
          <div className="header-search-area">
            <Link className="logo" to="/">
              <img src={logoImage} alt="Digikala Logo" />
            </Link>

            <div className={`search-wrapper ${isSearchOpen ? "search-wrapper-open" : ""}`}>
              <div className={`search-box ${isSearchFocused ? "search-box-focused" : ""}`}>
                <FiSearch className="search-icon" />

                <input
                  type="text"
                  placeholder="جستجو"
                  value={search}
                  onFocus={() => {
                    setIsSearchFocused(true)
                    setIsSearchOpen(true)
                  }}
                  onBlur={() => setIsSearchFocused(false)}
                  onChange={(event) => setSearch(event.target.value)}
                />

                {search.length > 0 && (
                  <button
                    className="search-clear-btn"
                    type="button"
                    onMouseDown={(event) => event.preventDefault()}
                    onClick={() => setSearch("")}
                    aria-label="پاک کردن جستجو"
                  >
                    <FiX />
                  </button>
                )}
              </div>

              {isSearchOpen && (
                <div className="search-dropdown">
                  <div className="search-modal-section">
                    <div className="search-modal-title-row">
                      <h4>جستجوهای اخیر</h4>
                      <button type="button">پاک کردن</button>
                    </div>

                    <div className="search-chips">
                      {recentSearches.map((item) => (
                        <Link key={item} to="/search">
                        <button type="button" className="search-chip">
                          {item}
                        </button>
                        </Link>
                      ))}
                    </div>
                  </div>

                  <div className="search-modal-section">
                    <h4>جستجوهای پرطرفدار</h4>

                    <div className="search-chips">
                      {popularSearches.map((item) => (
                        <button key={item} type="button" className="search-chip">
                          {item}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="search-promo-card">
                    <div>
                      <strong>بفرمایید جام</strong>
                      <span>با دیجی‌کالا، هیجان خرید رو تجربه کن</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="header-actions">
            <a className="notification-btn" href="https://www.digikala.com/profile/notification/">
              <FiBell />
            </a>

            <a className="login-btn" href="https://www.digikala.com/users/login/?backUrl=/">
              <FiLogIn />
              <span>ورود | ثبت نام</span>
            </a>

            <a className="cart-btn" href="https://www.digikala.com/checkout/cart/">
              <FiShoppingCart />
            </a>
          </div>
        </div>

        <div className="header-bottom">
          <div className="right-section">
            <div
              className="categories"
              onMouseEnter={() => setIsMegaMenuOpen(true)}
              onMouseLeave={() => setIsMegaMenuOpen(false)}
            >
              <button
                className="category-trigger"
                type="button"
                aria-expanded={isMegaMenuOpen}
                aria-haspopup="true"
              >
                <HiBars3 />
                <span>دسته بندی کالاها</span>
              </button>

              {isMegaMenuOpen && <div className="mega-menu-backdrop"></div>}

              {isMegaMenuOpen && (
                <div className="mega-menu">
                  <div className="mega-menu-sidebar">
                    <ul>
                      {categories.map((category) => {
                        const Icon = category.icon

                        return (
                          <li
                            key={category.id}
                            className={category.id === activeCategoryId ? "active-category" : ""}
                            onMouseEnter={() => setActiveCategoryId(category.id)}
                          >
                            {Icon && <Icon />}
                            <span>{category.title}</span>
                          </li>
                        )
                      })}
                    </ul>
                  </div>

                  <div className="mega-menu-content">
                    <a className="mega-menu-all-link" href={activeCategory.allLink?.href || "#"}>
                      {activeCategory.allLink?.title || `همه محصولات ${activeCategory.title}`}
                      <span>›</span>
                    </a>

                    {activeCategory.sections && activeCategory.sections.length > 0 ? (
                      <div className="mega-menu-sections">
                        {activeCategory.sections.map((section) => (
                          <div className="mega-menu-section" key={section.id}>
                            <h4>{section.title}</h4>

                            <ul>
                              {section.links.map((link) => (
                                <li key={link.id}>
                                  <a href={link.href}>{link.title}</a>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="mega-menu-empty">
                        زیرمجموعه‌های این دسته در مرحله بعد اضافه می‌شوند.
                      </p>
                    )}
                  </div>
                </div>
              )}
            </div>

            <nav className="menu">
              <ul>
                <li className="divider"></li>

                <li>
                  <a href="#">
                    <FiZap />
                    <span>شگفت انگیزها</span>
                  </a>
                </li>

                <li>
                  <a href="#">
                    <BsBasket3 />
                    <span>سوپرمارکت</span>
                  </a>
                </li>

                <li>
                  <a href="#">
                    <GiGoldBar />
                    <span>طلا و نقره دیجیتال</span>
                  </a>
                </li>

                <li>
                  <a href="#">
                    <BsFire />
                    <span>پرفروش‌ترین‌ها</span>
                  </a>
                </li>

                <li className="divider"></li>

                <li>
                  <a href="#">
                    <span>سوالی دارید؟</span>
                  </a>
                </li>

                <li>
                  <a href="#">
                    <span>در دیجی‌کالا بفروشید!</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          <div className="left-section">
            <HiOutlineMapPin />

            <span>انتخاب آدرس</span>

            <div className="location-tooltip">
              انتخاب آدرس
            </div>
          </div>
        </div>
      </header>

      {isSearchOpen && (
        <div
          className="search-page-backdrop"
          onClick={() => setIsSearchOpen(false)}
        ></div>
      )}
    </>
  )
}

export default Header