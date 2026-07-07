import "./TwoAds.css"

function TwoAds() {
  const ads = [
    {
      id: 1,
      image: new URL("../../assets/images/ad3-01.webp", import.meta.url).href,
      alt: "تبلیغ اول",
    },
    {
      id: 2,
      image: new URL("../../assets/images/ad3-02.webp", import.meta.url).href,
      alt: "تبلیغ دوم",
    },
  ]

  return (
    <section className="two-ads-section">

      <div className="two-ads-container">

        {ads.map((ad) => (
          <div className="two-ad-card" key={ad.id}>
            <img src={ad.image} alt={ad.alt} />
          </div>
        ))}

      </div>

    </section>
  )
}

export default TwoAds
