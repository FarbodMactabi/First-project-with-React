import "@/styles/FourAds.css";

function FourAds({ ads }) {
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
  );
}

export default FourAds;