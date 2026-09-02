export const productGalleryImages = [
  {
    id: 1,
    image: new URL("@/assets/images/productgallery-01.webp", import.meta.url).href,
    alt: "گوشی موبایل آنر مدل X9d رنگ قرمز",
  },
  {
    id: 2,
    image: new URL("@/assets/images/productgallery-02.webp", import.meta.url).href,
    alt: "نمای پشت گوشی آنر X9d رنگ قرمز",
  },
  {
    id: 3,
    image: new URL("@/assets/images/productgallery-03.webp", import.meta.url).href,
    alt: "گوشی آنر X9d رنگ مشکی",
  },
  {
    id: 4,
    image: new URL("@/assets/images/productgallery-04.webp", import.meta.url).href,
    alt: "گوشی آنر X9d رنگ کرم",
  },
  {
    id: 5,
    image: new URL("@/assets/images/productgallery-05.webp", import.meta.url).href,
    alt: "گوشی آنر X9d رنگ سبز",
  },
]

export const productGalleryMoreThumbnail = {
  id: "more",
  image: new URL("@/assets/images/productgallery-06.webp", import.meta.url).href,
  alt: "مشاهده تصاویر بیشتر",
}

export const productGalleryActions = [
  {
    id: 1,
    title: "افزودن به علاقه‌مندی",
    iconName: "heart",
  },
  {
    id: 2,
    title: "اشتراک‌گذاری کالا",
    iconName: "share",
  },
  {
    id: 3,
    title: "اطلاع‌رسانی شگفت‌انگیز شدن",
    iconName: "bell",
  },
  {
    id: 4,
    title: "نمودار تغییرات قیمت",
    iconName: "chart",
  },
  {
    id: 5,
    title: "مقایسه با کالاهای مشابه",
    iconName: "compare",
  },
  {
    id: 6,
    title: "افزودن به لیست",
    iconName: "list",
  },
]

export const productInfoData = {
  brand: "آنر",
  category: "گوشی موبایل آنر",
  title:
    "گوشی موبایل آنر مدل X9d دو سیم کارت ظرفیت 256 گیگابایت و رم 12 گیگابایت",
  englishTitle: "Honor X9d Dual SIM Storage 256GB And RAM 12GB",
  rating: "۴.۷",
  buyersCount: "۱۵۷",
}

export const productInfoMetaItems = [
  {
    id: 1,
    type: "summary",
    title: "خلاصه دیدگاه‌ها",
    iconName: "sparkles",
    className: "product-info-chip-purple",
  },
  {
    id: 2,
    type: "comments",
    title: "۲۱۱ دیدگاه",
    iconName: "chevron",
    className: "",
  },
  {
    id: 3,
    type: "questions",
    title: "۴۳۹ پرسش",
    iconName: "chevron",
    className: "",
  },
]

export const productColors = [
  {
    id: 1,
    title: "طلایی",
    colorCode: "#d6ad39",
    border: "5px solid #1672dd",
    active: true,
  },
  {
    id: 2,
    title: "سبز",
    colorCode: "#018d07",
    border: null,
    active: false,
  },
  {
    id: 3,
    title: "مشکی",
    colorCode: "#000000",
    border: null,
    active: false,
  },
  {
    id: 4,
    title: "قهوه‌ای",
    colorCode: "#5a261f",
    border: null,
    active: false,
  },
]

export const deliveryBoxData = {
  text: "تحویل امروز با ارسال سریع دیجی‌کالا",
  image: new URL("@/assets/images/fastsend.png", import.meta.url).href,
  imageAlt: "ارسال سریع دیجی‌کالا",
}

export const insuranceData = {
  title: "بیمه تجهیزات دیجیتال - بیمه سامان",
  price: "۱,۴۶۹,۶۰۰",
  oldPrice: "۱,۴۸۹,۵۰۰",
  discount: "۵۰٪",
  details: "جزئیات",
}

export const productFeaturesData = [
  {
    id: 1,
    label: "فناوری صفحه نمایش",
    value: "AMOLED",
  },
  {
    id: 2,
    label: "نسخه سیستم عامل",
    value: "Android 15",
  },
  {
    id: 3,
    label: "رزولوشن دوربین اصلی",
    value: "108 مگاپیکسل",
  },
  {
    id: 4,
    label: "اندازه",
    value: "6.79",
  },
]

