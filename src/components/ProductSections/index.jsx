import "@/styles/ProductSections.css"
import { useEffect, useRef, useState } from "react"
import { AiFillStar } from "react-icons/ai"
import { FiChevronLeft, FiEdit3, FiInfo, FiShield, FiShoppingCart, FiSliders, FiThumbsDown, FiThumbsUp } from "react-icons/fi"
import { productDetailTabs, productQuestionsData, productReviewsData, productSpecificationsData, productStickyBuyData } from "@/data"

function ProductSections() {
  const sectionRefs = useRef({})
  const [activeTab, setActiveTab] = useState(productDetailTabs[0].id)

  const scrollToSection = (sectionId) => {
    const targetSection = sectionRefs.current[sectionId]

    if (!targetSection) {
      return
    }

    const offset = 155
    const top = targetSection.getBoundingClientRect().top + window.scrollY

    window.scrollTo({
      top: top - offset,
      behavior: "smooth",
    })

    setActiveTab(sectionId)
  }

  const checkActiveSection = () => {
    const offset = 180
    let current = productDetailTabs[0].id

    productDetailTabs.forEach((tab) => {
      const section = sectionRefs.current[tab.id]

      if (!section) {
        return
      }

      const top = section.getBoundingClientRect().top

      if (top <= offset) {
        current = tab.id
      }
    })

    setActiveTab(current)
  }

  useEffect(() => {
    checkActiveSection()

    window.addEventListener("scroll", checkActiveSection)
    window.addEventListener("resize", checkActiveSection)

    return () => {
      window.removeEventListener("scroll", checkActiveSection)
      window.removeEventListener("resize", checkActiveSection)
    }
  }, [])

  return (
    <section className="product-sections">
      <div className="product-sections-tabs">
        {productDetailTabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            className={
              activeTab === tab.id
                ? "product-sections-tab product-sections-tab-active"
                : "product-sections-tab"
            }
            onClick={() => scrollToSection(tab.id)}
          >
            {tab.title}
          </button>
        ))}
      </div>

      <div className="product-sections-layout">
        <aside className="product-sections-sidebar">
          <div className="product-buybox">
            <div className="product-buybox-header">
              <div className="product-buybox-text">

                <h3>{productStickyBuyData.title}</h3>

                <div className="product-buybox-color">
                  <span>{productStickyBuyData.colorTitle}</span>
                  <span
                    className="product-buybox-color-dot"
                    style={{ backgroundColor: productStickyBuyData.colorCode }}
                  ></span>
                </div>
              </div>
              <div className="product-buybox-image-outer">
                <span className="product-buybox-badge">
                  {productStickyBuyData.badge}
                </span>
              <div className="product-buybox-image">
                {productStickyBuyData.image ? (
                  <img
                    src={productStickyBuyData.image}
                    alt={productStickyBuyData.imageAlt}
                  />
                ) : (
                  <span></span>
                )}
              </div>
             </div>
            </div>

            <div className="product-buybox-divider"></div>

            <div className="product-buybox-seller">
              <img
                  src={productStickyBuyData.imageSeller}
                  alt={productStickyBuyData.imageSellerAlt}
              />
              <span>{productStickyBuyData.sellerName}</span>
            </div>

            <div className="product-buybox-feature">
              <FiShield />
              <span>{productStickyBuyData.warranty}</span>
            </div>

            <div className="product-buybox-feature product-buybox-stock">
              <FiShoppingCart />
              <span>{productStickyBuyData.stockText}</span>
            </div>

            <div className="product-buybox-price-box">
              <div className="product-buybox-price-row">
                <div className="product-buybox-price-main">
                  <small>{productStickyBuyData.currency}</small>
                  <span className="product-buybox-price-value">
                    {productStickyBuyData.price}
                  </span>
                </div>
              </div>

              <div className="product-buybox-old-price-outer">
                <span className="product-buybox-discount">
                  {productStickyBuyData.discount}
                </span>
                <span className="product-buybox-old-price">
                  {productStickyBuyData.oldPrice}
                </span>
              </div>
            </div>

            <button type="button" className="product-buybox-button">
              {productStickyBuyData.buttonText}
            </button>
          </div>
        </aside>

        <div className="product-sections-content">
          <section
            className="product-detail-section"
            ref={(element) => {
              sectionRefs.current.specifications = element
            }}
          >
            <h2 className="product-section-title">
              {productSpecificationsData.title}
            </h2>

            {productSpecificationsData.groups.map((group) => (
              <div className="product-spec-group" key={group.id}>
                <h3 className="product-spec-group-title">{group.title}</h3>

                <div className="product-spec-table">
                  {group.rows.map((row) => (
                    <div className="product-spec-row" key={row.id}>
                      <span className="product-spec-label">{row.label}</span>
                      <span className="product-spec-value">{row.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            <button type="button" className="product-section-more-button">
              {productSpecificationsData.moreText}
              <FiChevronLeft />
            </button>

            <div className="product-spec-notice">
              <FiInfo />
              <span>{productSpecificationsData.notice}</span>
            </div>
          </section>

          <section
            className="product-detail-section"
            ref={(element) => {
              sectionRefs.current.reviews = element
            }}
          >
            <h2 className="product-section-title">
              {productReviewsData.title}
            </h2>

            <div className="product-reviews-overview">
              <div className="product-reviews-gallery-area">
                <div className="product-reviews-gallery">
                  {productReviewsData.images.map((item) => (
                    <div className="product-reviews-gallery-item" key={item.id}>
                      {item.image ? (
                        <img src={item.image} alt={item.alt} />
                      ) : (
                        <span>عکس</span>
                      )}
                    </div>
                  ))}
                </div>

                <button type="button" className="product-gallery-more-link">
                  {productReviewsData.imageMoreText}
                  <FiChevronLeft />
                </button>
              </div>

              <div className="product-reviews-score-box">
                <h3>{productReviewsData.title}</h3>

                <div className="product-reviews-score-row">
                  <strong>{productReviewsData.score}</strong>
                  <span>{productReviewsData.scoreText}</span>
                </div>

                <div className="product-reviews-stars">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <AiFillStar key={star} />
                  ))}
                </div>

                <p>{productReviewsData.totalText}</p>
                <span>شما هم درباره این کالا دیدگاه ثبت کنید</span>

                <button type="button" className="product-outline-button">
                  {productReviewsData.buttonText}
                </button>
              </div>
            </div>

            <div className="product-reviews-summary-card">
              <div className="product-reviews-summary-header">
                <span className="product-reviews-summary-ai">✦</span>
                <div className="product-reviews-summary-title-box">
                  <h3>{productReviewsData.summary.title}</h3>
                  <span>{productReviewsData.summary.subtitle}</span>
                </div>

              </div>

              <p className="product-reviews-summary-text">
                {productReviewsData.summary.text}
              </p>

              <button type="button" className="product-reviews-summary-more">
                {productReviewsData.summary.moreText}
              </button>

              <div className="product-reviews-summary-tags">
                {productReviewsData.summary.tags.map((tag) => (
                  <span
                    key={tag.id}
                    className={`product-summary-tag product-summary-tag-${tag.type}`}
                  >
                    {tag.text}
                  </span>
                ))}
              </div>

              <span className="product-reviews-summary-warning">
                {productReviewsData.summary.warningText}
              </span>

              <div className="product-reviews-summary-help">
                <span>{productReviewsData.summary.helpText}</span>

                <div className="product-reviews-summary-help-buttons">
                  <button type="button">
                    <FiThumbsUp />
                  </button>

                  <button type="button">
                    <FiThumbsDown />
                  </button>
                </div>
              </div>
            </div>

            <div className="product-sort-row-right">
              <div className="product-sort-title">
                <FiSliders />
                <span>مرتب‌سازی:</span>
              </div>

              <div className="product-sort-items">
                {productReviewsData.sortItems.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    className={item.active ? "active" : ""}
                  >
                    {item.title}
                  </button>
                ))}
              </div>
            </div>

            <div className="product-review-list">
              {productReviewsData.reviews.map((review) => (
                <article className="product-review-item" key={review.id}>
                  <div className="product-review-item-top">
                    <div className="product-review-author-box">
                      <strong>{review.author}</strong>
                      <span>{review.badge}</span>
                    </div>

                    <div className="product-review-rating-box">
                      {[...Array(review.rating)].map((_, index) => (
                        <AiFillStar key={index} />
                      ))}
                    </div>
                  </div>

                  <p className="product-review-text">{review.text}</p>

                  <div className="product-review-meta">
                    <span>{review.color}</span>
                    <span>{review.seller}</span>
                  </div>

                  <div className="product-review-actions">
                    <button type="button">
                      <FiThumbsUp />
                      <span>{review.likes}</span>
                    </button>

                    <button type="button">
                      <FiThumbsDown />
                      <span>{review.dislikes}</span>
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section
            className="product-detail-section"
            ref={(element) => {
              sectionRefs.current.questions = element
            }}
          >
            <h2 className="product-section-title">
              {productQuestionsData.title}
            </h2>

            <div className="product-questions-top-row">

              <div className="product-questions-side-box">
                <p>شما هم درباره این کالا پرسش ثبت کنید</p>

                <button type="button" className="product-outline-button">
                  {productQuestionsData.buttonText}
                </button>
              </div>
            </div>

            <div className="product-sort-row">
              <div className="product-sort-row-right">
              <div className="product-sort-title">
                <FiSliders />
                <span>مرتب‌سازی :</span>
              </div>

              <div className="product-sort-items">
                {productQuestionsData.sortItems.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    className={item.active ? "active" : ""}
                  >
                    {item.title}
                  </button>
                ))}
              </div>
              </div>
              <span className="product-questions-count">
                {productQuestionsData.countText}
              </span>
            </div>

            <div className="product-question-list">
              {productQuestionsData.questions.map((question) => (
                <article className="product-question-item" key={question.id}>
                  <h3 className="product-question-title">{question.question}</h3>

                  {question.answer && (
                    <p className="product-question-answer">{question.answer}</p>
                  )}

                  {(question.author || question.userName || question.date) && (
                    <div className="product-question-user-box">
                      {question.author && (
                        <span className="product-question-author">
                          {question.author}
                        </span>
                      )}

                      {question.userName && (
                        <span className="product-question-username">
                          {question.userName}
                        </span>
                      )}
                    </div>
                  )}

                  <div className="product-question-bottom">
                    <div className="product-question-actions">
                      <button type="button">
                        <FiThumbsDown />
                        <span>{question.dislikes}</span>
                      </button>

                      <button type="button">
                        <FiThumbsUp />
                        <span>{question.likes}</span>
                      </button>
                    </div>

                    <div className="product-question-links">
                      {question.moreRepliesText && (
                        <button type="button" className="product-question-link">
                          {question.moreRepliesText}
                        </button>
                      )}

                      {question.repliesText && (
                        <button type="button" className="product-question-link">
                          <FiEdit3 />
                          {question.repliesText}
                        </button>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </div>
      </div>
    </section>
  )
}

export default ProductSections