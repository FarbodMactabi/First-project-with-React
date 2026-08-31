import Story from "@/components/Story"
import Slider from "@/components/Slider"
import ShortcutMenu from "@/components/ShortcutMenu"
import AmazingOffers from "@/components/AmazingOffers"
import FourAds from "@/components/FourAds"
import SupermarketAmazing from "@/components/SupermarketAmazing"
import ShopByCategory from "@/components/ShopByCategory"
import TwoAds from "@/components/TwoAds"
import PopularBrands from "@/components/PopularBrands"
import SuggestedCategories from "@/components/SuggestedCategories"
import BestSellingProducts from "@/components/BestSellingProducts"
import DiscountedProducts from "@/components/DiscountedProducts"
import ReadablePosts from "@/components/ReadablePosts"

import 
        { 
         fourAdsData01,
         fourAdsData02, 
         twoAdsData01, 
         twoAdsData02, 
         bestSellingProducts01, 
         bestSellingProducts02, 
         suggestedCategories01, 
         suggestedCategories02 
        } 
        from "@/data"



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