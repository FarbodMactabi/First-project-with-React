import Story from "../components/Story/Story"
import Slider from "../components/Slider/Slider"
import ShortcutMenu from "../components/ShortcutMenu/ShortcutMenu"
import AmazingOffers from "../components/AmazingOffers/AmazingOffers"
import FourAds from "../components/Ads/FourAds"
import SupermarketAmazing from "../components/SupermarketAmazing/SupermarketAmazing"
import ShopByCategory from "../components/ShopByCategory/ShopByCategory"
import TwoAds from "../components/Ads/TwoAds"
import PopularBrands from "../components/PopularBrands/PopularBrands"
import SuggestedCategories from "../components/SuggestedCategories/SuggestedCategories"
import BestSellingProducts from "../components/BestSellingProducts/BestSellingProducts"
import DiscountedProducts from "../components/DiscountedProducts/DiscountedProducts"
import ReadablePosts from "../components/ReadablePosts/ReadablePosts"

import { fourAdsData01, fourAdsData02 , twoAdsData01 , twoAdsData02 , bestSellingProducts01, bestSellingProducts02, suggestedCategories01, suggestedCategories02 } from "../data"



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
      <SuggestedCategories suggestion={suggestedCategories01} />
      <BestSellingProducts title="پرفروش‌ترین کالاها" products={bestSellingProducts01} />
      <SuggestedCategories suggestion={suggestedCategories02} />
      <DiscountedProducts />
      <BestSellingProducts title="داغ‌ترین چند ساعت گذشته" products={bestSellingProducts02} />
      <ReadablePosts />
    </>
  )
}

export default Home