export const returnPolicyData = {
  text: "امکان برگشت کالا در گروه موبایل با دلیل انصراف از خرید تنها در صورتی مورد قبول است که پلمپ کالا باز نشده باشد. تمام گوشی‌های دیجی‌کالا رجیستری دارند و در صورت وجود مشکل رجیستری می‌توانید بعد از مهلت قانونی ۳۰ روزه گوشی خریداری‌شده را مرجوع کنید.",
}

export const plusBoxData = {
  title: "ارسال رایگان سفارش‌ها برای اعضای پلاس",
  image: new URL("@/assets/images/free-delivery.svg", import.meta.url).href,
  items: [
    "۴ ارسال رایگان دیجیکالا",
    "۲ ارسال سوپرمارکت",
    "۴ ارسال رایگان ۴۵ دقیقه‌ای",
    "پشتیبانی اختصاصی",
    "ارسال سریع و رایگان دیجی‌کالا (فقط تهران و کرج)",
  ],
  linkText: "خرید اشتراک",
}

export const installmentBoxData = {
  title: "خرید این کالا با تسهیلات دیجی‌پی",
  priceText: "فقط با ماهی ۲,۴۰۷,۵۰۰ تومان (۱۲ ماهه)",
  creditText: "اعتبار پیشنهادی برای خرید: ۱۰۰,۰۰۰,۰۰۰ تومان",
}

export const productBuyBoxData = {
  sellerTitle: "فروشنده",
  otherSellers: "۳ فروشنده دیگر",

  sellerName: "دیجی‌کالا",
  sellerLogo: new URL("@/assets/images/footerlogo2.webp", import.meta.url).href,
  sellerLogoAlt: "لوگوی فروشنده",

  sellerRate: "۱۰۰٪ رضایت از کالا",
  sellerPerformance: "عملکرد عالی",

  cheaperNotice: "این کالا را ۳۸۷,۵۰۰ تومان ارزان‌تر بخرید",

  discount: "۳٪",
  oldPrice: "۸۹,۵۹۰,۰۰۰",
  price: "۸۶,۳۶۸,۲۰۰",
  currency: "تومان",

  addToCartText: "افزودن به سبد خرید",

  guarantee:
    "گارانتی ۱۸ ماهه مدیا پردازش + بیمه ۱۲ ماهه سرقت، شکستگی و آب خوردگی",

  clubPoint: "۱۵۰ امتیاز دیجی‌کلاب",
  clubLogo: new URL("@/assets/images/club-point.svg", import.meta.url).href,
  clubLogoAlt: "لوگوی دیجی‌کلاب",
}

export const productBuyBoxSellerInfoItems = [
  {
    id: 1,
    text: "۱۰۰٪ رضایت از کالا",
    className: "product-buybox-seller-rate",
  },
  {
    id: 2,
    text: "|",
    className: "product-buybox-seller-separator",
  },
  {
    id: 3,
    text: "عملکرد عالی",
    className: "product-buybox-seller-performance",
  },
]

export const productBuyBoxShippingItems = [
  {
    id: 1,
    text: "توسط دیجی‌کالا • وابسته به سبد",
    iconType: "truck",
    colorClass: "product-buybox-shipping-red",
  },
  {
    id: 2,
    text: "ارسال سریع دیجی‌کالا • وابسته به سبد",
    iconType: "fast",
    colorClass: "product-buybox-shipping-blue",
  },
]

export const productBuyBoxPlusData = {
  title: "ویژه اعضای پلاس",
  text: "ارسال سریع و رایگان دیجی‌کالا (فقط تهران و کرج)",
}

export const productBuyBoxFooterData = {
  text: "فرآیند قیمت‌گذاری و نظارت بر قیمت",
}

export const productServicesData = [
  {
    id: 1,
    title: "امکان تحویل اکسپرس",
    image: new URL("@/assets/images/express-delivery.svg", import.meta.url).href,
    imageAlt: "تحویل اکسپرس",
  },
  {
    id: 2,
    title: "۲۴ ساعته، ۷ روز هفته",
    image: new URL("@/assets/images/support.svg", import.meta.url).href,
    imageAlt: "پشتیبانی ۲۴ ساعته",
  },
  {
    id: 3,
    title: "امکان پرداخت در محل",
    image: new URL("@/assets/images/cash-on-delivery.svg", import.meta.url).href,
    imageAlt: "پرداخت در محل",
  },
  {
    id: 4,
    title: "هفت روز ضمانت بازگشت کالا",
    image: new URL("@/assets/images/days-return.svg", import.meta.url).href,
    imageAlt: "ضمانت بازگشت کالا",
  },
  {
    id: 5,
    title: "ضمانت اصل بودن کالا",
    image: new URL("@/assets/images/original-products.svg", import.meta.url).href,
    imageAlt: "ضمانت اصل بودن کالا",
  },
]

