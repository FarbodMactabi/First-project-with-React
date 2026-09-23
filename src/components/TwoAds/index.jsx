import "@/styles/TwoAds.css"

function TwoAds({ ads }) {

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
