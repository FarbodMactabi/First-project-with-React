import "@/styles/ReadablePosts.css"
import { readablePosts } from "@/data"

function ReadablePosts() {

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

          {readablePosts.map((post) => (
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