export const productSellersSectionData = {
  title: "فروشندگان این کالا",
}

export const productSellersData = [
  {
    id: 1,
    seller: {
      name: "دیجی‌کالا",
      logoType: "image",
      logo: new URL("@/assets/images/footerlogo2.webp", import.meta.url).href,
      logoAlt: "لوگوی دیجی‌کالا",
      rate: "۹۳.۴٪ رضایت از کالا",
      performance: "عملکرد عالی",
      selected: false,
    },
    delivery: {
      title: "ارسال دیجی‌کالا",
      description: "ارسال سریع دیجی‌کالا (تهران و کرج)",
      iconType: "truck",
    },
    warranty: {
      title: "گارانتی ۱۸ ماهه مدیا پردازش + بیمه ۱۲ ماهه سرقت، شکستگی و آب خوردگی",
      iconType: "shield",
    },
    plus: {
      active: true,
      title: "خدمات پلاس",
      description: "ارسال سریع برای شهر تهران و کرج (رایگان)",
    },
    price: {
      discount: "۳٪",
      oldPrice: "۹۰,۲۴۸,۰۰۰",
      currentPrice: "۸۷,۵۶۰,۰۰۰",
      currency: "تومان",
    },
    actionText: "افزودن به سبد خرید",
    highlight: false,
  },
  {
    id: 2,
    seller: {
      name: "فروشگاه رویال مال دیجی‌کالا",
      logoType: "store",
      logo: "",
      logoAlt: "لوگوی فروشگاه رویال مال دیجی‌کالا",
      rate: null,
      performance: "عملکرد عالی",
      selected: true,
    },
    delivery: {
      title: "ارسال فروشنده",
      description: "",
      iconType: "seller",
    },
    warranty: {
      title: "گارانتی ۱۸ ماهه شرکتی فروشگاه حضوری",
      iconType: "shield",
    },
    plus: {
      active: false,
      title: "",
      description: "",
    },
    price: {
      discount: "",
      oldPrice: "",
      currentPrice: "۸۷,۰۰۰,۰۰۰",
      currency: "تومان",
    },
    actionText: "افزودن به سبد خرید",
    highlight: true,
  },
  {
    id: 3,
    seller: {
      name: "بانی نو",
      logoType: "store",
      logo: "",
      logoAlt: "لوگوی بانی نو",
      rate: null,
      performance: "عملکرد عالی",
      selected: true,
    },
    delivery: {
      title: "ارسال دیجی‌کالا",
      description: "ارسال سریع دیجی‌کالا (تهران و کرج)",
      iconType: "truck",
    },
    warranty: {
      title: "گارانتی ۱۸ ماهه مدیاجی",
      iconType: "shield",
    },
    plus: {
      active: true,
      title: "خدمات پلاس",
      description: "ارسال سریع برای شهر تهران و کرج (رایگان)",
    },
    price: {
      discount: "",
      oldPrice: "",
      currentPrice: "۸۶,۰۰۰,۰۰۰",
      currency: "تومان",
    },
    actionText: "افزودن به سبد خرید",
    highlight: false,
  },
  {
    id: 4,
    seller: {
      name: "نامداران پارس",
      logoType: "store",
      logo: "",
      logoAlt: "لوگوی نامداران پارس",
      rate: null,
      performance: "عملکرد عالی",
      selected: false,
    },
    delivery: {
      title: "ارسال دیجی‌کالا",
      description: "ارسال سریع دیجی‌کالا (تهران و کرج)",
      iconType: "truck",
    },
    warranty: {
      title: "گارانتی ۱۸ ماهه مدیا پردازش + بیمه ۱۲ ماهه سرقت، شکستگی و آب خوردگی",
      iconType: "shield",
    },
    plus: {
      active: true,
      title: "خدمات پلاس",
      description: "ارسال سریع برای شهر تهران و کرج (رایگان)",
    },
    price: {
      discount: "",
      oldPrice: "",
      currentPrice: "۸۹,۹۹۰,۰۰۰",
      currency: "تومان",
    },
    actionText: "افزودن به سبد خرید",
    highlight: true,
  },
]

