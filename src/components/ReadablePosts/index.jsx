import "@/styles/ReadablePosts.css"

function ReadablePosts() {
  const posts = [
    {
      id: 1,
      caption: "برنامه و جدول مرحله حذفی جام جهانی ۲۰۲۶؛ زمان بازی‌های یک‌شانزدهم نهایی",
      image: new URL("@/assets/images/readablepost-01.webp", import.meta.url).href,
    },
    {
      id: 2,
      caption: "صعود ایران به مرحله حذفی؛ امشب به چه نتایجی نیاز داریم؟",
      image: new URL("@/assets/images/readablepost-02.webp", import.meta.url).href,
    },
    {
      id: 3,
      caption: "جاهای دیدنی شیراز؛ ۴۰ مکان گردشگری که باید ببینید",
      image: new URL("@/assets/images/readablepost-03.webp", import.meta.url).href,
    },
    {
      id: 4,
      caption: "جاهای دیدنی تهران؛ ۵۰ مکان تماشایی برای تهران‌گردی",
      image: new URL("@/assets/images/readablepost-04.webp", import.meta.url).href,
    },
  ]

  return (
    <section className="readable-section">

      <div className="readable-container">

        <div className="readable-header">

          <h2 className="readable-title">
            خواندنی‌ها
          </h2>

          <button className="readable-more" type="button">
            مطالب بیشتر در دیجی‌کالا مگ
            <span>›</span>
          </button>

        </div>

        <div className="readable-list">

          {posts.map((post) => (
            <div className="readable-card" key={post.id}>

              <div className="readable-image">
                <img src={post.image} alt={post.caption} />
              </div>

              <p className="readable-caption">
                {post.caption}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  )
}

export default ReadablePosts