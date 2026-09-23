import {
  FiSmartphone,
  FiMonitor,
  FiCpu,
  FiHome,
  FiTv,
  FiHeart,
  FiShoppingBag,
  FiTruck,
  FiTool,
  FiBook,
  FiWatch,
  FiGift,
  FiCoffee,
  FiGrid,
  FiPackage
} from "react-icons/fi"

import { GiGoldBar } from "react-icons/gi"
import { FaPaw } from "react-icons/fa"

export const categories = [
    {
    id: 1,
    title: "موبایل",
    icon: FiSmartphone,
    allLink: {
        title: "همه محصولات موبایل",
        href: "#"
    },
    sections: [
        {
        id: 1,
        title: "انتخاب موبایل",
        links: [
            { id: 1, title: "گوشی های اپل", href: "#" },
            { id: 2, title: "آیفون ۱۶", href: "#" },
            { id: 3, title: "آیفون ۱۷", href: "#" }
        ]
        },
        {
        id: 2,
        title: "برندهای مختلف گوشی موبایل",
        links: [
            { id: 1, title: "گوشی سامسونگ", href: "#" },
            { id: 2, title: "گوشی شیائومی", href: "#" },
            { id: 3, title: "گوشی نوکیا", href: "#" },
            { id: 4, title: "گوشی ریلمی", href: "#" },
            { id: 5, title: "گوشی سایفر", href: "#" },
            { id: 6, title: "گوشی آنر", href: "#" },
            { id: 7, title: "گوشی ناتینگ فون", href: "#" },
            { id: 8, title: "گوشی وکال", href: "#" },
            { id: 9, title: "گوشی موتورولا", href: "#" },
            { id: 10, title: "گوشی تی سی ال", href: "#" },
            { id: 11, title: "گوشی هواوی", href: "#" },
            { id: 12, title: "گوشی داریا", href: "#" },
            { id: 13, title: "گوشی گوگل پیکسل", href: "#" },
            { id: 14, title: "گوشی تی سی اچ", href: "#" },
            { id: 15, title: "گوشی جی ال ایکس", href: "#" },
            { id: 16, title: "گوشی آلکاتل", href: "#" },
            { id: 17, title: "گوشی ردتون", href: "#" },
            { id: 18, title: "گوشی وان پلاس", href: "#" },
            { id: 19, title: "گوشی‌های جنرال لوکس", href: "#" },
            { id: 20, title: "گوشی موبایل دوجی", href: "#" },
            { id: 21, title: "گوشی HMD", href: "#" },
            { id: 22, title: "گوشی پوکو", href: "#" }
        ]
        },
        {
        id: 3,
        title: "برندهای برتر",
        links: [
            { id: 1, title: "سامسونگ", href: "#" },
            { id: 2, title: "اپل", href: "#" },
            { id: 3, title: "آنر", href: "#" },
            { id: 4, title: "هواوی", href: "#" },
            { id: 5, title: "ریلمی", href: "#" },
            { id: 6, title: "سایفر", href: "#" },
            { id: 7, title: "تی سی اچ", href: "#" },
            { id: 8, title: "ردتون", href: "#" }
        ]
        },
        {
        id: 4,
        title: "گوشی براساس قیمت",
        links: [
            { id: 1, title: "گوشی ارزان", href: "#" },
            { id: 2, title: "گوشی موبایل قسطی", href: "#" },
            { id: 3, title: "گوشی تا ۲ میلیون تومان", href: "#" },
            { id: 4, title: "گوشی تا ۵ میلیون تومان", href: "#" },
            { id: 5, title: "گوشی تا ۷ میلیون تومان", href: "#" },
            { id: 6, title: "گوشی تا ۱۰ میلیون تومان", href: "#" },
            { id: 7, title: "گوشی تا ۱۲ میلیون تومان", href: "#" },
            { id: 8, title: "گوشی تا ۱۵ میلیون تومان", href: "#" },
            { id: 9, title: "گوشی تا ۲۰ میلیون تومان", href: "#" },
            { id: 10, title: "گوشی تا ۲۵ میلیون تومان", href: "#" },
            { id: 11, title: "گوشی تا ۳۰ میلیون تومان", href: "#" },
            { id: 12, title: "گوشی تا ۴۰ میلیون تومان", href: "#" },
            { id: 13, title: "گوشی تا ۵۰ میلیون تومان", href: "#" },
            { id: 14, title: "گوشی تا ۷۰ میلیون تومان", href: "#" }
        ]
        },
        {
        id: 5,
        title: "گوشی براساس عملکرد",
        links: [
            { id: 1, title: "گوشی گیمینگ", href: "#" },
            { id: 2, title: "گوشی 5G", href: "#" },
            { id: 3, title: "گوشی دکمه‌ای", href: "#" },
            { id: 4, title: "گوشی ضد آب", href: "#" },
            { id: 5, title: "گوشی مناسب عکاسی", href: "#" },
            { id: 6, title: "گوشی میان رده", href: "#" },
            { id: 7, title: "گوشی دانش آموزی", href: "#" },
            { id: 8, title: "گوشی پرچمدار", href: "#" },
            { id: 9, title: "گوشی دو سیمکارت", href: "#" }
        ]
        },
        {
        id: 6,
        title: "گوشی براساس حافظه داخلی",
        links: [
            { id: 1, title: "گوشی 64 گیگابایت", href: "#" },
            { id: 2, title: "گوشی 128 گیگابایت", href: "#" },
            { id: 3, title: "گوشی 256 گیگابایت", href: "#" },
            { id: 4, title: "گوشی 512 گیگابایت", href: "#" },
            { id: 5, title: "گوشی یک ترابایت", href: "#" }
        ]
        },
        {
        id: 7,
        title: "رزولوشن عکس",
        links: [
            { id: 1, title: "گوشی با دوربین 48 مگاپیکسل", href: "#" },
            { id: 2, title: "گوشی با دوربین 50 مگاپیکسل", href: "#" },
            { id: 3, title: "گوشی با دوربین 64 مگاپیکسل", href: "#" },
            { id: 4, title: "گوشی با دوربین 108 مگاپیکسل", href: "#" }
        ]
        },
        {
        id: 8,
        title: "لوازم جانبی موبایل",
        links: [
            { id: 1, title: "شارژر گوشی", href: "#" },
            { id: 2, title: "شارژر وایرلس", href: "#" },
            { id: 3, title: "شارژر تایپ سی", href: "#" },
            { id: 4, title: "کابل شارژ تایپ سی", href: "#" },
            { id: 5, title: "قاب گوشی", href: "#" },
            { id: 6, title: "گلس گوشی", href: "#" },
            { id: 7, title: "شارژر فندکی", href: "#" },
            { id: 8, title: "هولدر گوشی موبایل", href: "#" },
            { id: 9, title: "کابل شارژ و مبدل", href: "#" },
            { id: 10, title: "پاوربانک (شارژر همراه)", href: "#" },
            { id: 11, title: "پاور استیشن", href: "#" },
            { id: 12, title: "مونوپاد", href: "#" },
            { id: 13, title: "کاور ایرپاد", href: "#" },
            { id: 14, title: "هولدر گردنی", href: "#" },
            { id: 15, title: "فن خنک کننده گوشی", href: "#" },
            { id: 16, title: "دسته بازی موبایل", href: "#" }
        ]
        },
        {
        id: 9,
        title: "قاب گوشی",
        links: [
            { id: 1, title: "قاب گوشی سامسونگ", href: "#" },
            { id: 2, title: "قاب گوشی آیفون", href: "#" },
            { id: 3, title: "قاب گوشی شیائومی", href: "#" },
            { id: 4, title: "قاب گوشی ریلمی", href: "#" },
            { id: 5, title: "قاب گوشی پوکو", href: "#" },
            { id: 6, title: "قاب گوشی وکال", href: "#" }
        ]
        },
        {
        id: 10,
        title: "داغ ترین‌ها",
        links: [
            { id: 1, title: "گوشی S26", href: "#" },
            { id: 2, title: "آیفون ۱۷", href: "#" },
            { id: 3, title: "گوشی S25 سامسونگ", href: "#" },
            { id: 4, title: "شیائومی نوت ۱۵", href: "#" },
            { id: 5, title: "شیائومی نوت ۱۴", href: "#" },
            { id: 6, title: "ردمی نوت ۱۴ پرو", href: "#" },
            { id: 7, title: "ردمی نوت ۱۴ پرو پلاس", href: "#" },
            { id: 8, title: "گوشی سامسونگ سری s", href: "#" },
            { id: 9, title: "گوشی سامسونگ سری a", href: "#" },
            { id: 10, title: "گوشی سامسونگ سری m", href: "#" },
            { id: 11, title: "شیائومی 15t", href: "#" },
            { id: 12, title: "پوکو x7 پرو", href: "#" },
            { id: 13, title: "گلکسی A26", href: "#" },
            { id: 14, title: "گلکسی A56", href: "#" },
            { id: 15, title: "شارژر آیفون ۱۷", href: "#" },
            { id: 16, title: "گلکسی S25 FE", href: "#" }
        ]
        }
    ]
    },
    {
    id: 2,
    title: "لپ تاپ",
    icon: FiMonitor,
    allLink: {
        title: "همه محصولات لپ تاپ",
        href: "#"
    },
    sections: [
    {
        id: 1,
        title: "انتخاب لپ تاپ",
        links: [
        { id: 1, title: "لپ تاپ ایسوس", href: "#" },
        { id: 2, title: "لپ تاپ vivobook", href: "#" },
        { id: 3, title: "لپ تاپ Zenbook", href: "#" },
        { id: 4, title: "لپ تاپ TUF Gaming", href: "#" },
        { id: 5, title: "لپ تاپ ROG", href: "#" },
        { id: 6, title: "لپ تاپ لنوو", href: "#" },
        { id: 7, title: "لپ تاپ v15", href: "#" },
        { id: 8, title: "لپ تاپ ideapad 1", href: "#" },
        { id: 9, title: "لپ تاپ ideapad slim 3", href: "#" },
        { id: 10, title: "لپ تاپ thinkpad", href: "#" },
        { id: 11, title: "لپ تاپ LOQ", href: "#" },
        { id: 12, title: "مک بوک", href: "#" },
        { id: 13, title: "مک بوک نئو", href: "#" },
        { id: 14, title: "مک بوک ایر m2", href: "#" },
        { id: 15, title: "مک بوک ایر m3", href: "#" },
        { id: 16, title: "مک بوک ایر m4", href: "#" },
        { id: 17, title: "مک بوک ایر m5", href: "#" },
        { id: 18, title: "مک بوک پرو m3", href: "#" },
        { id: 19, title: "مک بوک پرو m4", href: "#" },
        { id: 20, title: "مک بوک پرو m5", href: "#" },
        { id: 21, title: "لپ تاپ سرفیس", href: "#" },
        { id: 22, title: "سرفیس لپ تاپ ۵", href: "#" },
        { id: 23, title: "سرفیس لپ تاپ ۶", href: "#" },
        { id: 24, title: "سرفیس لپ تاپ ۷", href: "#" },
        { id: 25, title: "سرفیس لپ تاپ استودیو ۲", href: "#" }
        ]
    },
    {
        id: 2,
        title: "سایر برند های لپ تاپ",
        links: [
        { id: 1, title: "لپ تاپ hp", href: "#" },
        { id: 2, title: "لپ تاپ دل", href: "#" },
        { id: 3, title: "لپ تاپ ایسر", href: "#" },
        { id: 4, title: "لپ تاپ msi", href: "#" }
        ]
    },
    {
        id: 3,
        title: "براساس برند پردازنده",
        links: [
        { id: 1, title: "لپ تاپ با پردازنده intel", href: "#" },
        { id: 2, title: "لپ تاپ با پردازنده amd", href: "#" },
        { id: 3, title: "لپ تاپ با پردازنده snapdragon", href: "#" },
        { id: 4, title: "لپ تاپ با پردازنده celeron", href: "#" }
        ]
    },
    {
        id: 4,
        title: "براساس سری پردازنده اینتل",
        links: [
        { id: 1, title: "لپ تاپ core ultra 9", href: "#" },
        { id: 2, title: "لپ تاپ core ultra 7", href: "#" },
        { id: 3, title: "لپ تاپ core ultra 5", href: "#" },
        { id: 4, title: "لپ تاپ core i9", href: "#" },
        { id: 5, title: "لپ تاپ core i7", href: "#" },
        { id: 6, title: "لپ تاپ core i5", href: "#" },
        { id: 7, title: "لپ تاپ core i3", href: "#" }
        ]
    },
    {
        id: 5,
        title: "براساس نسل پردازنده اینتل",
        links: [
        { id: 1, title: "لپ تاپ نسل 14", href: "#" },
        { id: 2, title: "لپ تاپ نسل 13", href: "#" },
        { id: 3, title: "لپ تاپ نسل 12", href: "#" }
        ]
    },
    {
        id: 6,
        title: "براساس ظرفیت حافظه ram",
        links: [
        { id: 1, title: "لپ تاپ با رم 64", href: "#" },
        { id: 2, title: "لپ تاپ با رم 32", href: "#" },
        { id: 3, title: "لپ تاپ با رم 16", href: "#" },
        { id: 4, title: "لپ تاپ با رم 12", href: "#" },
        { id: 5, title: "لپ تاپ با رم 8", href: "#" }
        ]
    },
    {
        id: 7,
        title: "براساس نوع حافظه رم",
        links: [
        { id: 1, title: "لپ تاپ با رم DDR5", href: "#" },
        { id: 2, title: "لپ تاپ با رم DDR4", href: "#" }
        ]
    },
    {
        id: 8,
        title: "لپ تاپ گیمینگ",
        links: [
        { id: 1, title: "لپ تاپ گیمینگ ایسوس", href: "#" },
        { id: 2, title: "لپ تاپ گیمینگ لنوو", href: "#" },
        { id: 3, title: "لپ تاپ گیمینگ acer", href: "#" },
        { id: 4, title: "لپ تاپ گیمینگ hp", href: "#" },
        { id: 5, title: "لپ تاپ گیمینگ msi", href: "#" }
        ]
    },
    {
        id: 9,
        title: "براساس مدل کارت گرافیک",
        links: [
        { id: 1, title: "لپ تاپ rtx 2050", href: "#" },
        { id: 2, title: "لپ تاپ rtx 3050", href: "#" },
        { id: 3, title: "لپ تاپ rtx 4050", href: "#" },
        { id: 4, title: "لپ تاپ rtx 4060", href: "#" },
        { id: 5, title: "لپ تاپ rtx 4070", href: "#" },
        { id: 6, title: "لپ تاپ rtx 5050", href: "#" },
        { id: 7, title: "لپ تاپ rtx 5060", href: "#" },
        { id: 8, title: "لپ تاپ rtx 5070", href: "#" },
        { id: 9, title: "لپ تاپ rtx 5080", href: "#" },
        { id: 10, title: "لپ تاپ rtx 5090", href: "#" }
        ]
    },
    {
        id: 10,
        title: "براساس ظرفیت کارت گرافیک",
        links: [
        { id: 1, title: "لپ تاپ با گرافیک ۲", href: "#" },
        { id: 2, title: "لپ تاپ با گرافیک ۴", href: "#" },
        { id: 3, title: "لپ تاپ با گرافیک ۶", href: "#" },
        { id: 4, title: "لپ تاپ با گرافیک ۸", href: "#" },
        { id: 5, title: "لپ تاپ با گرافیک ۱۲", href: "#" },
        { id: 6, title: "لپ تاپ با گرافیک ۱۶", href: "#" }
        ]
    },
    {
        id: 11,
        title: "براساس نرخ نوسازی صفحه نمایش",
        links: [
        { id: 1, title: "لپ تاپ 120 هرتز", href: "#" },
        { id: 2, title: "لپ تاپ 144 هرتز", href: "#" },
        { id: 3, title: "لپ تاپ 165 هرتز", href: "#" },
        { id: 4, title: "لپ تاپ 240 هرتز", href: "#" }
        ]
    },
    {
        id: 12,
        title: "قیمت لپ تاپ",
        links: [
        { id: 1, title: "لپ تاپ تا ۵۰ میلیون", href: "#" },
        { id: 2, title: "لپ تاپ تا ۶۰ میلیون", href: "#" },
        { id: 3, title: "لپ تاپ تا ۷۰ میلیون", href: "#" },
        { id: 4, title: "لپ تاپ تا ۸۰ میلیون", href: "#" },
        { id: 5, title: "لپ تاپ تا ۹۰ میلیون", href: "#" },
        { id: 6, title: "لپ تاپ تا ۱۰۰ میلیون", href: "#" }
        ]
    },
    {
        id: 13,
        title: "براساس کاربری",
        links: [
        { id: 1, title: "لپ تاپ دانشجویی", href: "#" },
        { id: 2, title: "لپ تاپ گیمینگ", href: "#" },
        { id: 3, title: "لپ تاپ مالتی مدیا", href: "#" }
        ]
    },
    {
        id: 14,
        title: "لوازم جانبی لپ تاپ",
        links: [
        { id: 1, title: "کول پد", href: "#" },
        { id: 2, title: "کیف لپ تاپ", href: "#" },
        { id: 3, title: "شارژر لپ تاپ", href: "#" },
        { id: 4, title: "ماوس", href: "#" },
        { id: 5, title: "ماوس پد", href: "#" },
        { id: 6, title: "استیکر لپ تاپ", href: "#" },
        { id: 7, title: "اسکین لپ تاپ", href: "#" }
        ]
    }
    ]
    },
    {
    id: 3,
    title: "کالای دیجیتال",
    icon: FiCpu,
    allLink: {
        title: "همه محصولات کالای دیجیتال",
        href: "#"
    },
    sections: [
    {
        id: 1,
        title: "کنسول بازی",
        links: [
        { id: 1, title: "PS5", href: "#" },
        { id: 2, title: "PS5 Slim", href: "#" },
        { id: 3, title: "PS5 Pro", href: "#" },
        { id: 4, title: "PS4", href: "#" },
        { id: 5, title: "Xbox", href: "#" },
        { id: 6, title: "Gamestick", href: "#" },
        { id: 7, title: "Nintendo", href: "#" }
        ]
    },
    {
        id: 2,
        title: "وسایل گیمینگ",
        links: [
        { id: 1, title: "ست گیمینگ", href: "#" },
        { id: 2, title: "دسته بازی", href: "#" },
        { id: 3, title: "بازی PS5", href: "#" },
        { id: 4, title: "بازی PS4", href: "#" },
        { id: 5, title: "بازی ایکس باکس ۳۶۰", href: "#" },
        { id: 6, title: "بازی PC", href: "#" },
        { id: 7, title: "دیسک های بازی", href: "#" },
        { id: 8, title: "فرمان بازی", href: "#" },
        { id: 9, title: "صندلی گیمینگ", href: "#" }
        ]
    },
    {
        id: 3,
        title: "تبلت",
        links: [
        { id: 1, title: "تبلت ویندوزی", href: "#" },
        { id: 2, title: "تبلت سامسونگ", href: "#" },
        { id: 3, title: "تبلت شیائومی", href: "#" },
        { id: 4, title: "تبلت نارتب", href: "#" },
        { id: 5, title: "سرفیس", href: "#" },
        { id: 6, title: "سرفیس پرو ۸", href: "#" },
        { id: 7, title: "سرفیس پرو ۹", href: "#" },
        { id: 8, title: "سرفیس پرو ۱۰", href: "#" },
        { id: 9, title: "سرفیس پرو ۱۱", href: "#" },
        { id: 10, title: "ایپد", href: "#" },
        { id: 11, title: "ایپد ایر", href: "#" },
        { id: 12, title: "ایپد پرو", href: "#" }
        ]
    },
    {
        id: 4,
        title: "کامپیوتر",
        links: [
        { id: 1, title: "all in one", href: "#" },
        { id: 2, title: "کامپیوتر کامل", href: "#" },
        { id: 3, title: "کامپیوتر گیمینگ", href: "#" },
        { id: 4, title: "mini pc", href: "#" },
        { id: 5, title: "قلم نوری", href: "#" },
        { id: 6, title: "رم ریدر", href: "#" },
        { id: 7, title: "ماوس پد", href: "#" }
        ]
    },
    {
        id: 5,
        title: "مانیتور",
        links: [
        { id: 1, title: "انتخاب مانیتور", href: "#" },
        { id: 2, title: "مانیتور OLED", href: "#" },
        { id: 3, title: "قیمت مانیتور", href: "#" }
        ]
    },
    {
        id: 6,
        title: "اسپیکر",
        links: [
        { id: 1, title: "اسپیکر بلوتوثی", href: "#" },
        { id: 2, title: "اسپیکر JBL", href: "#" },
        { id: 3, title: "اسپیکر هارمن کاردن", href: "#" },
        { id: 4, title: "اسپیکر سونی", href: "#" },
        { id: 5, title: "اسپیکر تسکو", href: "#" },
        { id: 6, title: "اسپیکر مکسیدر", href: "#" },
        { id: 7, title: "اسپیکر میکرولب", href: "#" },
        { id: 8, title: "پارتی باکس", href: "#" }
        ]
    },
    {
        id: 7,
        title: "هدفون",
        links: [
        { id: 1, title: "هدفون بی سیم", href: "#" },
        { id: 2, title: "هدفون گیمینگ", href: "#" },
        { id: 3, title: "هدفون انکر", href: "#" },
        { id: 4, title: "هدفون اپل (ایرپاد)", href: "#" },
        { id: 5, title: "هدفون بیتس", href: "#" },
        { id: 6, title: "هدفون سونی", href: "#" },
        { id: 7, title: "هدفون سامسونگ (ایربادز)", href: "#" },
        { id: 8, title: "هدفون شیائومی", href: "#" },
        { id: 9, title: "هدفون جی بی ال", href: "#" },
        { id: 10, title: "هدفون ریزر", href: "#" },
        { id: 11, title: "هدست", href: "#" }
        ]
    },
    {
        id: 8,
        title: "ساعت و مچ بند هوشمند",
        links: [
        { id: 1, title: "ساعت هوشمند سامسونگ", href: "#" },
        { id: 2, title: "ساعت هوشمند شیائومی", href: "#" },
        { id: 3, title: "بند ساعت هوشمند", href: "#" },
        { id: 4, title: "لوازم جانبی ساعت هوشمند", href: "#" },
        { id: 5, title: "اپل واچ", href: "#" },
        { id: 6, title: "اپل واچ اولترا ۳", href: "#" },
        { id: 7, title: "اپل واچ اولترا ۲", href: "#" },
        { id: 8, title: "اپل واچ ۱۱", href: "#" },
        { id: 9, title: "اپل واچ ۱۰", href: "#" },
        { id: 10, title: "اپل واچ SE", href: "#" }
        ]
    },
    {
        id: 9,
        title: "پاوربانک",
        links: [
        { id: 1, title: "انتخاب پاوربانک", href: "#" },
        { id: 2, title: "پاور بانک شیائومی", href: "#" },
        { id: 3, title: "پاور بانک انکر", href: "#" },
        { id: 4, title: "پاور بانک اپل", href: "#" },
        { id: 5, title: "پاور بانک سامسونگ", href: "#" },
        { id: 6, title: "پاور بانک انرجایزر", href: "#" }
        ]
    },
    {
        id: 10,
        title: "دوربین",
        links: [
        { id: 1, title: "دوربین فیلمبرداری", href: "#" },
        { id: 2, title: "دوربین کنون", href: "#" },
        { id: 3, title: "دوربین سونی", href: "#" },
        { id: 4, title: "دوربین چاپ سریع", href: "#" },
        { id: 5, title: "دوربین کامپکت", href: "#" },
        { id: 6, title: "دوربین dslr", href: "#" },
        { id: 7, title: "رینگ لایت", href: "#" },
        { id: 8, title: "پایه دوربین", href: "#" },
        { id: 9, title: "لنز دوربین", href: "#" },
        { id: 10, title: "کارت حافظه", href: "#" },
        { id: 11, title: "گیمبال و استبلایزر", href: "#" }
        ]
    },
    {
        id: 11,
        title: "تجهیزات ذخیره‌سازی اطلاعات",
        links: [
        { id: 1, title: "هارد ssd", href: "#" },
        { id: 2, title: "هارد اینترنال", href: "#" },
        { id: 3, title: "هارد اکسترنال", href: "#" },
        { id: 4, title: "هارد اکسترنال ssd", href: "#" },
        { id: 5, title: "باکس هارد", href: "#" },
        { id: 6, title: "فلش", href: "#" },
        { id: 7, title: "فلش ۲۵۶ گیگ", href: "#" },
        { id: 8, title: "فلش ۱۲۸ گیگ", href: "#" },
        { id: 9, title: "فلش ۶۴ گیگ", href: "#" },
        { id: 10, title: "فلش ۳۲ گیگ", href: "#" },
        { id: 11, title: "فلش ۱۶ گیگ", href: "#" }
        ]
    },
    {
        id: 12,
        title: "باتری",
        links: [
        { id: 1, title: "باتری لیتیومی", href: "#" },
        { id: 2, title: "باتری قلمی", href: "#" }
        ]
    },
    {
        id: 13,
        title: "پرینتر",
        links: [
        { id: 1, title: "پرینتر سه بعدی", href: "#" },
        { id: 2, title: "پرینتر حرارتی", href: "#" },
        { id: 3, title: "پرینتر رنگی", href: "#" },
        { id: 4, title: "پرینتر لیبل زن", href: "#" },
        { id: 5, title: "پرینتر اچ پی", href: "#" }
        ]
    },
    {
        id: 14,
        title: "ماشین‌های اداری",
        links: [
        { id: 1, title: "کابل پرینتر", href: "#" },
        { id: 2, title: "کارتریج", href: "#" },
        { id: 3, title: "اسکنر", href: "#" },
        { id: 4, title: "تلفن", href: "#" },
        { id: 5, title: "تلفن ویپ", href: "#" },
        { id: 6, title: "بارکدخوان", href: "#" },
        { id: 7, title: "ویدئو وال", href: "#" },
        { id: 8, title: "ویدئو پروژکتور", href: "#" },
        { id: 9, title: "دستگاه حضور و غیاب", href: "#" },
        { id: 10, title: "پیجر و سیستم نوبت دهی", href: "#" },
        { id: 11, title: "کیوسک لمسی", href: "#" }
        ]
    },
    {
        id: 15,
        title: "تجهیزات شبکه و ارتباطات",
        links: [
        { id: 1, title: "هاب USB", href: "#" },
        { id: 2, title: "سوییچ", href: "#" },
        { id: 3, title: "هاب سوئیچ", href: "#" },
        { id: 4, title: "کارت شبکه", href: "#" },
        { id: 5, title: "کامپیوتر سرور", href: "#" },
        { id: 6, title: "رک شبکه و سرور", href: "#" },
        { id: 7, title: "پچ پنل", href: "#" },
        { id: 8, title: "پرینت سرور", href: "#" },
        { id: 9, title: "آداپتور شبکه", href: "#" },
        { id: 10, title: "اسپلیتر", href: "#" },
        { id: 11, title: "کابل شبکه (LAN)", href: "#" },
        { id: 12, title: "کابل cat6", href: "#" },
        { id: 13, title: "کابل کمبو", href: "#" }
        ]
    },
    {
        id: 16,
        title: "تجهیزات امنیتی و نظارتی",
        links: [
        { id: 1, title: "دوربین مدار بسته", href: "#" },
        { id: 2, title: "پایه دوربین مدار بسته", href: "#" },
        { id: 3, title: "ماکت دوربین مدار بسته", href: "#" }
        ]
    },
    {
        id: 17,
        title: "قطعات کامپیوتر",
        links: [
        { id: 1, title: "پردازنده (cpu)", href: "#" },
        { id: 2, title: "کارت گرافیک", href: "#" },
        { id: 3, title: "مادربرد", href: "#" },
        { id: 4, title: "رم کامپیوتر", href: "#" },
        { id: 5, title: "کیس کامپیوتر", href: "#" },
        { id: 6, title: "دانگل بلوتوث", href: "#" },
        { id: 7, title: "خمیر سیلیکون", href: "#" },
        { id: 8, title: "کیبورد", href: "#" },
        { id: 9, title: "کیبورد گیمینگ", href: "#" },
        { id: 10, title: "کیبورد بی سیم", href: "#" },
        { id: 11, title: "کیبورد مکانیکال", href: "#" },
        { id: 12, title: "ماوس", href: "#" },
        { id: 13, title: "ماوس گیمینگ", href: "#" },
        { id: 14, title: "ماوس بی سیم", href: "#" }
        ]
    },
    {
        id: 18,
        title: "خانه هوشمند",
        links: [
        { id: 1, title: "نور و روشنایی هوشمند", href: "#" },
        { id: 2, title: "کلید و پریز هوشمند", href: "#" },
        { id: 3, title: "سنسور هوشمند", href: "#" },
        { id: 4, title: "هاب و دستیار صوتی هوشمند", href: "#" },
        { id: 5, title: "جارو هوشمند (رباتیک)", href: "#" }
        ]
    },
    {
        id: 19,
        title: "برندهای برتر",
        links: [
        { id: 1, title: "شیائومی", href: "#" },
        { id: 2, title: "سامسونگ", href: "#" },
        { id: 3, title: "اپل", href: "#" },
        { id: 4, title: "هواوی", href: "#" },
        { id: 5, title: "آنر", href: "#" },
        { id: 6, title: "ریلمی", href: "#" },
        { id: 7, title: "توشیبا", href: "#" },
        { id: 8, title: "تکنو", href: "#" },
        { id: 9, title: "ایرانسل", href: "#" },
        { id: 10, title: "مبین نت", href: "#" },
        { id: 11, title: "نینتندو", href: "#" },
        { id: 12, title: "بیتس", href: "#" },
        { id: 13, title: "جی بی ال", href: "#" },
        { id: 14, title: "وان مور", href: "#" },
        { id: 15, title: "تی پی لینک", href: "#" },
        { id: 16, title: "دی لینک", href: "#" },
        { id: 17, title: "کیو سی وای", href: "#" }
        ]
    },
    {
        id: 20,
        title: "داغ ترین ها",
        links: [
        { id: 1, title: "FC26 PS5", href: "#" },
        { id: 2, title: "هدفون ناتینگ ۱", href: "#" },
        { id: 3, title: "نینتندو سوییچ ۲", href: "#" },
        { id: 4, title: "قاب آیپد", href: "#" },
        { id: 5, title: "هدفون گربه ای", href: "#" },
        { id: 6, title: "ایرپاد مکس", href: "#" },
        { id: 7, title: "ایرپاد پرو ۳", href: "#" }
        ]
    }
    ]
    },
    {
    id: 4,
    title: "خانه و آشپزخانه",
    icon: FiHome,
    allLink: {
        title: "همه محصولات خانه و آشپزخانه",
        href: "#"
    },
    sections: [
    {
        id: 1,
        title: "ظروف پخت و پز",
        links: [
        { id: 1, title: "قابلمه و تابه", href: "#" },
        { id: 2, title: "زودپز", href: "#" },
        { id: 3, title: "سرویس پخت و پز", href: "#" },
        { id: 4, title: "ابزار آشپزی", href: "#" },
        { id: 5, title: "ست کفگیر و ملاقه", href: "#" },
        { id: 6, title: "چاقو", href: "#" },
        { id: 7, title: "تخته گوشت", href: "#" },
        { id: 8, title: "ظرف و قالب یخ", href: "#" },
        { id: 9, title: "قیف", href: "#" },
        { id: 10, title: "صافی", href: "#" },
        { id: 11, title: "گردو شکن", href: "#" },
        { id: 12, title: "فندک آشپزخانه", href: "#" },
        { id: 13, title: "ترازوی آشپزخانه", href: "#" }
        ]
    },
    {
        id: 2,
        title: "تهیه و سرو چای و قهوه",
        links: [
        { id: 1, title: "قهوه ساز و دمنوش ساز", href: "#" },
        { id: 2, title: "سماور", href: "#" },
        { id: 3, title: "شیر جوش - قهوه جوش", href: "#" },
        { id: 4, title: "قوری", href: "#" },
        { id: 5, title: "کتری و قوری", href: "#" },
        { id: 6, title: "فیلتر چای", href: "#" }
        ]
    },
    {
        id: 3,
        title: "ظروف آشپزخانه",
        links: [
        { id: 1, title: "آبکش و آبگیر", href: "#" },
        { id: 2, title: "بطری", href: "#" },
        { id: 3, title: "ارگانایزر آشپزخانه", href: "#" },
        { id: 4, title: "جای ادویه", href: "#" },
        { id: 5, title: "بانکه و ظروف بنشن", href: "#" },
        { id: 6, title: "شکر پاش و نمک پاش", href: "#" },
        { id: 7, title: "سبد آشپزخانه", href: "#" },
        { id: 8, title: "سبد سیب زمینی و پیاز", href: "#" },
        { id: 9, title: "ظرف نگهدارنده", href: "#" },
        { id: 10, title: "سایر ظروف", href: "#" },
        { id: 11, title: "لوازم تهیه کیک و دسر", href: "#" }
        ]
    },
    {
        id: 4,
        title: "سرو و پذیرایی",
        links: [
        { id: 1, title: "سفره", href: "#" },
        { id: 2, title: "ماگ", href: "#" },
        { id: 3, title: "سینی", href: "#" },
        { id: 4, title: "لیوان", href: "#" },
        { id: 5, title: "بشقاب", href: "#" },
        { id: 6, title: "قندان", href: "#" },
        { id: 7, title: "پارچ و بطری", href: "#" },
        { id: 8, title: "بستنی خوری", href: "#" },
        { id: 9, title: "سس خوری و آبلیمو خوری", href: "#" },
        { id: 10, title: "کاسه و پیاله", href: "#" },
        { id: 11, title: "کلمن و فلاسک", href: "#" },
        { id: 12, title: "ظروف سرو و پذیرایی", href: "#" },
        { id: 13, title: "سرویس غذاخوری", href: "#" },
        { id: 14, title: "قاشق، چنگال و کارد", href: "#" },
        { id: 15, title: "زیر لیوانی، زیر بشقابی و زیر قابلمه ای", href: "#" },
        { id: 16, title: "ابزار مهمانی", href: "#" }
        ]
    },
    {
        id: 5,
        title: "منسوجات آشپزخانه",
        links: [
        { id: 1, title: "دستگیره", href: "#" },
        { id: 2, title: "پیش بند", href: "#" },
        { id: 3, title: "کیسه نان و سبزی", href: "#" },
        { id: 4, title: "دستمال نظافت خانه و آشپزخانه", href: "#" }
        ]
    },
    {
        id: 6,
        title: "مبل",
        links: [
        { id: 1, title: "مبل راحتی", href: "#" },
        { id: 2, title: "مبل تختخواب شو", href: "#" },
        { id: 3, title: "مبل بادی", href: "#" },
        { id: 4, title: "مبل تدی", href: "#" },
        { id: 5, title: "مبل ال", href: "#" },
        { id: 6, title: "مبل مینیمال", href: "#" },
        { id: 7, title: "مبل چستر", href: "#" },
        { id: 8, title: "مبل اداری و صندلی انتظار", href: "#" },
        { id: 9, title: "پاف", href: "#" },
        { id: 10, title: "صندلی کودک", href: "#" }
        ]
    },
    {
        id: 7,
        title: "دکوراسیون خانگی",
        links: [
        { id: 1, title: "کتابخانه", href: "#" },
        { id: 2, title: "شلف و طبقه", href: "#" },
        { id: 3, title: "کنسول", href: "#" },
        { id: 4, title: "صندلی", href: "#" },
        { id: 5, title: "میز تلویزیون", href: "#" },
        { id: 6, title: "میز ناهارخوری", href: "#" }
        ]
    },
    {
        id: 8,
        title: "مبلمان و دکوراسیون اداری",
        links: [
        { id: 1, title: "صندلی اداری", href: "#" },
        { id: 2, title: "میز اداری", href: "#" }
        ]
    },
    {
        id: 9,
        title: "نگهدارنده لباس و لوازم",
        links: [
        { id: 1, title: "رگال لباس", href: "#" },
        { id: 2, title: "کمد لباس و ارگانایزر", href: "#" },
        { id: 3, title: "جاکفشی", href: "#" },
        { id: 4, title: "جالباسی", href: "#" },
        { id: 5, title: "کاور لوازم خانگی", href: "#" }
        ]
    },
    {
        id: 10,
        title: "دکوراتیو",
        links: [
        { id: 1, title: "مجسمه و تندیس", href: "#" },
        { id: 2, title: "ساعت", href: "#" },
        { id: 3, title: "عود", href: "#" },
        { id: 4, title: "شمع", href: "#" },
        { id: 5, title: "شمعدان", href: "#" },
        { id: 6, title: "دیوارکوب", href: "#" },
        { id: 7, title: "اسماج", href: "#" },
        { id: 8, title: "گل و گلدان", href: "#" },
        { id: 9, title: "آینه دکوراتیو", href: "#" },
        { id: 10, title: "قاب عکس و تابلو", href: "#" },
        { id: 11, title: "تابلو", href: "#" },
        { id: 12, title: "قاب عکس", href: "#" },
        { id: 13, title: "تابلو شاسی", href: "#" },
        { id: 14, title: "کوسن، رومیزی و شال مبل", href: "#" },
        { id: 15, title: "رومیزی", href: "#" },
        { id: 16, title: "کوسن", href: "#" },
        { id: 17, title: "شال مبل و تخت", href: "#" }
        ]
    },
    {
        id: 11,
        title: "کفپوش و دیوارپوش",
        links: [
        { id: 1, title: "پوستر و کاغذ دیواری", href: "#" },
        { id: 2, title: "پارکت", href: "#" },
        { id: 3, title: "استیکر و پوستر", href: "#" },
        { id: 4, title: "پرده", href: "#" },
        { id: 5, title: "ملزومات پرده", href: "#" }
        ]
    },
    {
        id: 12,
        title: "نور و روشنایی",
        links: [
        { id: 1, title: "آباژور", href: "#" },
        { id: 2, title: "لوستر", href: "#" },
        { id: 3, title: "لامپ و چراغ", href: "#" }
        ]
    },
    {
        id: 13,
        title: "فرش و گلیم",
        links: [
        { id: 1, title: "فرش", href: "#" },
        { id: 2, title: "موکت", href: "#" },
        { id: 3, title: "فرش مدرن", href: "#" },
        { id: 4, title: "تابلو فرش", href: "#" },
        { id: 5, title: "پادری", href: "#" },
        { id: 6, title: "روفرشی", href: "#" },
        { id: 7, title: "فرش ماشینی، دستبافت، تابلو", href: "#" }
        ]
    },
    {
        id: 14,
        title: "گل و گیاه",
        links: [
        { id: 1, title: "گل آپارتمانی", href: "#" },
        { id: 2, title: "دسته گل", href: "#" },
        { id: 3, title: "سبد گل", href: "#" }
        ]
    }
    ]
    },
    {
    id: 5,
    title: "لوازم خانگی برقی",
    icon: FiTv,
    allLink: {
        title: "همه محصولات لوازم خانگی برقی",
        href: "#"
    },
    sections: [
    {
        id: 1,
        title: "جهیزیه",
        links: [
        { id: 1, title: "جهیزیه", href: "#" }
        ]
    },
    {
        id: 2,
        title: "تهویه، سرمایش و گرمایش",
        links: [
        { id: 1, title: "کولر گازی", href: "#" },
        { id: 2, title: "کولر سلولزی", href: "#" },
        { id: 3, title: "کولر آبی", href: "#" },
        { id: 4, title: "پنکه", href: "#" },
        { id: 5, title: "پنکه شارژی", href: "#" },
        { id: 6, title: "تصفیه کننده هوا", href: "#" },
        { id: 7, title: "پکیج دیواری", href: "#" },
        { id: 8, title: "رادیاتور", href: "#" },
        { id: 9, title: "شوفاژ برقی", href: "#" },
        { id: 10, title: "آبگرمکن", href: "#" }
        ]
    },
    {
        id: 3,
        title: "ماشین لباسشویی",
        links: [
        { id: 1, title: "ماشین لباسشویی ال جی", href: "#" },
        { id: 2, title: "ماشین لباسشویی دوو", href: "#" },
        { id: 3, title: "ماشین لباسشویی ایکس ویژن", href: "#" },
        { id: 4, title: "ماشین لباسشویی پاکشوما", href: "#" },
        { id: 5, title: "ماشین لباسشویی اسنوا", href: "#" },
        { id: 6, title: "مینی واش", href: "#" }
        ]
    },
    {
        id: 4,
        title: "جاروبرقی",
        links: [
        { id: 1, title: "جارو رباتیک", href: "#" },
        { id: 2, title: "جارو شارژی", href: "#" },
        { id: 3, title: "لوازم جانبی جاروبرقی و بخارشور", href: "#" }
        ]
    },
    {
        id: 5,
        title: "ماشین ظرفشویی",
        links: [
        { id: 1, title: "ماشین ظرفشویی بوش", href: "#" },
        { id: 2, title: "ماشین ظرفشویی ال جی", href: "#" },
        { id: 3, title: "ماشین ظرفشویی دوو", href: "#" },
        { id: 4, title: "ماشین ظرفشویی پاکشوما", href: "#" },
        { id: 5, title: "ماشین ظرفشویی ایکس ویژن", href: "#" }
        ]
    },
    {
        id: 6,
        title: "صوتی و تصویری",
        links: [
        { id: 1, title: "رادیو", href: "#" },
        { id: 2, title: "ساندبار", href: "#" },
        { id: 3, title: "ویدیو پروژکتور", href: "#" },
        { id: 4, title: "اندروید باکس", href: "#" },
        { id: 5, title: "پخش کننده خانگی", href: "#" },
        { id: 6, title: "لوازم جانبی صوتی و تصویری", href: "#" },
        { id: 7, title: "ریموت کنترل", href: "#" }
        ]
    },
    {
        id: 7,
        title: "یخچال فریزر",
        links: [
        { id: 1, title: "یخچال فریزر ساید بای ساید", href: "#" },
        { id: 2, title: "یخچال فریزر دوقلو", href: "#" },
        { id: 3, title: "یخچال فریزر هتلی", href: "#" },
        { id: 4, title: "یخچال فریزر بالا پایین(کمبی)", href: "#" }
        ]
    },
    {
        id: 8,
        title: "تلویزیون",
        links: [
        { id: 1, title: "تلویزیون سونی", href: "#" },
        { id: 2, title: "تلویزیون تی سی ال", href: "#" },
        { id: 3, title: "تلویزیون جی پلاس", href: "#" },
        { id: 4, title: "تلویزیون ایکس ویژن", href: "#" },
        { id: 5, title: "تلویزیون اندروید", href: "#" },
        { id: 6, title: "تلویزیون 4k", href: "#" },
        { id: 7, title: "تلویزیون گیمینگ", href: "#" },
        { id: 8, title: "تلویزیون OLED", href: "#" },
        { id: 9, title: "تلویزیون QLED", href: "#" }
        ]
    },
    {
        id: 9,
        title: "تلویزیون براساس سایز",
        links: [
        { id: 1, title: "تلویزیون ۸۵ اینچ", href: "#" },
        { id: 2, title: "تلویزیون ۷۵ اینچ", href: "#" },
        { id: 3, title: "تلویزیون ۷۰ اینچ", href: "#" },
        { id: 4, title: "تلویزیون ۶۵ اینچ", href: "#" },
        { id: 5, title: "تلویزیون ۶۰ اینچ", href: "#" },
        { id: 6, title: "تلویزیون ۵۵ اینچ", href: "#" },
        { id: 7, title: "تلویزیون ۵۰ اینچ", href: "#" }
        ]
    },
    {
        id: 10,
        title: "لوازم پخت و پز",
        links: [
        { id: 1, title: "تخم مرغ پز", href: "#" },
        { id: 2, title: "سرخ کن بدون روغن (air fryer)", href: "#" },
        { id: 3, title: "مایکروویو، مایکروفر", href: "#" },
        { id: 4, title: "اجاق گاز", href: "#" },
        { id: 5, title: "پلوپز", href: "#" },
        { id: 6, title: "ساندویچ ساز و وافل ساز", href: "#" },
        { id: 7, title: "آون توستر", href: "#" },
        { id: 8, title: "گریل و باربیکیو", href: "#" },
        { id: 9, title: "توستر", href: "#" }
        ]
    },
    {
        id: 11,
        title: "اتو",
        links: [
        { id: 1, title: "اتو پرس", href: "#" },
        { id: 2, title: "اتو ایستاده", href: "#" },
        { id: 3, title: "اتو بخار", href: "#" },
        { id: 4, title: "بخارگر", href: "#" }
        ]
    },
    {
        id: 12,
        title: "نوشیدنی ساز",
        links: [
        { id: 1, title: "قهوه ساز", href: "#" },
        { id: 2, title: "اسپرسو ساز", href: "#" },
        { id: 3, title: "چای ساز", href: "#" },
        { id: 4, title: "کتری برقی", href: "#" },
        { id: 5, title: "سماور برقی", href: "#" },
        { id: 6, title: "آبسرد کن", href: "#" },
        { id: 7, title: "آبمیوه گیری", href: "#" },
        { id: 8, title: "آب مرکبات گیر", href: "#" },
        { id: 9, title: "آسیاب قهوه", href: "#" }
        ]
    },
    {
        id: 13,
        title: "چرخ خیاطی",
        links: [
        { id: 1, title: "چرخ خیاطی صنعتی", href: "#" },
        { id: 2, title: "چرخ خیاطی خانگی", href: "#" },
        { id: 3, title: "چرخ خیاطی ژانومه", href: "#" },
        { id: 4, title: "چرخ خیاطی کاچیران", href: "#" }
        ]
    },
    {
        id: 14,
        title: "خردکن و غذاساز",
        links: [
        { id: 1, title: "گوشت کوب برقی", href: "#" },
        { id: 2, title: "غذاساز", href: "#" },
        { id: 3, title: "همزن", href: "#" },
        { id: 4, title: "مخلوط کن", href: "#" },
        { id: 5, title: "چرخ گوشت", href: "#" },
        { id: 6, title: "خردکن", href: "#" },
        { id: 7, title: "آسیاب", href: "#" }
        ]
    },
    {
        id: 15,
        title: "بخار شو و تصفیه آب",
        links: [
        { id: 1, title: "بخار شو", href: "#" },
        { id: 2, title: "تصفیه آب", href: "#" },
        { id: 3, title: "فیلتر تصفیه آب", href: "#" }
        ]
    },
    {
        id: 16,
        title: "لوازم توکار",
        links: [
        { id: 1, title: "فر", href: "#" },
        { id: 2, title: "هود", href: "#" },
        { id: 3, title: "گاز صفحه ای", href: "#" },
        { id: 4, title: "سینک ظرفشویی", href: "#" }
        ]
    }
    ]
    },
    {
    id: 6,
    title: "آرایشی بهداشتی",
    icon: FiHeart,
    allLink: {
        title: "همه محصولات آرایشی بهداشتی",
        href: "#"
    },
    sections: [
    {
        id: 1,
        title: "مراقبت پوست",
        links: [
        { id: 1, title: "ضد آفتاب", href: "#" },
        { id: 2, title: "کرم مرطوب کننده و نرم کننده", href: "#" },
        { id: 3, title: "ماسک صورت و بدن", href: "#" },
        { id: 4, title: "پاک کننده صورت", href: "#" },
        { id: 5, title: "تونر", href: "#" },
        { id: 6, title: "مراقبت بدن", href: "#" },
        { id: 7, title: "ابزار مراقبت پوست", href: "#" }
        ]
    },
    {
        id: 2,
        title: "لوازم آرایشی",
        links: [
        { id: 1, title: "بهداشت و زیبایی ناخن", href: "#" },
        { id: 2, title: "ابزار آرایشی", href: "#" }
        ]
    },
    {
        id: 3,
        title: "آرایش صورت",
        links: [
        { id: 1, title: "کرم پودر", href: "#" },
        { id: 2, title: "رژگونه", href: "#" },
        { id: 3, title: "کانسیلر", href: "#" },
        { id: 4, title: "کانتور", href: "#" },
        { id: 5, title: "پاک کننده آرایش صورت", href: "#" },
        { id: 6, title: "پاک کننده آرایش صورت پوست خشک", href: "#" },
        { id: 7, title: "پاک کننده آرایش صورت چرب", href: "#" },
        { id: 8, title: "میسلار واتر", href: "#" }
        ]
    },
    {
        id: 4,
        title: "آرایش چشم",
        links: [
        { id: 1, title: "ریمل", href: "#" },
        { id: 2, title: "خط چشم", href: "#" },
        { id: 3, title: "مداد چشم", href: "#" }
        ]
    },
    {
        id: 5,
        title: "آرایش لب",
        links: [
        { id: 1, title: "مداد لب", href: "#" },
        { id: 2, title: "بالم لب", href: "#" },
        { id: 3, title: "تینت لب", href: "#" }
        ]
    },
    {
        id: 6,
        title: "مراقبت و زیبایی مو",
        links: [
        { id: 1, title: "مراقبت مو", href: "#" },
        { id: 2, title: "آرایش مو", href: "#" },
        { id: 3, title: "نرم کننده مو", href: "#" },
        { id: 4, title: "شامپو مو", href: "#" }
        ]
    },
    {
        id: 7,
        title: "لوازم بهداشتی",
        links: [
        { id: 1, title: "مراقبت دهان و دندان", href: "#" },
        { id: 2, title: "مسواک", href: "#" },
        { id: 3, title: "خمیر دندان", href: "#" },
        { id: 4, title: "دئودورانت و ضد تعریق", href: "#" },
        { id: 5, title: "محصولات بهداشت جنسی", href: "#" },
        { id: 6, title: "کاندوم", href: "#" },
        { id: 7, title: "بهداشت و مراقبت شخصی", href: "#" },
        { id: 8, title: "نوار بهداشتی", href: "#" },
        { id: 9, title: "کاپ قاعدگی", href: "#" },
        { id: 10, title: "لوازم اصلاح مو", href: "#" },
        { id: 11, title: "تیغ و یدک اصلاح", href: "#" },
        { id: 12, title: "شامپو بدن", href: "#" },
        { id: 13, title: "شامپو بدن مردانه", href: "#" },
        { id: 14, title: "شامپو بدن زنانه", href: "#" },
        { id: 15, title: "شامپو بدن پوست چرب", href: "#" },
        { id: 16, title: "شامپو بدن پوست خشک", href: "#" }
        ]
    },
    {
        id: 8,
        title: "عطر و ادکلن",
        links: [
        { id: 1, title: "عطر و ادکلن زنانه", href: "#" },
        { id: 2, title: "عطر و ادکلن مردانه", href: "#" },
        { id: 3, title: "بادی اسپلش", href: "#" },
        { id: 4, title: "عطر جیبی", href: "#" }
        ]
    },
    {
        id: 9,
        title: "لوازم شخصی برقی",
        links: [
        { id: 1, title: "سشوار", href: "#" },
        { id: 2, title: "اتو و حالت دهنده‌ی مو", href: "#" },
        { id: 3, title: "اصلاح موی صورت", href: "#" },
        { id: 4, title: "اصلاح موی سر", href: "#" },
        { id: 5, title: "لوازم جانبی ماشین اصلاح", href: "#" }
        ]
    }
    ]
    },
    {
    id: 7,
    title: "مد و پوشاک",
    icon: FiShoppingBag,
    allLink: {
        title: "همه محصولات مد و پوشاک",
        href: "#"
    },
    sections: [
    {
        id: 1,
        title: "پوشاک مردانه",
        links: [
        { id: 1, title: "پالتو، بارانی و کاپشن مردانه", href: "#" },
        { id: 2, title: "کاپشن مردانه", href: "#" },
        { id: 3, title: "پالتو مردانه", href: "#" },
        { id: 4, title: "کت چرم مردانه", href: "#" },
        { id: 5, title: "پافر مردانه", href: "#" }
        ]
    },
    {
        id: 2,
        title: "لباس مردانه",
        links: [
        { id: 1, title: "هودی مردانه", href: "#" },
        { id: 2, title: "سویشرت مردانه", href: "#" },
        { id: 3, title: "ژاکت و پلیور مردانه", href: "#" },
        { id: 4, title: "پولوشرت مردانه", href: "#" },
        { id: 5, title: "شلوار مردانه", href: "#" },
        { id: 6, title: "لباس زیر مردانه", href: "#" },
        { id: 7, title: "تی شرت مردانه", href: "#" },
        { id: 8, title: "پیراهن مردانه", href: "#" }
        ]
    },
    {
        id: 3,
        title: "کت، جلیقه و ست رسمی مردانه",
        links: [
        { id: 1, title: "کت تک مردانه", href: "#" },
        { id: 2, title: "کت شلوار مردانه", href: "#" },
        { id: 3, title: "جلیقه مردانه", href: "#" }
        ]
    },
    {
        id: 4,
        title: "شلوار مردانه",
        links: [
        { id: 1, title: "شلوارک مردانه", href: "#" },
        { id: 2, title: "شلوار اسلش مردانه", href: "#" },
        { id: 3, title: "شلوار مام استایل مردانه", href: "#" },
        { id: 4, title: "شلوار کارگو مردانه", href: "#" },
        { id: 5, title: "شلوار جین مردانه", href: "#" }
        ]
    },
    {
        id: 5,
        title: "لباس راحتی و زیرپوش مردانه",
        links: [
        { id: 1, title: "لباس راحتی مردانه", href: "#" },
        { id: 2, title: "جوراب مردانه", href: "#" },
        { id: 3, title: "زیرپوش مردانه", href: "#" },
        { id: 4, title: "شورت مردانه", href: "#" }
        ]
    },
    {
        id: 6,
        title: "کیف و کفش مردانه",
        links: [
        { id: 1, title: "کیف مردانه", href: "#" },
        { id: 2, title: "کیف پول مردانه", href: "#" },
        { id: 3, title: "کفش مردانه", href: "#" },
        { id: 4, title: "نیم بوت مردانه", href: "#" },
        { id: 5, title: "بوت مردانه", href: "#" },
        { id: 6, title: "کفش اسپرت مردانه", href: "#" },
        { id: 7, title: "کفش کالج مردانه", href: "#" },
        { id: 8, title: "صندل مردانه", href: "#" },
        { id: 9, title: "دمپایی مردانه", href: "#" },
        { id: 10, title: "دمپایی لا انگشتی مردانه", href: "#" },
        { id: 11, title: "گیوه مردانه", href: "#" }
        ]
    },
    {
        id: 7,
        title: "اکسسوری مردانه",
        links: [
        { id: 1, title: "عینک مردانه", href: "#" },
        { id: 2, title: "کمربند و ساسبند مردانه", href: "#" },
        { id: 3, title: "کلاه مردانه", href: "#" },
        { id: 4, title: "کراوات و پاپیون مردانه", href: "#" },
        { id: 5, title: "پک هدیه مردانه", href: "#" }
        ]
    },
    {
        id: 8,
        title: "ورزشی مردانه",
        links: [
        { id: 1, title: "لباس ورزشی مردانه", href: "#" },
        { id: 2, title: "مایو مردانه", href: "#" },
        { id: 3, title: "گرمکن و ست ورزشی مردانه", href: "#" },
        { id: 4, title: "اکسسوری ورزشی مردانه", href: "#" },
        { id: 5, title: "کفش ورزشی مردانه", href: "#" }
        ]
    },
    {
        id: 9,
        title: "ساعت",
        links: [
        { id: 1, title: "ساعت عقربه ای زنانه", href: "#" },
        { id: 2, title: "ساعت دیجیتال زنانه", href: "#" },
        { id: 3, title: "ساعت عقربه ای دخترانه", href: "#" },
        { id: 4, title: "ساعت دیجیتال دخترانه", href: "#" },
        { id: 5, title: "ساعت عقربه ای مردانه", href: "#" },
        { id: 6, title: "ساعت دیجیتال مردانه", href: "#" },
        { id: 7, title: "ساعت دیجیتال پسرانه", href: "#" },
        { id: 8, title: "ساعت عقربه ای پسرانه", href: "#" }
        ]
    },
    {
        id: 10,
        title: "پوشاک زنانه",
        links: [
        { id: 1, title: "پالتو، بارانی و کاپشن زنانه", href: "#" },
        { id: 2, title: "کاپشن زنانه", href: "#" },
        { id: 3, title: "پالتو زنانه", href: "#" },
        { id: 4, title: "کت چرم زنانه", href: "#" },
        { id: 5, title: "بارانی زنانه", href: "#" },
        { id: 6, title: "پافر زنانه", href: "#" }
        ]
    },
    {
        id: 11,
        title: "لباس زنانه",
        links: [
        { id: 1, title: "هودی زنانه", href: "#" },
        { id: 2, title: "سویشرت زنانه", href: "#" },
        { id: 3, title: "بافت و پلیور و ژاکت زنانه", href: "#" },
        { id: 4, title: "مانتو پانچو رویه", href: "#" },
        { id: 5, title: "بلوز و شومیز زنانه", href: "#" },
        { id: 6, title: "لباس راحتی زنانه", href: "#" },
        { id: 7, title: "تاپ و نیم تنه زنانه", href: "#" },
        { id: 8, title: "تیشرت زنانه", href: "#" },
        { id: 9, title: "دامن زنانه", href: "#" },
        { id: 10, title: "پیراهن و لباس مجلسی زنانه", href: "#" },
        { id: 11, title: "لباس خواب و راحتی زنانه", href: "#" },
        { id: 12, title: "لباس خواب زنانه", href: "#" },
        { id: 13, title: "بادی زنانه", href: "#" },
        { id: 14, title: "تونیک زنانه", href: "#" }
        ]
    },
    {
        id: 12,
        title: "کت، جلیقه و ست رسمی زنانه",
        links: [
        { id: 1, title: "کت، جلیقه و ست رسمی زنانه", href: "#" }
        ]
    },
    {
        id: 13,
        title: "لباس زیر زنانه",
        links: [
        { id: 1, title: "شورت زنانه", href: "#" },
        { id: 2, title: "سوتین", href: "#" },
        { id: 3, title: "گن زنانه", href: "#" },
        { id: 4, title: "گن لیزری", href: "#" },
        { id: 5, title: "گن ساعت شنی", href: "#" }
        ]
    },
    {
        id: 14,
        title: "شلوار و سرهمی زنانه",
        links: [
        { id: 1, title: "شلوار جین زنانه", href: "#" },
        { id: 2, title: "لگینگ زنانه", href: "#" },
        { id: 3, title: "شلوارک زنانه", href: "#" },
        { id: 4, title: "شلوار کارگو زنانه", href: "#" },
        { id: 5, title: "شلوار بگ زنانه", href: "#" },
        { id: 6, title: "شلوار مام استایل زنانه", href: "#" }
        ]
    },
    {
        id: 15,
        title: "مانتو زنانه",
        links: [
        { id: 1, title: "مانتو کوتاه", href: "#" },
        { id: 2, title: "مانتو بلند", href: "#" },
        { id: 3, title: "مانتو جلو باز", href: "#" },
        { id: 4, title: "مانتو کرپ", href: "#" },
        { id: 5, title: "مانتو دکمه مخفی", href: "#" },
        { id: 6, title: "مانتو مجلسی", href: "#" },
        { id: 7, title: "مانتو ابروبادی", href: "#" },
        { id: 8, title: "مانتو دکمه ای", href: "#" },
        { id: 9, title: "مانتو جلو بسته", href: "#" },
        { id: 10, title: "مانتو گیپور", href: "#" },
        { id: 11, title: "مانتو مخمل", href: "#" },
        { id: 12, title: "مانتو نخ", href: "#" },
        { id: 13, title: "مانتو گل‌دار", href: "#" },
        { id: 14, title: "مقنعه و پوشیه", href: "#" }
        ]
    },
    {
        id: 16,
        title: "لباس بارداری",
        links: [
        { id: 1, title: "شلوار و سرهمی بارداری", href: "#" },
        { id: 2, title: "پیراهن و لباس مجلسی بارداری", href: "#" }
        ]
    },
    {
        id: 17,
        title: "ورزشی زنانه",
        links: [
        { id: 1, title: "لباس ورزشی زنانه", href: "#" },
        { id: 2, title: "گرمکن و ست ورزشی زنانه", href: "#" },
        { id: 3, title: "تاپ و نیم تنه ورزشی زنانه", href: "#" },
        { id: 4, title: "شلوار و سرهمی ورزشی زنانه", href: "#" },
        { id: 5, title: "مایو زنانه", href: "#" }
        ]
    },
    {
        id: 18,
        title: "کفش و اکسسوری زنانه",
        links: [
        { id: 1, title: "کفش زنانه", href: "#" },
        { id: 2, title: "نیم بوت زنانه", href: "#" },
        { id: 3, title: "بوت زنانه", href: "#" },
        { id: 4, title: "کفش اسپرت زنانه", href: "#" },
        { id: 5, title: "کفش کالج زنانه", href: "#" },
        { id: 6, title: "صندل زنانه", href: "#" },
        { id: 7, title: "دمپایی لاانگشتی زنانه", href: "#" },
        { id: 8, title: "دمپایی زنانه", href: "#" },
        { id: 9, title: "گیوه زنانه", href: "#" },
        { id: 10, title: "کیف زنانه", href: "#" },
        { id: 11, title: "اکسسوری زنانه", href: "#" },
        { id: 12, title: "ساعت زنانه", href: "#" },
        { id: 13, title: "عینک زنانه", href: "#" },
        { id: 14, title: "کمربند زنانه", href: "#" },
        { id: 15, title: "ست هدیه زنانه", href: "#" }
        ]
    },
    {
        id: 19,
        title: "پوشاک بچگانه",
        links: [
        { id: 1, title: "ست راحتی و خواب بچگانه", href: "#" },
        { id: 2, title: "کفش و ست ورزشی بچگانه", href: "#" },
        { id: 3, title: "کیف و کوله و کفش بچگانه", href: "#" },
        { id: 4, title: "دمپایی و صندل بچگانه", href: "#" },
        { id: 5, title: "لباس پسرانه", href: "#" },
        { id: 6, title: "تیشرت پسرانه", href: "#" },
        { id: 7, title: "پوشاک دخترانه", href: "#" },
        { id: 8, title: "پیراهن دخترانه", href: "#" },
        { id: 9, title: "ست لباس دخترانه", href: "#" },
        { id: 10, title: "سویشرت و هودی دخترانه", href: "#" },
        { id: 11, title: "شلوار و سرهمی جین دخترانه", href: "#" }
        ]
    },
    {
        id: 20,
        title: "پوشاک نوزادی",
        links: [
        { id: 1, title: "ست لباس راحتی نوزاد", href: "#" },
        { id: 2, title: "بادی نوزادی", href: "#" },
        { id: 3, title: "ست نوزاد", href: "#" },
        { id: 4, title: "سرهمی نوزاد", href: "#" }
        ]
    },
    {
        id: 21,
        title: "برندها و داغ‌ترین‌ها",
        links: [
        { id: 1, title: "انبارتکانی پوشاک", href: "#" },
        { id: 2, title: "برند هامتو", href: "#" },
        { id: 3, title: "برند چرم مشهد", href: "#" },
        { id: 4, title: "برند اسمارا", href: "#" },
        { id: 5, title: "برند کروم", href: "#" },
        { id: 6, title: "برند سرژه", href: "#" },
        { id: 7, title: "برند گردیه", href: "#" },
        { id: 8, title: "برند چرم عطارد", href: "#" },
        { id: 9, title: "شلوار مام فیت", href: "#" }
        ]
    }
    ]
    },
    {
    id: 8,
    title: "طلا و نقره",
    icon: GiGoldBar,
    allLink: {
        title: "همه محصولات طلا و نقره",
        href: "#"
    },
    sections: [
    {
        id: 1,
        title: "شمش و سکه",
        links: [
        { id: 1, title: "شمش طلا", href: "#" },
        { id: 2, title: "سکه طلا", href: "#" },
        { id: 3, title: "ربع سکه", href: "#" },
        { id: 4, title: "نیم سکه", href: "#" },
        { id: 5, title: "سکه تمام", href: "#" },
        { id: 6, title: "سکه پارسیان", href: "#" },
        { id: 7, title: "سکه قسطی", href: "#" },
        { id: 8, title: "طلای آب شده", href: "#" },
        { id: 9, title: "طلای کم اجرت", href: "#" }
        ]
    },
    {
        id: 2,
        title: "طلای کم اجرت",
        links: [
        { id: 1, title: "گردنبند طلا کم اجرت (دست اول)", href: "#" },
        { id: 2, title: "النگو طلا کم اجرت (دست اول)", href: "#" },
        { id: 3, title: "دستبند طلا کم اجرت (دست اول)", href: "#" },
        { id: 4, title: "گوشواره طلا کم اجرت (دست اول)", href: "#" }
        ]
    },
    {
        id: 3,
        title: "گردنبند طلا زنانه",
        links: [
        { id: 1, title: "گردنبند مرواریدی زنانه", href: "#" },
        { id: 2, title: "گردنبند چشم نظر", href: "#" },
        { id: 3, title: "گردنبند ونکلیف", href: "#" },
        { id: 4, title: "گردنبند اسم و حروف", href: "#" },
        { id: 5, title: "گردنبند کارتیر", href: "#" },
        { id: 6, title: "گردنبند ماه تولد", href: "#" },
        { id: 7, title: "گردنبند رولباسی", href: "#" }
        ]
    },
    {
        id: 4,
        title: "زنجیر طلا",
        links: [
        { id: 1, title: "زنجیر فلامینگو", href: "#" },
        { id: 2, title: "زنجیر ونیزی", href: "#" },
        { id: 3, title: "زنجیر میرو", href: "#" },
        { id: 4, title: "زنجیر تیغ ماهی", href: "#" }
        ]
    },
    {
        id: 5,
        title: "گوشواره طلا",
        links: [
        { id: 1, title: "گوشواره بخیه ای", href: "#" },
        { id: 2, title: "گوشواره کلیپسی", href: "#" },
        { id: 3, title: "گوشواره میخی", href: "#" },
        { id: 4, title: "گوشواره حلقه ای", href: "#" }
        ]
    },
    {
        id: 6,
        title: "انگشتر طلا زنانه",
        links: [
        { id: 1, title: "انگشتر نگین دار", href: "#" },
        { id: 2, title: "انگشتر کارتیر", href: "#" },
        { id: 3, title: "انگشتر ونکلیف", href: "#" },
        { id: 4, title: "انگشتر ظریف", href: "#" },
        { id: 5, title: "انگشتر چشم نظر", href: "#" },
        { id: 6, title: "بند انگشتی طلا", href: "#" },
        { id: 7, title: "انگشتر مرواریدی", href: "#" },
        { id: 8, title: "انگشتر بدون نگین", href: "#" }
        ]
    },
    {
        id: 7,
        title: "دستبند طلا زنانه",
        links: [
        { id: 1, title: "دستنبد کارتیر", href: "#" },
        { id: 2, title: "دستبند چشم نظر", href: "#" },
        { id: 3, title: "دستبند مرواریدی", href: "#" },
        { id: 4, title: "دستبند چرم و طلا", href: "#" },
        { id: 5, title: "دستبند تیفانی", href: "#" },
        { id: 6, title: "دستنبد اسم و حروف", href: "#" }
        ]
    },
    {
        id: 8,
        title: "اکسسوری طلا",
        links: [
        { id: 1, title: "پابند طلا", href: "#" },
        { id: 2, title: "پیرسینگ طلا زنانه", href: "#" },
        { id: 3, title: "ست زیورآلات طلا زنانه", href: "#" },
        { id: 4, title: "اکسسوری طلا", href: "#" },
        { id: 5, title: "جاکلیدی طلا", href: "#" },
        { id: 6, title: "آویز ساعت طلا", href: "#" },
        { id: 7, title: "دکمه سردست طلا", href: "#" }
        ]
    },
    {
        id: 9,
        title: "زیورآلات طلا مردانه",
        links: [
        { id: 1, title: "انگشتر طلا مردانه", href: "#" },
        { id: 2, title: "زنجیر طلا مردانه", href: "#" },
        { id: 3, title: "گردنبند طلا مردانه", href: "#" },
        { id: 4, title: "دستبند طلا مردانه", href: "#" },
        { id: 5, title: "ست زیورآلات طلا مردانه", href: "#" }
        ]
    },
    {
        id: 10,
        title: "زیورآلات طلا زنانه و مردانه",
        links: [
        { id: 1, title: "زیورآلات طلا زنانه و مردانه", href: "#" }
        ]
    },
    {
        id: 11,
        title: "زیورآلات طلا بچگانه",
        links: [
        { id: 1, title: "دستبند طلا بچگانه", href: "#" },
        { id: 2, title: "گوشواره طلا بچگانه", href: "#" },
        { id: 3, title: "ست زیورآلات طلا بچگانه", href: "#" },
        { id: 4, title: "گردنبند طلا بچگانه", href: "#" },
        { id: 5, title: "آویز طلا بچگانه", href: "#" },
        { id: 6, title: "انگشتر طلا بچگانه", href: "#" },
        { id: 7, title: "گل سینه طلا بچگانه", href: "#" }
        ]
    }
    ]
    },
    {
    id: 9,
    title: "خودرو و موتورسیکلت",
    icon: FiTruck,
    allLink: {
        title: "همه محصولات خودرو و موتورسیکلت",
        href: "#"
    },
    sections: [
    {
        id: 1,
        title: "خودرو و موتورسیکلت",
        links: [
        { id: 1, title: "موتور سیکلت", href: "#" },
        { id: 2, title: "خودرو", href: "#" }
        ]
    },
    {
        id: 2,
        title: "لوازم مصرفی خودرو",
        links: [
        { id: 1, title: "روغن موتور", href: "#" },
        { id: 2, title: "فیلترها", href: "#" },
        { id: 3, title: "قطعات سرویسی", href: "#" },
        { id: 4, title: "روغن گیربکس", href: "#" },
        { id: 5, title: "روغن هیدرولیک", href: "#" },
        { id: 6, title: "ضدیخ و آب رادیاتور", href: "#" },
        { id: 7, title: "باتری", href: "#" },
        { id: 8, title: "لاستیک", href: "#" },
        { id: 9, title: "مکمل سوخت و روغن", href: "#" },
        { id: 10, title: "واکس و پولیش", href: "#" },
        { id: 11, title: "لوازم نظافت خودرو", href: "#" }
        ]
    },
    {
        id: 3,
        title: "لوازم یدکی خودرو",
        links: [
        { id: 1, title: "لوازم بدنه", href: "#" },
        { id: 2, title: "چراغ", href: "#" },
        { id: 3, title: "آینه جانبی", href: "#" },
        { id: 4, title: "لوازم جلوبندی و تعلیق", href: "#" },
        { id: 5, title: "لوازم الکترونیکی", href: "#" },
        { id: 6, title: "لوازم مکانیکی", href: "#" }
        ]
    },
    {
        id: 4,
        title: "لوازم صوتی و تصویری",
        links: [
        { id: 1, title: "دوربین ثبت وقایع خودرو", href: "#" },
        { id: 2, title: "دستگاه پخش", href: "#" },
        { id: 3, title: "بلندگو", href: "#" },
        { id: 4, title: "آمپلی فایر", href: "#" },
        { id: 5, title: "اف ام پلیر", href: "#" },
        { id: 6, title: "مسیریاب خودرو", href: "#" },
        { id: 7, title: "لوازم جانبی صوتی و تصویری", href: "#" }
        ]
    },
    {
        id: 5,
        title: "لوازم جانبی خودرو",
        links: [
        { id: 1, title: "کفپوش خودرو", href: "#" },
        { id: 2, title: "دوربین ثبت وقایع خودرو", href: "#" },
        { id: 3, title: "روکش صندلی", href: "#" },
        { id: 4, title: "زنجیر چرخ", href: "#" },
        { id: 5, title: "آفتابگیر خودرو", href: "#" },
        { id: 6, title: "تجهیزات نظم دهنده", href: "#" },
        { id: 7, title: "هدلایت", href: "#" },
        { id: 8, title: "کفپوش صندوق خودرو", href: "#" },
        { id: 9, title: "چادر خودرو", href: "#" },
        { id: 10, title: "عایق کاپوت، صندوق و دربها", href: "#" },
        { id: 11, title: "تجهیزات راحتی سرنشین", href: "#" },
        { id: 12, title: "لوازم ضد سرقت", href: "#" },
        { id: 13, title: "پا رکابی", href: "#" },
        { id: 14, title: "اسپویلر و دیفیوزر", href: "#" },
        { id: 15, title: "جاسوئیچی", href: "#" },
        { id: 16, title: "خوشبوکننده و تصفیه کننده هوای کابین", href: "#" },
        { id: 17, title: "باربند", href: "#" },
        { id: 18, title: "سر اگزوز", href: "#" },
        { id: 19, title: "سر دنده", href: "#" },
        { id: 20, title: "لوازم تزئینی خودرو", href: "#" },
        { id: 21, title: "تجهیزات آفرود", href: "#" },
        { id: 22, title: "تیونینگ و تقویت موتور", href: "#" },
        { id: 23, title: "جک خودرو", href: "#" },
        { id: 24, title: "کمربند ایمنی", href: "#" },
        { id: 25, title: "آنتن خودرو", href: "#" },
        { id: 26, title: "والف لاستیک", href: "#" },
        { id: 27, title: "بوق خودرو", href: "#" },
        { id: 28, title: "غربیلک فرمان", href: "#" },
        { id: 29, title: "سایر لوازم جانبی", href: "#" }
        ]
    },
    {
        id: 6,
        title: "لوازم موتور سیکلت",
        links: [
        { id: 1, title: "لوازم مصرفی", href: "#" },
        { id: 2, title: "لوازم یدکی", href: "#" },
        { id: 3, title: "لوازم جانبی", href: "#" },
        { id: 4, title: "لوازم ضد سرقت", href: "#" }
        ]
    },
    {
        id: 7,
        title: "لوازم بر اساس نوع خودرو",
        links: [
        { id: 1, title: "206-207", href: "#" },
        { id: 2, title: "L90-ساندرو", href: "#" },
        { id: 3, title: "پرشیا-پژو 405", href: "#" },
        { id: 4, title: "پراید-تیبا", href: "#" },
        { id: 5, title: "سمند-دنا", href: "#" },
        { id: 6, title: "کوئیک-ساینا", href: "#" },
        { id: 7, title: "زانتیا-برلیانس", href: "#" },
        { id: 8, title: "MVM-فونیکس", href: "#" },
        { id: 9, title: "جک-لیفان", href: "#" },
        { id: 10, title: "هیوندای-کیا", href: "#" },
        { id: 11, title: "تویوتا-رنو", href: "#" }
        ]
    }
    ]
    },
    {
    id: 10,
    title: "سلامت و پزشکی",
    icon: FiHeart,
    allLink: {
        title: "همه محصولات سلامت و پزشکی",
        href: "#"
    },
    sections: [
    {
        id: 1,
        title: "تجهیزات پزشکی",
        links: [
        { id: 1, title: "فشارسنج", href: "#" },
        { id: 2, title: "دماسنج محیطی", href: "#" },
        { id: 3, title: "ترازو", href: "#" },
        { id: 4, title: "تب سنج و دماسنج", href: "#" },
        { id: 5, title: "رطوبت‌ گیر", href: "#" },
        { id: 6, title: "پد و کیسه آب گرم", href: "#" },
        { id: 7, title: "تشک و پتوی برقی", href: "#" },
        { id: 8, title: "ماسک تنفسی", href: "#" },
        { id: 9, title: "کیسه نمک-درد", href: "#" },
        { id: 10, title: "تجهیزات پزشکی حرفه ای", href: "#" },
        { id: 11, title: "لوازم پزشک", href: "#" }
        ]
    },
    {
        id: 2,
        title: "تجهیزات پزشکی تنفسی",
        links: [
        { id: 1, title: "دستگاه بخور و رطوبت ساز", href: "#" },
        { id: 2, title: "دستگاه بخور سرد", href: "#" },
        { id: 3, title: "دستگاه بخور گرم", href: "#" },
        { id: 4, title: "پالس اکسیمتر", href: "#" },
        { id: 5, title: "تجهیزات کمکی تنفسی", href: "#" }
        ]
    },
    {
        id: 3,
        title: "مکمل غذایی",
        links: [
        { id: 1, title: "مکمل کمک درمانی", href: "#" },
        { id: 2, title: "مکمل کودک و نوزاد", href: "#" },
        { id: 3, title: "اعصاب و روان", href: "#" },
        { id: 4, title: "بینایی", href: "#" },
        { id: 5, title: "بهداشت و سلامت جنسی", href: "#" },
        { id: 6, title: "پوست مو و ناخن", href: "#" },
        { id: 7, title: "ترک اعتیاد", href: "#" },
        { id: 8, title: "تسکین درد", href: "#" },
        { id: 9, title: "سیستم ایمنی", href: "#" },
        { id: 10, title: "سرماخوردگی و آنفلوانزا", href: "#" },
        { id: 11, title: "سیستم تنفسی و آلرژی", href: "#" },
        { id: 12, title: "سیستم گوارشی", href: "#" },
        { id: 13, title: "قلب و عروق", href: "#" },
        { id: 14, title: "کلیه و مجاری ادرار", href: "#" },
        { id: 15, title: "کنترل قند خون", href: "#" },
        { id: 16, title: "مفاصل و استخوان", href: "#" }
        ]
    },
    {
        id: 4,
        title: "مکمل ورزشی",
        links: [
        { id: 1, title: "پروتئین", href: "#" },
        { id: 2, title: "آمینو اسید", href: "#" },
        { id: 3, title: "کراتین", href: "#" },
        { id: 4, title: "مکمل افزایش وزن", href: "#" },
        { id: 5, title: "مکمل کاهش وزن", href: "#" }
        ]
    },
    {
        id: 5,
        title: "ویتامین",
        links: [
        { id: 1, title: "ویتامین C", href: "#" },
        { id: 2, title: "ویتامین D", href: "#" },
        { id: 3, title: "ویتامین B", href: "#" },
        { id: 4, title: "ویتامین D3", href: "#" },
        { id: 5, title: "ویتامین E", href: "#" },
        { id: 6, title: "ویتامین K", href: "#" },
        { id: 7, title: "امگا ۳", href: "#" }
        ]
    },
    {
        id: 6,
        title: "مواد معدنی",
        links: [
        { id: 1, title: "قرص آهن", href: "#" },
        { id: 2, title: "قرص کلسیم", href: "#" },
        { id: 3, title: "قرص منیزیم", href: "#" },
        { id: 4, title: "قرص کروم", href: "#" },
        { id: 5, title: "قرص ید", href: "#" },
        { id: 6, title: "قرص زینک", href: "#" },
        { id: 7, title: "قرص سدیم", href: "#" },
        { id: 8, title: "قرص روی", href: "#" }
        ]
    },
    {
        id: 7,
        title: "ارتوپدی و کمک درمانی",
        links: [
        { id: 1, title: "توانبخشی", href: "#" },
        { id: 2, title: "ساپورت‌های طبی", href: "#" }
        ]
    },
    {
        id: 8,
        title: "کنترل دیابت",
        links: [
        { id: 1, title: "دستگاه تست قند خون", href: "#" },
        { id: 2, title: "نوار تست قند خون", href: "#" },
        { id: 3, title: "سوزن تست قند خون", href: "#" },
        { id: 4, title: "سرنگ انسولین", href: "#" },
        { id: 5, title: "کیف خنک نگه دارنده انسولین", href: "#" }
        ]
    },
    {
        id: 9,
        title: "لوازم پزشکی مصرفی",
        links: [
        { id: 1, title: "سوند و کتترهای ادراری", href: "#" },
        { id: 2, title: "تزریقات", href: "#" },
        { id: 3, title: "پانسمان", href: "#" },
        { id: 4, title: "چسب پانسمان", href: "#" },
        { id: 5, title: "محصولات سلولزی طبی", href: "#" },
        { id: 6, title: "کیت تشخیص", href: "#" },
        { id: 7, title: "البسه بیمارستانی", href: "#" },
        { id: 8, title: "دستکش‌های طبی", href: "#" },
        { id: 9, title: "ضد عفونی کننده زخم", href: "#" },
        { id: 10, title: "لوازم پزشکی مصرفی عمومی", href: "#" },
        { id: 11, title: "آزمایشگاهی", href: "#" }
        ]
    },
    {
        id: 10,
        title: "تجهیزات دندانپزشکی",
        links: [
        { id: 1, title: "تجهیزات تخصصی دندانپزشکی", href: "#" },
        { id: 2, title: "تجهیزات عمومی دندانپزشکی", href: "#" },
        { id: 3, title: "مراقبت دهان و دندان", href: "#" }
        ]
    },
    {
        id: 11,
        title: "ماساژور",
        links: [
        { id: 1, title: "ماساژور دستی", href: "#" },
        { id: 2, title: "صندلی ماساژور", href: "#" },
        { id: 3, title: "ماساژور برقی", href: "#" }
        ]
    }
    ]
    },
    {
    id: 11,
    title: "ابزارآلات و تجهیزات",
    icon: FiTool,
    allLink: {
        title: "همه محصولات ابزارآلات و تجهیزات",
        href: "#"
    },
    sections: [
    {
        id: 1,
        title: "ابزار برقی",
        links: [
        { id: 1, title: "دریل", href: "#" },
        { id: 2, title: "پیچ گوشتی و دریل شارژی", href: "#" },
        { id: 3, title: "آچار ضربه ای", href: "#" },
        { id: 4, title: "فرز و سنگ رومیزی", href: "#" },
        { id: 5, title: "موتور برق", href: "#" },
        { id: 6, title: "مکنده - دمنده", href: "#" },
        { id: 7, title: "جاروبرقی صنعتی", href: "#" },
        { id: 8, title: "کارواش", href: "#" },
        { id: 9, title: "دستگاه جوش", href: "#" },
        { id: 10, title: "هویه", href: "#" },
        { id: 11, title: "ابزار برش و تراشکاری", href: "#" },
        { id: 12, title: "کمپرسور هوا", href: "#" },
        { id: 13, title: "مولتی متر", href: "#" },
        { id: 14, title: "لوازم جانبی و یدکی ابزار برقی", href: "#" },
        { id: 15, title: "اره زنجیری", href: "#" }
        ]
    },
    {
        id: 2,
        title: "ابزار غیر برقی",
        links: [
        { id: 1, title: "ابزار دستی", href: "#" },
        { id: 2, title: "مجموعه ابزار", href: "#" },
        { id: 3, title: "نردبان", href: "#" },
        { id: 4, title: "پیچ گوشتی و فازمتر", href: "#" },
        { id: 5, title: "نظم دهنده ابزار", href: "#" },
        { id: 6, title: "متر، تراز، اندازه‌گیری دقیق", href: "#" },
        { id: 7, title: "لوازم روانکاری", href: "#" },
        { id: 8, title: "چسب صنعتی", href: "#" },
        { id: 9, title: "پیچ و مهره، رول پلاک، میخ و پرچ", href: "#" },
        { id: 10, title: "مته و سری", href: "#" },
        { id: 11, title: "اره", href: "#" },
        { id: 12, title: "لوازم بسته بندی", href: "#" }
        ]
    },
    {
        id: 3,
        title: "انواع آچار و انبر",
        links: [
        { id: 1, title: "آچار فرانسه", href: "#" },
        { id: 2, title: "آچار شلاقی (آچار لوله‌گیر)", href: "#" },
        { id: 3, title: "آچار آلن", href: "#" }
        ]
    },
    {
        id: 4,
        title: "لوازم الکتریکی و یراق آلات",
        links: [
        { id: 1, title: "رنگ", href: "#" },
        { id: 2, title: "لوازم الکتریکی", href: "#" },
        { id: 3, title: "مصالح ساختمانی", href: "#" },
        { id: 4, title: "زنگ و در بازکن", href: "#" }
        ]
    },
    {
        id: 5,
        title: "لوازم باغبانی و کشاورزی",
        links: [
        { id: 1, title: "ابزار باغبانی", href: "#" },
        { id: 2, title: "ادوات کشاورزی", href: "#" },
        { id: 3, title: "بذر و تخم گیاهان", href: "#" },
        { id: 4, title: "خاک، کود و آفت کش", href: "#" },
        { id: 5, title: "کاشت و پرورش گیاه", href: "#" }
        ]
    },
    {
        id: 6,
        title: "تجهیزات ایمنی و کار",
        links: [
        { id: 1, title: "ماسک تنفسی", href: "#" },
        { id: 2, title: "لوازم آتش‌نشانی", href: "#" },
        { id: 3, title: "لوازم ایمنی و کار", href: "#" },
        { id: 4, title: "جعبه کمک‌های اولیه", href: "#" },
        { id: 5, title: "برچسب و علائم ایمنی", href: "#" }
        ]
    },
    {
        id: 7,
        title: "حفاظتی و امنیتی",
        links: [
        { id: 1, title: "گاوصندوق", href: "#" },
        { id: 2, title: "قفل", href: "#" }
        ]
    },
    {
        id: 8,
        title: "صنعتی و کارگاهی",
        links: [
        { id: 1, title: "دستگاه های حمل و بالابر صنعتی", href: "#" },
        { id: 2, title: "قطعات یدکی ماشین آلات صنعتی", href: "#" },
        { id: 3, title: "تجهیزات کارگاهی", href: "#" },
        { id: 4, title: "مخزن آب", href: "#" }
        ]
    },
    {
        id: 9,
        title: "شیرآلات",
        links: [
        { id: 1, title: "ست شیرآلات", href: "#" },
        { id: 2, title: "شیر ظرفشویی", href: "#" },
        { id: 3, title: "شیر روشویی", href: "#" },
        { id: 4, title: "شیرآلات حمام", href: "#" },
        { id: 5, title: "شیر توالت", href: "#" },
        { id: 6, title: "اتصالات جانبی", href: "#" }
        ]
    }
    ]
    },
    {
    id: 12,
    title: "کتاب و هنر",
    icon: FiBook,
    allLink: {
        title: "همه محصولات کتاب و هنر",
        href: "#"
    },
    sections: [
    {
        id: 1,
        title: "کتاب و مجله",
        links: [
        { id: 1, title: "کتاب چاپی", href: "#" },
        { id: 2, title: "مجلات خارجی و داخلی", href: "#" }
        ]
    },
    {
        id: 2,
        title: "محبوب‌ترین آثار",
        links: [
        { id: 1, title: "کتاب های سعدی", href: "#" },
        { id: 2, title: "کتاب های حافظ", href: "#" },
        { id: 3, title: "کتاب های خیام", href: "#" },
        { id: 4, title: "کتاب های فردوسی", href: "#" },
        { id: 5, title: "کتاب های مولانا", href: "#" },
        { id: 6, title: "کتاب های شهریار", href: "#" },
        { id: 7, title: "کتاب های فروغ فرخزاد", href: "#" },
        { id: 8, title: "کتاب های هوشنگ ابتهاج", href: "#" },
        { id: 9, title: "کتاب های سهراب سپهری", href: "#" },
        { id: 10, title: "کتاب های سیمین دانشور", href: "#" },
        { id: 11, title: "کتاب های جورج اورول", href: "#" },
        { id: 12, title: "کتاب های هری پاتر", href: "#" },
        { id: 13, title: "کتاب های آشپزی", href: "#" },
        { id: 14, title: "کتاب صوتی", href: "#" }
        ]
    },
    {
        id: 3,
        title: "محتوای آموزشی",
        links: [
        { id: 1, title: "آموزش موسیقی", href: "#" },
        { id: 2, title: "آموزش ورزش و سرگرمی", href: "#" },
        { id: 3, title: "آموزش زبان", href: "#" },
        { id: 4, title: "آموزش نرم افزار و کامپیوتر", href: "#" }
        ]
    },
    {
        id: 4,
        title: "نرم افزار و رسانه",
        links: [
        { id: 1, title: "نرم افزار", href: "#" },
        { id: 2, title: "بازی کنسول و کامپیوتر", href: "#" },
        { id: 3, title: "فیلم سینمایی، سریال و مستند", href: "#" },
        { id: 4, title: "آلبوم موسیقی", href: "#" }
        ]
    },
    {
        id: 5,
        title: "لوازم تحریر",
        links: [
        { id: 1, title: "لوازم اداری و اقلام مصرفی", href: "#" },
        { id: 2, title: "کیف، کوله پشتی و جامدادی", href: "#" },
        { id: 3, title: "چراغ مطالعه", href: "#" },
        { id: 4, title: "کاغذ کادو، پاکت و کارت هدیه", href: "#" },
        { id: 5, title: "نوشت افزار", href: "#" },
        { id: 6, title: "دفتر و کاغذ", href: "#" },
        { id: 7, title: "خودکار و روان نویس", href: "#" },
        { id: 8, title: "ابزار نقاشی و رنگ آمیزی", href: "#" },
        { id: 9, title: "میز تحریر", href: "#" },
        { id: 10, title: "آلبوم عکس", href: "#" },
        { id: 11, title: "کاغذ چاپ و پرینتر", href: "#" },
        { id: 12, title: "مداد و مداد رنگی", href: "#" }
        ]
    },
    {
        id: 6,
        title: "آلات موسیقی",
        links: [
        { id: 1, title: "لوازم جانبی آلات موسیقی", href: "#" },
        { id: 2, title: "گیتار", href: "#" },
        { id: 3, title: "کیبورد و ارگ", href: "#" },
        { id: 4, title: "پیانو دیجیتال", href: "#" },
        { id: 5, title: "درام، پرکاشن، دف", href: "#" },
        { id: 6, title: "تجهیزات استودیویی", href: "#" },
        { id: 7, title: "ویولن", href: "#" },
        { id: 8, title: "سازهای ایرانی", href: "#" }
        ]
    },
    {
        id: 7,
        title: "صنایع دستی",
        links: [
        { id: 1, title: "کالاهای مس", href: "#" },
        { id: 2, title: "سفال، سرامیک و چینی", href: "#" },
        { id: 3, title: "کیف چرمی", href: "#" },
        { id: 4, title: "ترمه، قلمکار و دستبافت", href: "#" },
        { id: 5, title: "خاتم، منبت، حصیری و چوبی", href: "#" },
        { id: 6, title: "تابلو و ساعت", href: "#" },
        { id: 7, title: "میناکاری", href: "#" },
        { id: 8, title: "فیروزه کوبی", href: "#" },
        { id: 9, title: "سوزن دوزی", href: "#" },
        { id: 10, title: "محصولات استخوانی", href: "#" },
        { id: 11, title: "جعبه و دست سازه های هنری", href: "#" }
        ]
    }
    ]
    },
    {
    id: 13,
    title: "ورزش و سفر",
    icon: FiWatch,
    allLink: {
        title: "همه محصولات ورزش و سفر",
        href: "#"
    },
    sections: [
    {
        id: 1,
        title: "پوشاک و کفش ورزشی",
        links: [
        { id: 1, title: "پوشاک ورزشی مردانه", href: "#" },
        { id: 2, title: "پوشاک ورزشی زنانه", href: "#" },
        { id: 3, title: "کفش ورزشی مردانه", href: "#" },
        { id: 4, title: "کفش فوتبال", href: "#" },
        { id: 5, title: "کفش فوتسال", href: "#" },
        { id: 6, title: "کفش ورزشی زنانه", href: "#" },
        { id: 7, title: "پوشاک ورزشی پسرانه", href: "#" },
        { id: 8, title: "پوشاک ورزشی دخترانه", href: "#" },
        { id: 9, title: "کفش ورزشی پسرانه", href: "#" },
        { id: 10, title: "کفش ورزشی دخترانه", href: "#" }
        ]
    },
    {
        id: 2,
        title: "تجهیزات سفر",
        links: [
        { id: 1, title: "ساک و چمدان", href: "#" },
        { id: 2, title: "کیف و کوله پشتی", href: "#" },
        { id: 3, title: "دوچرخه", href: "#" },
        { id: 4, title: "دوچرخه ۲۰", href: "#" },
        { id: 5, title: "دوچرخه ۲۴", href: "#" },
        { id: 6, title: "دوچرخه برقی", href: "#" },
        { id: 7, title: "لوازم جانبی دوچرخه", href: "#" }
        ]
    },
    {
        id: 3,
        title: "لوازم کوهنوردی و کمپینگ",
        links: [
        { id: 1, title: "کفش کوهنوردی", href: "#" },
        { id: 2, title: "عصای کوهنوردی", href: "#" },
        { id: 3, title: "چراغ قوه", href: "#" },
        { id: 4, title: "چاقو و ابزار چندکاره", href: "#" },
        { id: 5, title: "قمقمه و فلاسک", href: "#" },
        { id: 6, title: "چادر", href: "#" },
        { id: 7, title: "کیسه خواب", href: "#" },
        { id: 8, title: "زیرانداز سفری", href: "#" },
        { id: 9, title: "تجهیزات جانبی سفر و کمپینگ", href: "#" },
        { id: 10, title: "میز و صندلی سفری", href: "#" },
        { id: 11, title: "یخ خشک", href: "#" },
        { id: 12, title: "چتر", href: "#" },
        { id: 13, title: "ساک ورزشی", href: "#" },
        { id: 14, title: "قمقمه و شیکر", href: "#" }
        ]
    },
    {
        id: 4,
        title: "لوازم ورزشی",
        links: [
        { id: 1, title: "ورزش های هوازی و بدنسازی", href: "#" },
        { id: 2, title: "تجهیزات جانبی ایروبیک و تناسب اندام", href: "#" },
        { id: 3, title: "دمبل", href: "#" },
        { id: 4, title: "طناب", href: "#" },
        { id: 5, title: "بارفیکس", href: "#" },
        { id: 6, title: "تردمیل", href: "#" },
        { id: 7, title: "لوازم پوششی و محافظتی ورزشی", href: "#" },
        { id: 8, title: "ورزش های توپی", href: "#" },
        { id: 9, title: "توپ", href: "#" },
        { id: 10, title: "راکت", href: "#" },
        { id: 11, title: "ورزش های آبی", href: "#" },
        { id: 12, title: "ورزش های رزمی", href: "#" }
        ]
    },
    {
        id: 5,
        title: "اسکیت و اسکوتر",
        links: [
        { id: 1, title: "اسکوتر برقی", href: "#" },
        { id: 2, title: "اسکیت و اسکوتر", href: "#" }
        ]
    }
    ]
    },
    {
    id: 14,
    title: "کارت هدیه و گیفت کارت",
    icon: FiGift,
    allLink: {
        title: "همه محصولات کارت هدیه و گیفت کارت",
        href: "#"
    },
    sections: [
    {
        id: 1,
        title: "کارت هدیه فیزیکی دیجی کالا",
        links: [
        { id: 1, title: "کارت هدیه فیزیکی دیجی کالا", href: "#" }
        ]
    },
    {
        id: 2,
        title: "کارت هدیه براساس مناسبت",
        links: [
        { id: 1, title: "کارت هدیه تولد", href: "#" },
        { id: 2, title: "کارت هدیه روز مادر", href: "#" },
        { id: 3, title: "کارت هدیه روز معلم", href: "#" },
        { id: 4, title: "کارت هدیه سالگرد", href: "#" },
        { id: 5, title: "کارت هدیه تشکر", href: "#" },
        { id: 6, title: "کارت هدیه دوستی", href: "#" },
        { id: 7, title: "کارت هدیه ازدواج", href: "#" },
        { id: 8, title: "کارت هدیه نوزاد", href: "#" },
        { id: 9, title: "کارت هدیه خانه نو", href: "#" },
        { id: 10, title: "کارت هدیه فارغ التحصیلی", href: "#" },
        { id: 11, title: "کارت هدیه عید نوروز", href: "#" },
        { id: 12, title: "کارت هدیه شب یلدا", href: "#" }
        ]
    },
    {
        id: 3,
        title: "کارت هدیه براساس قیمت",
        links: [
        { id: 1, title: "کارت هدیه تا 500 هزار تومان", href: "#" },
        { id: 2, title: "کارت هدیه از 500 هزار تا 2 میلیون تومان", href: "#" },
        { id: 3, title: "کارت هدیه از 2 میلیون تا 5 میلیون تومان", href: "#" },
        { id: 4, title: "کارت هدیه 5 میلیون تومانی", href: "#" },
        { id: 5, title: "کارت هدیه از 5 میلیون تا 10 میلیون تومان", href: "#" },
        { id: 6, title: "کارت هدیه از 10 میلیون تا 20 میلیون تومان", href: "#" },
        { id: 7, title: "کارت هدیه بیش از 20 میلیون تومان", href: "#" }
        ]
    }
    ]
    },
    {
    id: 15,
    title: "سوپر مارکت آنلاین",
    icon: FiCoffee,
    allLink: {
        title: "همه محصولات سوپر مارکت آنلاین",
        href: "#"
    },
    sections: [
    {
        id: 1,
        title: "کالاهای اساسی و خواربار",
        links: [
        { id: 1, title: "ماکارونی", href: "#" },
        { id: 2, title: "برنج", href: "#" },
        { id: 3, title: "نبات", href: "#" },
        { id: 4, title: "قند", href: "#" },
        { id: 5, title: "شکر", href: "#" },
        { id: 6, title: "رب گوجه", href: "#" },
        { id: 7, title: "رب انار", href: "#" }
        ]
    },
    {
        id: 2,
        title: "روغن",
        links: [
        { id: 1, title: "روغن", href: "#" },
        { id: 2, title: "روغن مایع", href: "#" },
        { id: 3, title: "روغن جامد و نیمه جامد", href: "#" },
        { id: 4, title: "روغن زیتون", href: "#" },
        { id: 5, title: "روغن ذرت", href: "#" },
        { id: 6, title: "روغن کنجد", href: "#" },
        { id: 7, title: "روغن حیوانی", href: "#" }
        ]
    },
    {
        id: 3,
        title: "چای، دمنوش و قهوه",
        links: [
        { id: 1, title: "چای و دمنوش", href: "#" },
        { id: 2, title: "چای سیاه", href: "#" },
        { id: 3, title: "چای سبز", href: "#" },
        { id: 4, title: "دمنوش", href: "#" },
        { id: 5, title: "چای ماسالا", href: "#" },
        { id: 6, title: "قهوه", href: "#" },
        { id: 7, title: "دانه قهوه", href: "#" },
        { id: 8, title: "قهوه فوری", href: "#" },
        { id: 9, title: "قهوه اسپرسو", href: "#" }
        ]
    },
    {
        id: 4,
        title: "غذاهای آماده و نیمه آماده",
        links: [
        { id: 1, title: "تن ماهی", href: "#" },
        { id: 2, title: "نودل", href: "#" },
        { id: 3, title: "غذاهای آماده کنسروی", href: "#" }
        ]
    },
    {
        id: 5,
        title: "حبوبات و سویا",
        links: [
        { id: 1, title: "عدس", href: "#" },
        { id: 2, title: "ماش", href: "#" },
        { id: 3, title: "کینوا", href: "#" },
        { id: 4, title: "لپه", href: "#" },
        { id: 5, title: "نخود", href: "#" },
        { id: 6, title: "لوبیا", href: "#" },
        { id: 7, title: "سویا", href: "#" }
        ]
    },
    {
        id: 6,
        title: "ادویه و افزودنی",
        links: [
        { id: 1, title: "زعفران", href: "#" },
        { id: 2, title: "زرشک", href: "#" },
        { id: 3, title: "فلفل", href: "#" },
        { id: 4, title: "نمک", href: "#" },
        { id: 5, title: "هل", href: "#" },
        { id: 6, title: "زنجبیل", href: "#" },
        { id: 7, title: "زردچوبه", href: "#" }
        ]
    },
    {
        id: 7,
        title: "صبحانه",
        links: [
        { id: 1, title: "کره بادام زمینی", href: "#" },
        { id: 2, title: "شکلات صبحانه", href: "#" },
        { id: 3, title: "غلات صبحانه", href: "#" },
        { id: 4, title: "عسل", href: "#" }
        ]
    },
    {
        id: 8,
        title: "نوشیدنی",
        links: [
        { id: 1, title: "شیر کاکائو", href: "#" },
        { id: 2, title: "آب معدنی", href: "#" },
        { id: 3, title: "نوشابه", href: "#" },
        { id: 4, title: "ماء الشعیر", href: "#" },
        { id: 5, title: "انرژی زا", href: "#" },
        { id: 6, title: "شربت و آبمیوه", href: "#" },
        { id: 7, title: "عرقیات و گلاب", href: "#" }
        ]
    },
    {
        id: 9,
        title: "ترشی و شور",
        links: [
        { id: 1, title: "زیتون", href: "#" },
        { id: 2, title: "ترشی", href: "#" },
        { id: 3, title: "شور", href: "#" },
        { id: 4, title: "خیارشور", href: "#" }
        ]
    },
    {
        id: 10,
        title: "تنقلات",
        links: [
        { id: 1, title: "چیپس", href: "#" },
        { id: 2, title: "پفک", href: "#" },
        { id: 3, title: "تخمه", href: "#" },
        { id: 4, title: "لواشک", href: "#" },
        { id: 5, title: "کیک و کلوچه", href: "#" },
        { id: 6, title: "شکلات", href: "#" },
        { id: 7, title: "پاستیل", href: "#" },
        { id: 8, title: "آدامس", href: "#" },
        { id: 9, title: "بیسکویت", href: "#" }
        ]
    },
    {
        id: 11,
        title: "آجیل",
        links: [
        { id: 1, title: "فندق", href: "#" },
        { id: 2, title: "پسته", href: "#" },
        { id: 3, title: "بادام درختی", href: "#" },
        { id: 4, title: "بادام هندی", href: "#" },
        { id: 5, title: "بادام زمینی", href: "#" },
        { id: 6, title: "انجیر", href: "#" },
        { id: 7, title: "آجیل شب یلدا", href: "#" }
        ]
    },
    {
        id: 12,
        title: "شیرینی و خشکبار",
        links: [
        { id: 1, title: "شیرینی", href: "#" },
        { id: 2, title: "گز، سوهان و پولکی", href: "#" },
        { id: 3, title: "پشمک، مسقطی و باسلوق", href: "#" },
        { id: 4, title: "خشکبار", href: "#" }
        ]
    },
    {
        id: 13,
        title: "مواد پروتئینی و تخم مرغ",
        links: [
        { id: 1, title: "خاویار", href: "#" },
        { id: 2, title: "سوسیس", href: "#" }
        ]
    },
    {
        id: 14,
        title: "میوه و سبزیجات",
        links: [
        { id: 1, title: "سبزیجات", href: "#" },
        { id: 2, title: "خرما", href: "#" }
        ]
    },
    {
        id: 15,
        title: "بهداشت و نظافت خانگی",
        links: [
        { id: 1, title: "اسکاچ و سیم ظرفشویی", href: "#" },
        { id: 2, title: "دستکش نظافت", href: "#" },
        { id: 3, title: "مواد شوینده", href: "#" },
        { id: 4, title: "شوینده لباس", href: "#" },
        { id: 5, title: "شوینده ظروف", href: "#" },
        { id: 6, title: "شوینده سطوح", href: "#" },
        { id: 7, title: "مایع دستشویی", href: "#" },
        { id: 8, title: "شوینده فرش و مبل", href: "#" },
        { id: 9, title: "لوازم یکبار مصرف آشپزخانه", href: "#" },
        { id: 10, title: "دستمال کاغذی", href: "#" }
        ]
    },
    {
        id: 16,
        title: "بهداشت و خوراک کودک",
        links: [
        { id: 1, title: "غذای کودک", href: "#" },
        { id: 2, title: "پوشک کودک", href: "#" },
        { id: 3, title: "دهانشویه و خمیردندان کودک", href: "#" },
        { id: 4, title: "مسواک کودک", href: "#" },
        { id: 5, title: "دستمال مرطوب کودک", href: "#" },
        { id: 6, title: "کرم،‌ بالم و لوسیون کودک", href: "#" },
        { id: 7, title: "شامپو کودک", href: "#" },
        { id: 8, title: "شوینده لباس کودک", href: "#" }
        ]
    },
    {
        id: 17,
        title: "بهداشت شخصی",
        links: [
        { id: 1, title: "بهداشت دهان و دندان", href: "#" },
        { id: 2, title: "کاندوم", href: "#" },
        { id: 3, title: "پد بهداشتی", href: "#" }
        ]
    },
    {
        id: 18,
        title: "پت شاپ",
        links: [
        { id: 1, title: "غذا مکمل حیوانات", href: "#" },
        { id: 2, title: "بهداشت و مراقبت حیوانات", href: "#" },
        { id: 3, title: "آموزش و سرگرمی حیوانات", href: "#" },
        { id: 4, title: "لانه حیوانات", href: "#" },
        { id: 5, title: "لوازم آبزیان", href: "#" }
        ]
    }
    ]
    },
    {
    id: 16,
    title: "اسباب بازی، کودک و نوزاد",
    icon: FiPackage,
    allLink: {
        title: "همه محصولات اسباب بازی، کودک و نوزاد",
        href: "#"
    },
    sections: [
    {
        id: 1,
        title: "بهداشت و حمام کودک و نوزاد",
        links: [
        { id: 1, title: "پوشک", href: "#" },
        { id: 2, title: "دستمال مرطوب", href: "#" },
        { id: 3, title: "حوله", href: "#" },
        { id: 4, title: "وان حمام نوزاد", href: "#" },
        { id: 5, title: "مینی واش", href: "#" },
        { id: 6, title: "شامپو کودک و نوزاد", href: "#" }
        ]
    },
    {
        id: 2,
        title: "پوشاک و کفش کودک و نوزاد",
        links: [
        { id: 1, title: "لباس نوزادی", href: "#" },
        { id: 2, title: "کفش", href: "#" },
        { id: 3, title: "جوراب و پاپوش کودک و نوزاد", href: "#" },
        { id: 4, title: "کلاه و پیش بند نوزاد", href: "#" },
        { id: 5, title: "پوشاک بچگانه", href: "#" }
        ]
    },
    {
        id: 3,
        title: "پوشاک پسرانه",
        links: [
        { id: 1, title: "لباس پسرانه", href: "#" },
        { id: 2, title: "لباس و کفش ورزشی پسرانه", href: "#" },
        { id: 3, title: "کفش پسرانه", href: "#" },
        { id: 4, title: "کوله پشتی پسرانه", href: "#" }
        ]
    },
    {
        id: 4,
        title: "پوشاک دخترانه",
        links: [
        { id: 1, title: "لباس دخترانه", href: "#" },
        { id: 2, title: "کفش دخترانه", href: "#" },
        { id: 3, title: "کوله پشتی دخترانه", href: "#" }
        ]
    },
    {
        id: 5,
        title: "دیجیتال کودک",
        links: [
        { id: 1, title: "تبلت", href: "#" },
        { id: 2, title: "پلی استیشن، ایکس باکس و بازی", href: "#" }
        ]
    },
    {
        id: 6,
        title: "اسباب بازی",
        links: [
        { id: 1, title: "فکری و آموزشی", href: "#" },
        { id: 2, title: "پازل، لگو و ساختنی", href: "#" },
        { id: 3, title: "عروسک و فیگور", href: "#" },
        { id: 4, title: "اسپینر، ابزار شوخی و سرگرمی", href: "#" },
        { id: 5, title: "تفنگ، تیر و لوازم جنگی", href: "#" }
        ]
    },
    {
        id: 7,
        title: "بازی و سرگرمی کودک",
        links: [
        { id: 1, title: "ماشین بازی، موتور و سه چرخه", href: "#" },
        { id: 2, title: "دوچرخه", href: "#" },
        { id: 3, title: "تشک بازی و پارک بازی", href: "#" },
        { id: 4, title: "تاب و سرسره", href: "#" }
        ]
    },
    {
        id: 8,
        title: "سلامت، ایمنی و مراقبت",
        links: [
        { id: 1, title: "تصفیه هوا", href: "#" },
        { id: 2, title: "ترازو", href: "#" },
        { id: 3, title: "دوربین و پیجر اتاق کودک", href: "#" },
        { id: 4, title: "تب سنج و دماسنج", href: "#" },
        { id: 5, title: "محافظ و ابزار ایمنی", href: "#" }
        ]
    },
    {
        id: 9,
        title: "خواب کودک",
        links: [
        { id: 1, title: "مبلمان اتاق کودک", href: "#" },
        { id: 2, title: "چراغ خواب کودک", href: "#" },
        { id: 3, title: "تشک کودک", href: "#" },
        { id: 4, title: "سرویس خواب", href: "#" },
        { id: 5, title: "پتو", href: "#" },
        { id: 6, title: "بالش شیردهی", href: "#" }
        ]
    },
    {
        id: 10,
        title: "داغ ترین ها",
        links: [
        { id: 1, title: "عروسک لبوبو", href: "#" },
        { id: 2, title: "عروسک سالیوان", href: "#" },
        { id: 3, title: "عروسک پاندا", href: "#" },
        { id: 4, title: "عروسک کرومی", href: "#" },
        { id: 5, title: "بازی منچ", href: "#" },
        { id: 6, title: "کیمدی شاپ", href: "#" },
        { id: 7, title: "کیمدی امضا شده", href: "#" },
        { id: 8, title: "خمیر بازی", href: "#" },
        { id: 9, title: "ایرهاکی", href: "#" }
        ]
    },
    {
        id: 11,
        title: "ملزومات گردش و سفر",
        links: [
        { id: 1, title: "کالسکه و کریر", href: "#" },
        { id: 2, title: "صندلی خودرو کودک و نوزاد", href: "#" },
        { id: 3, title: "ساک لوازم نوزاد", href: "#" },
        { id: 4, title: "لوازم جانبی گردش و سفر", href: "#" },
        { id: 5, title: "آغوشی", href: "#" }
        ]
    },
    {
        id: 12,
        title: "لوازم شخصی",
        links: [
        { id: 1, title: "پستانک و ملزومات", href: "#" },
        { id: 2, title: "شیردوش", href: "#" },
        { id: 3, title: "شورت آموزشی", href: "#" }
        ]
    },
    {
        id: 13,
        title: "غذا خوری",
        links: [
        { id: 1, title: "صندلی غذاخوری", href: "#" },
        { id: 2, title: "شیشه شیر، سرلاک و داروخوری", href: "#" }
        ]
    }
    ]
    },
    {
    id: 17,
    title: "محصولات بومی و محلی",
    icon: FiGrid,
    allLink: {
        title: "همه محصولات بومی و محلی",
        href: "#"
    },
    sections: [
    {
        id: 1,
        title: "مواد غذایی ارگانیک",
        links: [
        { id: 1, title: "مواد غذایی ارگانیک", href: "#" }
        ]
    },
    {
        id: 2,
        title: "خواروبار محلی",
        links: [
        { id: 1, title: "برنج محلی", href: "#" },
        { id: 2, title: "روغن محلی", href: "#" },
        { id: 3, title: "صبحانه محلی", href: "#" },
        { id: 4, title: "عسل طبیعی", href: "#" },
        { id: 5, title: "حلوا شکری، ارده و کنجد سنتی", href: "#" }
        ]
    },
    {
        id: 3,
        title: "کیک و شیرینی خانگی",
        links: [
        { id: 1, title: "شیرینی خانگی", href: "#" },
        { id: 2, title: "کیک و کلوچه محلی", href: "#" }
        ]
    },
    {
        id: 4,
        title: "تنقلات خانگی",
        links: [
        { id: 1, title: "لواشک، برگه و آلوچه خانگی", href: "#" },
        { id: 2, title: "تخمه و مغز طعم‌دار محلی", href: "#" }
        ]
    },
    {
        id: 5,
        title: "لبنیات سنتی",
        links: [
        { id: 1, title: "کره گیاهی و حیوانی محلی", href: "#" }
        ]
    },
    {
        id: 6,
        title: "خشکبار و آجیل سنتی",
        links: [
        { id: 1, title: "آجیل سنتی", href: "#" },
        { id: 2, title: "خرمای محلی", href: "#" }
        ]
    },
    {
        id: 7,
        title: "غلات و حبوبات ارگانیک",
        links: [
        { id: 1, title: "غلات ارگانیک", href: "#" },
        { id: 2, title: "حبوبات و سویا ارگانیک", href: "#" }
        ]
    },
    {
        id: 8,
        title: "ادویه و چاشنی ارگانیک",
        links: [
        { id: 1, title: "ادویه‌های ارگانیک", href: "#" },
        { id: 2, title: "زعفران و زرشک ارگانیک", href: "#" },
        { id: 3, title: "عطاری", href: "#" },
        { id: 4, title: "ترشیجات و شور خانگی", href: "#" },
        { id: 5, title: "پک هدیه شب یلدا", href: "#" }
        ]
    },
    {
        id: 9,
        title: "دکوراتیو سنتی",
        links: [
        { id: 1, title: "لوستر و چراغ آویز دست ساز", href: "#" },
        { id: 2, title: "مجسمه دست ساز", href: "#" },
        { id: 3, title: "گلدان دست ساز", href: "#" },
        { id: 4, title: "تابلو سنتی", href: "#" },
        { id: 5, title: "ست هدیه سنتی", href: "#" },
        { id: 6, title: "ست هفت سین سنتی", href: "#" },
        { id: 7, title: "کاشی سنتی", href: "#" },
        { id: 8, title: "آینه سنتی", href: "#" },
        { id: 9, title: "محصولات بافتنی", href: "#" },
        { id: 10, title: "خانه و کاشانه", href: "#" }
        ]
    },
    {
        id: 10,
        title: "نوشیدنی‌های ارگانیک",
        links: [
        { id: 1, title: "چای ارگانیک ایرانی", href: "#" },
        { id: 2, title: "دمنوش گیاهی", href: "#" }
        ]
    },
    {
        id: 11,
        title: "اکسسوری و زیورآلات دست ساز",
        links: [
        { id: 1, title: "اکسسوری و زیورآلات دست ساز", href: "#" }
        ]
    },
    {
        id: 12,
        title: "پوشاک بومی و محلی",
        links: [
        { id: 1, title: "پوشاک بومی و محلی", href: "#" }
        ]
    },
    {
        id: 13,
        title: "قالی و قالیچه",
        links: [
        { id: 1, title: "قالی و قالیچه", href: "#" }
        ]
    },
    {
        id: 14,
        title: "ظروف سنتی",
        links: [
        { id: 1, title: "آجیل خوری سنتی", href: "#" },
        { id: 2, title: "دیس و سینی سنتی", href: "#" },
        { id: 3, title: "قندان سنتی", href: "#" },
        { id: 4, title: "بشقاب سنتی", href: "#" },
        { id: 5, title: "لیوان سنتی", href: "#" },
        { id: 6, title: "دیگ و قابلمه سنتی", href: "#" },
        { id: 7, title: "لوازم آشپزخانه سنتی", href: "#" },
        { id: 8, title: "سبد دستبافت", href: "#" },
        { id: 9, title: "هاون سنتی", href: "#" },
        { id: 10, title: "تخته سرو دست ساز", href: "#" },
        { id: 11, title: "رومیزی، رانر و زیربشقابی سنتی", href: "#" }
        ]
    }
    ]
    },
    {
    id: 18,
    title: "پت شاپ",
    icon: FaPaw,
    allLink: {
        title: "همه محصولات پت شاپ",
        href: "#"
    },
    sections: [
    {
        id: 1,
        title: "غذا و مکمل حیوانات",
        links: [
        { id: 1, title: "غذا و مکمل حیوانات", href: "#" }
        ]
    },
    {
        id: 2,
        title: "بهداشت، مراقبت و نگهداری حیوانات",
        links: [
        { id: 1, title: "بهداشت، مراقبت و نگهداری حیوانات", href: "#" }
        ]
    },
    {
        id: 3,
        title: "آموزش، سرگرمی و اکسسوری حیوانات",
        links: [
        { id: 1, title: "آموزش، سرگرمی و اکسسوری حیوانات", href: "#" }
        ]
    },
    {
        id: 4,
        title: "لانه و آشیانه نگهداری حیوانات",
        links: [
        { id: 1, title: "لانه و آشیانه نگهداری حیوانات", href: "#" }
        ]
    },
    {
        id: 5,
        title: "لوازم آبزیان",
        links: [
        { id: 1, title: "لوازم آبزیان", href: "#" }
        ]
    }
    ]
    }
    ]

export const recentSearches = ["موبایل"]

export const popularSearches = [
                                "آیفون ۱۶",
                                "Ps5",
                                "اپل واچ",
                                "پنکه شارژی",
                                "ایرپاد",
                                "لپ تاپ",
                               ]