export const productSimilarSectionData = {
  title: "کالاهای مشابه",
}

export const productSimilarProductsData = [
  {
    id: 1,
    title: "گوشی موبایل سامسونگ مدل Galaxy S26 Ultra دو سیم‌کارت ظرفیت 256 گیگابایت و رم 12 گیگابایت - ویتنام",
    image: new URL("@/assets/images/searchproduct-01.webp", import.meta.url).href,
    badgeType: "amazing",
    rating: "۴.۵",
    statusType: "digikala-fast",
    price: "۲۹۳,۶۹۹,۰۰۰",
    oldPrice: "۳۰۷,۷۹۳,۸۰۰",
    discount: "۵٪",
  },

  {
    id: 2,
    title: "گوشی موبایل وکال مدل V2 Pro 5G دو سیم‌کارت ظرفیت 128 گیگابایت و رم 4 گیگابایت  ",
    image: new URL("@/assets/images/searchproduct-02.webp", import.meta.url).href,
    badgeType: null,
    rating: "۳.۴",
    statusType: "last-one",
    price: "۲۲,۳۹۹,۰۰۰",
    oldPrice: null,
    discount: null,
  },

  {
    id: 3,
    title: "گوشی موبایل شیائومی مدل Redmi 15 4G دو سیم کارت ظرفیت 256 گیگابایت و رم 8 گیگابایت ",
    image: new URL("@/assets/images/searchproduct-03.webp", import.meta.url).href,
    badgeType: "special",
    rating: "۴.۴",
    statusType: "seller-3h",
    price: "۳۳,۴۲۹,۴۰۰",
    oldPrice: "۳۵,۱۸۸,۸۰۰",
    discount: "۵٪",
  },

  {
    id: 4,
    title: "گوشی موبایل ریلمی مدل Plus 12 ظرفیت 512 گیگابایت و رم 12 گیگابایت",
    image: new URL("@/assets/images/searchproduct-04.webp", import.meta.url).href,
    badgeType: "amazing",
    rating: "۴.۵",
    statusType: "last-one",
    price: "۵۲,۸۹۹,۰۰۰",
    oldPrice: "۵۳,۹۹۹,۰۰۰",
    discount: "۲٪",
  },

  {
    id: 5,
    title: "گوشی موبایل شیائومی مدل Redmi Note 14s دو سیم کارت ظرفیت 512 گیگابایت و رم 12 گیگابایت",
    image: new URL("@/assets/images/searchproduct-05.webp", import.meta.url).href,
    badgeType: "special",
    rating: "۴.۴",
    statusType: "digikala-fast",
    price: "۵۲,۳۸۴,۷۰۰",
    oldPrice: "۵۵,۱۴۱,۷۰۰",
    discount: "۵٪",
  },

  {
    id: 6,
    title: "گوشی موبایل هانوفر مدل V5 Pro دو سیم کارت ظرفیت 32 مگابایت و رم 32 مگابایت",
    image: new URL("@/assets/images/searchproduct-06.webp", import.meta.url).href,
    badgeType: null,
    rating: "۳.۳",
    statusType: "seller-3h",
    price: "۴,۱۸۰,۰۰۰",
    oldPrice: null,
    discount: null,
  },

  {
    id: 7,
    title: "گوشی موبایل سامسونگ مدل Galaxy S25 Ultra دو سیم کارت ظرفیت 512 گیگابایت و رم 12 گیگابایت - پک ویتنام",
    image: new URL("@/assets/images/searchproduct-07.webp", import.meta.url).href,
    badgeType: "special",
    rating: "۴.۶",
    statusType: "last-one",
    price: "۳۳۷,۰۸۴,۳۰۰",
    oldPrice: "۳۴۲,۱۸۶,۴۰۰",
    discount: "۱٪",
  },

  {
    id: 8,
    title: "گوشی موبایل سامسونگ مدل Galaxy A36 دو سیم کارت ظرفیت 256 گیگابایت و رم 8 گیگابایت - ویتنام",
    image: new URL("@/assets/images/searchproduct-08.webp", import.meta.url).href,
    badgeType: null,
    rating: "۴.۵",
    statusType: "digikala-fast",
    price: "۶۳,۰۰۰,۰۰۰",
    oldPrice: null,
    discount: null,
  },

  {
    id: 9,
    title: "گوشی موبایل ریلمی مدل C71 دو سیم کارت ظرفیت 256 گیگابایت و رم 8 گیگابایت",
    image: new URL("@/assets/images/searchproduct-09.webp", import.meta.url).href,
    badgeType: "amazing",
    rating: "۴.۳",
    statusType: "seller-3h",
    price: "۲۸,۴۹۹,۰۰۰",
    oldPrice: "۲۸,۹۹۰,۰۰۰",
    discount: "۲٪",
  },

  {
    id: 10,
    title: "گوشی موبایل سامسونگ مدل Galaxy S26 Ultra دو سیم‌کارت ظرفیت 256 گیگابایت و رم 12 گیگابایت - ویتنام",
    image: new URL("@/assets/images/searchproduct-01.webp", import.meta.url).href,
    badgeType: "amazing",
    rating: "۴.۵",
    statusType: "digikala-fast",
    price: "۲۹۳,۶۹۹,۰۰۰",
    oldPrice: "۳۰۷,۷۹۳,۸۰۰",
    discount: "۵٪",
  },

  {
    id: 11,
    title: "گوشی موبایل وکال مدل V2 Pro 5G دو سیم‌کارت ظرفیت 128 گیگابایت و رم 4 گیگابایت  ",
    image: new URL("@/assets/images/searchproduct-02.webp", import.meta.url).href,
    badgeType: null,
    rating: "۳.۴",
    statusType: "last-one",
    price: "۲۲,۳۹۹,۰۰۰",
    oldPrice: null,
    discount: null,
  },

  {
    id: 12,
    title: "گوشی موبایل شیائومی مدل Redmi 15 4G دو سیم کارت ظرفیت 256 گیگابایت و رم 8 گیگابایت ",
    image: new URL("@/assets/images/searchproduct-03.webp", import.meta.url).href,
    badgeType: "special",
    rating: "۴.۴",
    statusType: "seller-3h",
    price: "۳۳,۴۲۹,۴۰۰",
    oldPrice: "۳۵,۱۸۸,۸۰۰",
    discount: "۵٪",
  },

  {
    id: 13,
    title: "گوشی موبایل ریلمی مدل Plus 12 ظرفیت 512 گیگابایت و رم 12 گیگابایت",
    image: new URL("@/assets/images/searchproduct-04.webp", import.meta.url).href,
    badgeType: "amazing",
    rating: "۴.۵",
    statusType: "last-one",
    price: "۵۲,۸۹۹,۰۰۰",
    oldPrice: "۵۳,۹۹۹,۰۰۰",
    discount: "۲٪",
  },

  {
    id: 14,
    title: "گوشی موبایل شیائومی مدل Redmi Note 14s دو سیم کارت ظرفیت 512 گیگابایت و رم 12 گیگابایت",
    image: new URL("@/assets/images/searchproduct-05.webp", import.meta.url).href,
    badgeType: "special",
    rating: "۴.۴",
    statusType: "digikala-fast",
    price: "۵۲,۳۸۴,۷۰۰",
    oldPrice: "۵۵,۱۴۱,۷۰۰",
    discount: "۵٪",
  },

  {
    id: 15,
    title: "گوشی موبایل هانوفر مدل V5 Pro دو سیم کارت ظرفیت 32 مگابایت و رم 32 مگابایت",
    image: new URL("@/assets/images/searchproduct-06.webp", import.meta.url).href,
    badgeType: null,
    rating: "۳.۳",
    statusType: "seller-3h",
    price: "۴,۱۸۰,۰۰۰",
    oldPrice: null,
    discount: null,
  },

  {
    id: 16,
    title: "گوشی موبایل سامسونگ مدل Galaxy S25 Ultra دو سیم کارت ظرفیت 512 گیگابایت و رم 12 گیگابایت - پک ویتنام",
    image: new URL("@/assets/images/searchproduct-07.webp", import.meta.url).href,
    badgeType: "special",
    rating: "۴.۶",
    statusType: "last-one",
    price: "۳۳۷,۰۸۴,۳۰۰",
    oldPrice: "۳۴۲,۱۸۶,۴۰۰",
    discount: "۱٪",
  },

  {
    id: 17,
    title: "گوشی موبایل سامسونگ مدل Galaxy A36 دو سیم کارت ظرفیت 256 گیگابایت و رم 8 گیگابایت - ویتنام",
    image: new URL("@/assets/images/searchproduct-08.webp", import.meta.url).href,
    badgeType: null,
    rating: "۴.۵",
    statusType: "digikala-fast",
    price: "۶۳,۰۰۰,۰۰۰",
    oldPrice: null,
    discount: null,
  },

  {
    id: 18,
    title: "گوشی موبایل ریلمی مدل C71 دو سیم کارت ظرفیت 256 گیگابایت و رم 8 گیگابایت",
    image: new URL("@/assets/images/searchproduct-09.webp", import.meta.url).href,
    badgeType: "amazing",
    rating: "۴.۳",
    statusType: "seller-3h",
    price: "۲۸,۴۹۹,۰۰۰",
    oldPrice: "۲۸,۹۹۰,۰۰۰",
    discount: "۲٪",
  },
  ]

