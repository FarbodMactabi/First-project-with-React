import "../../styles/Story.css"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import { stories } from "../../data"


function Story() {
  return (
    <section className="story-section">
      <div className="story-shell">
        <Swiper
          className="story-swiper"
          dir="rtl"
          modules={[Navigation]}
          navigation
          slidesPerView="auto"
          slidesPerGroup={4}
          spaceBetween={20}
          speed={450}
          loop={false}
          rewind={false}
          watchOverflow
          grabCursor
        >
          {stories.map((story) => (
            <SwiperSlide
              className="story-slide"
              key={story.id}
            >
              <div className="story-card">
                <div className="story-ring">
                  <div className="story-image">
                    <img
                      src={story.image}
                      alt={story.title}
                    />
                  </div>
                </div>

                <p className="story-title">
                  {story.title}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

export default Story