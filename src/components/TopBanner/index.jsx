import "../../styles/TopBanner.css"
import bannerImage from "../../assets/images/banner.gif"

function TopBanner() {
  return (
    <a
      className="top-banner"
      href="https://www.digikala.com/landing/mashadleather/?&promo_name=%D9%BE%D8%A7%D8%B1%D8%AA%D9%86%D8%B1%D8%B4%DB%8C%D9%BE-%DA%86%D8%B1%D9%85+%D9%85%D8%B4%D9%87%D8%AF-%D8%AA%D8%A7%D9%BE+%D8%A8%D9%86%D8%B1&promo_position=all_mega_menu_top&promo_creative=209292&bCode=209292"
    >
      <img src={bannerImage} alt="banner" />
    </a>
  )
}

export default TopBanner