export const productDetailTabs = [
  { id: "specifications", title: "مشخصات" },
  { id: "reviews", title: "دیدگاه‌ها" },
  { id: "questions", title: "پرسش‌ها" },
]

export const productStickyBuyData = {
  badge: "فروش ویژه",
  title:
    "گوشی موبایل آنر مدل X9d دو سیم کارت ظرفیت 256 گیگابایت و رم 12 گیگابایت",
  image: new URL("@/assets/images/productgallery-01.webp", import.meta.url).href,
  imageAlt: "گوشی آنر X9d",
  imageSeller: new URL("@/assets/images/footerlogo2.webp", import.meta.url).href,
  imageSellerAlt: "گوشی آنر X9d",
  colorTitle: "طلایی",
  colorCode: "#d0aa2b",
  sellerName: "دیجی‌کالا",
  warranty:
    "گارانتی ۱۸ ماهه مدیا پردازش + بیمه ۱۲ ماهه سرقت، شکستگی و آب خوردگی",
  stockText: "موجود در انبار دیجی‌کالا",
  discount: "۳٪",
  oldPrice: "۸۹,۶۹۱,۱۰۰",
  price: "۸۶,۹۳۲,۵۰۰",
  currency: "تومان",
  buttonText: "افزودن به سبد خرید",
}

