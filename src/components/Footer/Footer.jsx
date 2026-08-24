import { useState } from "react"
import "./Footer.css"

import { contactItems, services, linkColumns, socials, appDownloads, trustBadges, bottomBrands } from "../../data"

function Footer() {

  const [showMoreText, setShowMoreText] = useState(false)

  const digikalaLogo = new URL("../../assets/images/full-horizontal.svg",import.meta.url).href

  const appIcon = new URL("../../assets/images/footerlogo2.webp",import.meta.url).href

  const goTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-top">

          <div className="footer-logo">
            <img src={digikalaLogo} alt="دیجی‌کالا" />
          </div>

          <button
            className="footer-back-top"
            type="button"
            onClick={goTop}
          >
            بازگشت به بالا
            <span>⌃</span>
          </button>

        </div>

        <div className="footer-contact">

          {contactItems.map((item, index) => (
            <div className="footer-contact-item" key={item.id}>

              <span>{item.text}</span>

              {index !== contactItems.length - 1 && (
                <span className="footer-contact-line"></span>
              )}

            </div>
          ))}

        </div>

        <div className="footer-services">

          {services.map((service) => (
            <div className="footer-service" key={service.id}>

              <img src={service.image} alt={service.title} />

              <p>{service.title}</p>

            </div>
          ))}

        </div>

        <div className="footer-main">

          <div className="footer-links">

            {linkColumns.map((column) => (
              <div className="footer-column" key={column.id}>

                <h4>{column.title}</h4>

                {column.links.map((link, index) => (
                  <a href="#" key={index}>
                    {link}
                  </a>
                ))}

              </div>
            ))}

          </div>

          <div className="footer-social">

            <h4>همراه ما باشید!</h4>

            <div className="footer-social-list">

              {socials.map((social) => (
                <a href="#" className="footer-social-item" key={social.id}>
                  <img src={social.image} alt="شبکه اجتماعی" />
                </a>
              ))}

            </div>

            <h4 className="footer-email-title">
              با ثبت ایمیل، از جدیدترین تخفیف‌ها باخبر شوید
            </h4>

            <form className="footer-email-form">

              <input type="email" placeholder="ایمیل شما" />

              <button type="submit">
                ثبت
              </button>

            </form>

          </div>

        </div>

        <div className="footer-app">

          <div className="footer-app-right">

            <img src={appIcon} alt="اپلیکیشن دیجی‌کالا" />

            <p>دانلود اپلیکیشن دیجی‌کالا</p>

          </div>

          <div className="footer-app-left">

            {appDownloads.map((app) => (
              <a href="#" key={app.id}>
                <img src={app.image} alt={app.title} />
              </a>
            ))}

            <button type="button" className="footer-app-more">
              <span>...</span>
            </button>

          </div>

        </div>

        <div className="footer-about">

          <div className="footer-about-text">

            <h3>
              فروشگاه اینترنتی دیجی‌کالا، بررسی، انتخاب و خرید آنلاین
            </h3>

            <p
              className={
                showMoreText
                  ? "footer-about-description footer-about-description-open"
                  : "footer-about-description"
              }
            >
              یک خرید اینترنتی مطمئن، نیازمند فروشگاهی است که بتواند کالاهایی متنوع،
              باکیفیت و دارای ضمانت را در زمانی کوتاه به دست مشتریان برساند.
              دیجی‌کالا سال‌هاست که با ارائه تجربه‌ای ساده برای جست‌وجو، بررسی
              و خرید کالا، تلاش می‌کند انتخاب را برای کاربران آسان‌تر کند.
              شما می‌توانید در این بخش متن معرفی فروشگاه، توضیحات مربوط به خدمات،
              ضمانت اصل بودن کالا، ارسال سفارش، مزایای خرید آنلاین و توضیحات
              تکمیلی مربوط به اعتماد مشتریان را قرار دهید. این متن در حالت عادی
              کوتاه دیده می‌شود و با زدن دکمه مشاهده بیشتر، ادامه آن نمایش داده
              خواهد شد. این قسمت دقیقاً برای متن طولانی کنار نمادها طراحی شده است.
            </p>

            <button
              className="footer-about-more"
              type="button"
              onClick={() => setShowMoreText(!showMoreText)}
            >
              {showMoreText ? "بستن" : "مشاهده بیشتر"}
              <span>{showMoreText ? "⌃" : "›"}</span>
            </button>

          </div>

          <div className="footer-trust-list">

            {trustBadges.map((badge) => (
              <div className="footer-trust-item" key={badge.id}>
                <img src={badge.image} alt="نماد اعتماد" />
              </div>
            ))}

          </div>

        </div>

        <div className="footer-copyright">
          برای استفاده از مطالب دیجی‌کالا، داشتن «هدف غیرتجاری» و ذکر «منبع» کافیست.
          تمام حقوق این وب‌سایت متعلق به شرکت نوآوران فن‌آوازه است.
        </div>

      </div>

      <div className="footer-brands">

        {bottomBrands.map((brand) => (
          <a href="#" className="footer-brand-item" key={brand.id}>
            <img src={brand.image} alt="برند دیجی‌کالا" />
          </a>
        ))}

      </div>

    </footer>
  )
}

export default Footer