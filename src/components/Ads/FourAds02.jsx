import "./FourAds.css"

function FourAds() {
  const ads = [
    {
      id: 1,
      image: new URL("../../assets/images/ad2-01.webp", import.meta.url).href,
      alt: "تبلیغ اول",
    },
    {
      id: 2,
      image: new URL("../../assets/images/ad2-02.webp", import.meta.url).href,
      alt: "تبلیغ دوم",
    },
    {
      id: 3,
      image: new URL("../../assets/images/ad2-03.webp", import.meta.url).href,
      alt: "تبلیغ سوم",
    },
    {
      id: 4,
      image: new URL("../../assets/images/ad2-04.webp", import.meta.url).href,
      alt: "تبلیغ چهارم",
    },
  ]

  return (
    <section className="four-ads-section">
      <div className="four-ads-container">

        {ads.map((ad) => (
          <div className="four-ad-card" key={ad.id}>
            <img src={ad.image} alt={ad.alt} />
          </div>
        ))}

      </div>
    </section>
  )
}

export default FourAds
