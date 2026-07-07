import { useRef, useState } from "react"
import "./Story.css"
import { stories } from "../../data/stories"

function Story() {
  const storyTrackRef = useRef(null)

  const [showNext, setShowNext] = useState(true)
  const [showPrev, setShowPrev] = useState(false)

  const checkButtons = () => {
    const track = storyTrackRef.current

    const scrollPosition = Math.abs(track.scrollLeft)
    const maxScroll = track.scrollWidth - track.clientWidth

    setShowPrev(scrollPosition > 5)
    setShowNext(scrollPosition < maxScroll - 5)
  }

  const scrollNext = () => {
    storyTrackRef.current.scrollLeft -= 360
  }

  const scrollPrev = () => {
    storyTrackRef.current.scrollLeft += 360
  }

  return (
    <section className="story-section">
      <div className="story-shell">

        {showNext && (
          <button
            className="story-nav story-nav-next"
            type="button"
            onClick={scrollNext}
          >
            ›
          </button>
        )}

        <div className="story-window">
          <div
            className="story-track"
            ref={storyTrackRef}
            onScroll={checkButtons}
          >
            {stories.map((story) => (
              <div className="story-card" key={story.id}>

                <div className="story-ring">
                  <div className="story-image">
                    <img src={story.image} alt={story.title} />
                  </div>
                </div>

                <p className="story-title">{story.title}</p>

              </div>
            ))}
          </div>
        </div>

        {showPrev && (
          <button
            className="story-nav story-nav-prev"
            type="button"
            onClick={scrollPrev}
          >
            ‹
          </button>
        )}

      </div>
    </section>
  )
}

export default Story