export const productSpecificationsData = {
  title: "مشخصات",
  groups: [
    {
      id: 1,
      title: "مشخصات کلی",
      rows: [
        { id: 1, label: "نوع گوشی موبایل", value: "سیستم عامل اندروید" },
        { id: 2, label: "دسته‌بندی", value: "میان‌رده" },
        { id: 3, label: "مدل", value: "X9d" },
        { id: 4, label: "زمان معرفی", value: "۲۴ سپتامبر ۲۰۲۵" },
        { id: 5, label: "ابعاد", value: "۱۶۱.۹x۷۶.۱x۷.۸ میلی‌متر" },
      ],
    },
  ],
  moreText: "مشاهده بیشتر",
  notice:
    "هشدار سامانه همتا: در صورت انجام معامله، از فروشنده کد فعالسازی را گرفته و حتما در حضور ایشان، دستگاه را از طریق #7777* برای سیم‌کارت خود فعالسازی نمایید.",
}

export const productReviewsData = {
  title: "امتیاز و دیدگاه کاربران",
  score: "۴.۷",
  scoreText: "از ۵",
  totalText: "از مجموع ۱۵۷ امتیاز",
  buttonText: "ثبت دیدگاه",
  imageMoreText: "مشاهده همه",
  images: [
    { id: 1,   image: new URL("@/assets/images/productreview-01.webp", import.meta.url).href, alt: "تصویر دیدگاه ۱" },
    { id: 2,   image: new URL("@/assets/images/productreview-02.webp", import.meta.url).href, alt: "تصویر دیدگاه ۲" },
    { id: 3,   image: new URL("@/assets/images/productreview-03.webp", import.meta.url).href, alt: "تصویر دیدگاه ۳" },
    { id: 4,   image: new URL("@/assets/images/productreview-04.webp", import.meta.url).href, alt: "تصویر دیدگاه ۴" },
    { id: 5,   image: new URL("@/assets/images/productreview-05.webp", import.meta.url).href, alt: "تصویر دیدگاه ۵" },
    { id: 6,   image: new URL("@/assets/images/productreview-06.webp", import.meta.url).href, alt: "تصویر دیدگاه ۶" },
  ],
  summary: {
    title: "خلاصه دیدگاه‌های خریدارها",
    subtitle: "تولید شده با هوش مصنوعی",
    text:
      "نظرات کاربران نشان می‌دهد که گوشی آنر مدل X9d از نظر طراحی، صفحه نمایش، باتری و عملکرد کلی رضایت بالایی دارد. کاربران از کیفیت نمایشگر، روان بودن رابط کاربری، شارژدهی خوب و ظاهر دستگاه رضایت داشته‌اند.",
    moreText: "مشاهده بیشتر",
    tags: [
      { id: 1, text: "باتری فوق‌العاده با عمر طولانی", type: "positive" },
      { id: 2, text: "صفحه نمایش باکیفیت و روشنایی بالا", type: "positive" },
      { id: 3, text: "رابط کاربری روان و ساده", type: "positive" },
      { id: 4, text: "ضعف در عملکرد دوربین", type: "negative" },
      { id: 5, text: "قیمت نسبتاً بالا و گرایش به گرانی", type: "negative" },
    ],
    warningText: "این خلاصه ممکن است دقیق نباشد",
    helpText: "آیا این خلاصه برایتان مفید بود؟",
  },
  sortItems: [
    { id: 1, title: "جدیدترین", active: false },
    { id: 2, title: "دیدگاه خریداران", active: false },
    { id: 3, title: "مفیدترین", active: true },
  ],
  reviews: [
    {
      id: 1,
      author: "شهرام ابراهیمی",
      badge: "خریدار",
      rating: 5,
      text:
        "گوشی خوش‌دست و باکیفیتی است. صفحه نمایش خیلی خوب، باتری عالی و رابط کاربری روانی دارد. برای استفاده روزمره و حتی سنگین کاملاً رضایت‌بخش بوده.",
      color: "مشکی",
      seller: "دیجی‌کالا",
      likes: "۱",
      dislikes: "۰",
    },
    {
      id: 2,
      author: "کاربر دیجی‌کالا",
      badge: "خریدار",
      rating: 5,
      text:
        "بعد از مدتی استفاده، از طراحی، کیفیت ساخت و شارژدهی دستگاه کاملاً راضی بودم. نمایشگر باکیفیت و بدنه مقاوم از نکات مثبت اصلیشه.",
      color: "سبز",
      seller: "خانه تکنولوژی هوشمند",
      likes: "۳۱",
      dislikes: "۰",
    },
  ],
}

