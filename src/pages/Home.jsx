import Story from "../components/Story/Story"
import Slider from "../components/Slider/Slider"
import ShortcutMenu from "../components/ShortcutMenu/ShortcutMenu"
import AmazingOffers from "../components/AmazingOffers/AmazingOffers"
import FourAds01 from "../components/Ads/FourAds01"
import SupermarketAmazing from "../components/SupermarketAmazing/SupermarketAmazing"
import FourAds02 from "../components/Ads/FourAds02"
import ShopByCategory from "../components/ShopByCategory/ShopByCategory"
import TwoAds01 from "../components/Ads/TwoAds01"
import PopularBrands from "../components/PopularBrands/PopularBrands"
import TwoAds02 from "../components/Ads/TwoAds02"
import SuggestedCategories01 from "../components/SuggestedCategories/SuggestedCategories01"
import BestSellingProducts01 from "../components/BestSellingProducts/BestSellingProducts01"
import SuggestedCategories02 from "../components/SuggestedCategories/SuggestedCategories02"
import DiscountedProducts from "../components/DiscountedProducts/DiscountedProducts"
import BestSellingProducts02 from "../components/BestSellingProducts/BestSellingProducts02"
import ReadablePosts from "../components/ReadablePosts/ReadablePosts"



function Home() {
  return (
    <>
      <Story />
      <Slider />
      <ShortcutMenu />
      <AmazingOffers />
      <FourAds01 />
      <SupermarketAmazing />
      <FourAds02 />
      <ShopByCategory />
      <TwoAds01 />
      <PopularBrands />
      <TwoAds02 />
      <SuggestedCategories01 />
      <BestSellingProducts01 />
      <SuggestedCategories02 />
      <DiscountedProducts />
      <BestSellingProducts02 />
      <ReadablePosts />
    </>
  )
}

export default Home