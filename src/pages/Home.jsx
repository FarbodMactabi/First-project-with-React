import Story from "../components/Story/Story"
import Slider from "../components/Slider/Slider"
import ShortcutMenu from "../components/ShortcutMenu/ShortcutMenu"
import AmazingOffers from "../components/AmazingOffers/AmazingOffers"
import FourAds from "../components/Ads/FourAds"
import SupermarketAmazing from "../components/SupermarketAmazing/SupermarketAmazing"
import ShopByCategory from "../components/ShopByCategory/ShopByCategory"
import TwoAds from "../components/Ads/TwoAds"
import PopularBrands from "../components/PopularBrands/PopularBrands"
import SuggestedCategories01 from "../components/SuggestedCategories/SuggestedCategories01"
import BestSellingProducts01 from "../components/BestSellingProducts/BestSellingProducts01"
import SuggestedCategories02 from "../components/SuggestedCategories/SuggestedCategories02"
import DiscountedProducts from "../components/DiscountedProducts/DiscountedProducts"
import BestSellingProducts02 from "../components/BestSellingProducts/BestSellingProducts02"
import ReadablePosts from "../components/ReadablePosts/ReadablePosts"

import { fourAdsData01, fourAdsData02 , twoAdsData01 , twoAdsData02 } from "../data"



function Home() {
  return (
    <>
      <Story />
      <Slider />
      <ShortcutMenu />
      <AmazingOffers />
      <FourAds ads={fourAdsData01} />
      <SupermarketAmazing />
      <FourAds ads={fourAdsData02} />
      <ShopByCategory />
      <TwoAds ads={twoAdsData01} />
      <PopularBrands />
      <TwoAds ads={twoAdsData02} />
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