export const productQuestionsData = {
  title: "پرسش‌ها",
  countText: "۴۳۹ پرسش",
  buttonText: "ثبت پرسش",
  sortItems: [
    { id: 1, title: "جدیدترین", active: true },
    { id: 2, title: "بیشترین پاسخ", active: false },
  ],
  questions: [
    {
      id: 1,
      question: "نسبت به سامسونگ کار کردن با نرم افزار افزایش زیاد فرق داره ؟",
      answer: "",
      author: "",
      userName: "",
      repliesText: "ثبت پاسخ",
      moreRepliesText: "",
      likes: "۰",
      dislikes: "۰",
    },
    {
      id: 2,
      question:
        "بین x9d آنر و x7pro کدوم بهتره؟ خیلی گیمر نیستم در حد دو ساعت کالاف میزنم. در روز کدوم گوشی بهتره؟",
      answer:
        "کدوم از این گوشی‌ها زودتر عملکردش افت میکنه چون من حداقل شیش سال می‌خوام داشته باشمش؟",
      author: "کاربر دیجی‌کالا",
      userName: "",
      repliesText: "",
      moreRepliesText: "مشاهده پاسخ‌های دیگر",
      likes: "۰",
      dislikes: "۰",
    },
    {
      id: 3,
      question:
        "آقا این زد9آنر یا x9c توی طراحی ظاهری خمیده اون و تاچ داینامیک آیلندش خاصه کدومو بگیرم",
      answer: "",
      author: "کاربر دیجی‌کالا",
      userName: "رو بگیر X9d",
      repliesText: "ثبت پاسخ",
      moreRepliesText: "",
      likes: "۱",
      dislikes: "۰",
    },
    {
      id: 4,
      question: "رنگ طلاییش پشت چرمی نیست؟",
      answer: "",
      author: "",
      userName: "",
      repliesText: "ثبت پاسخ",
      moreRepliesText: "",
      likes: "۰",
      dislikes: "۰",
    },
  ],
}

export const productInfoSections = [
  {
    id: 1,
    type: "insurance",
    title: "بیمه",
  },
  {
    id: 2,
    type: "features",
    title: "ویژگی‌ها",
  },
]