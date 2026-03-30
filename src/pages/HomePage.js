import { Link } from "react-router-dom";

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,900&family=DM+Sans:wght@300;400;600&display=swap');

  .home-page {
    font-family: 'DM Sans', sans-serif;
    position: relative;
    overflow: hidden;
  }

  .home-page::before {
    content: '';
    position: absolute;
    width: 700px; height: 700px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(230,57,70,0.18) 0%, transparent 70%);
    top: -180px; left: -200px;
    pointer-events: none;
  }

  .home-page::after {
    content: '';
    position: absolute;
    width: 500px; height: 500px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(230,57,70,0.13) 0%, transparent 70%);
    bottom: -120px; right: -100px;
    pointer-events: none;
  }

  .home-eyebrow {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: rgba(230,57,70,0.15);
    border: 1px solid rgba(230,57,70,0.3);
    color: #ff6b6b;
    border-radius: 999px;
    padding: 6px 20px;
    font-size: 0.78rem;
    font-weight: 600;
    letter-spacing: 1.8px;
    text-transform: uppercase;
    margin-bottom: 28px;
    animation: fadeUp 0.5s 0.1s both;
  }

  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(20px); }
    to   { opacity: 1; transform: none; }
  }

  .home-page h1 {
    font-family: 'Playfair Display', serif !important;
    font-size: clamp(3rem, 7vw, 5.5rem) !important;
    font-weight: 900 !important;
    color: #fff !important;
    line-height: 1.05 !important;
    margin-bottom: 22px !important;
    animation: fadeUp 0.5s 0.2s both;
  }

  .home-page h1 em {
    color: #ff6b6b;
    font-style: italic;
  }

  .home-page > p {
    color: rgba(255,255,255,0.62) !important;
    font-size: 1.15rem !important;
    max-width: 460px !important;
    margin: 0 auto 44px !important;
    line-height: 1.75 !important;
    animation: fadeUp 0.5s 0.3s both;
  }

  .home-page > div {
    animation: fadeUp 0.5s 0.4s both;
  }

  .home-page a button {
    font-family: 'DM Sans', sans-serif !important;
    font-weight: 700 !important;
    font-size: 1rem !important;
    border-radius: 999px !important;
    padding: 14px 36px !important;
    border: none !important;
    cursor: pointer !important;
    transition: transform 0.18s, box-shadow 0.18s !important;
    letter-spacing: 0.3px;
  }

  .home-page a:first-child button {
    background: #e63946 !important;
    color: #fff !important;
    box-shadow: 0 4px 24px rgba(230,57,70,0.5) !important;
  }

  .home-page a:first-child button:hover {
    transform: translateY(-3px) !important;
    box-shadow: 0 10px 36px rgba(230,57,70,0.6) !important;
  }

  .home-page a:last-child button {
    background: rgba(255,255,255,0.08) !important;
    color: #fff !important;
    border: 1.5px solid rgba(255,255,255,0.28) !important;
  }

  .home-page a:last-child button:hover {
    background: rgba(255,255,255,0.15) !important;
    border-color: rgba(255,255,255,0.6) !important;
    transform: translateY(-3px) !important;
  }

  .home-stats {
    display: flex;
    gap: 52px;
    justify-content: center;
    margin-top: 64px;
    flex-wrap: wrap;
    animation: fadeUp 0.5s 0.55s both;
  }

  .home-stat-num {
    font-family: 'Playfair Display', serif;
    font-size: 2.6rem;
    font-weight: 900;
    color: #ff6b6b;
  }

  .home-stat-label {
    color: rgba(255,255,255,0.42);
    font-size: 0.78rem;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-top: 4px;
  }

  .home-divider {
    width: 1px;
    height: 48px;
    background: rgba(255,255,255,0.12);
    align-self: center;
  }
`;

export default function HomePage() {
  return (
    <>
      <style>{styles}</style>

      <div style={{
        height: "90vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg, #1a0a0a 0%, #3d0000 60%, #1a0a0a 100%)",
        color: "white",
        textAlign: "center"
      }} className="home-page">

        <div className="home-eyebrow">🩸 Blood Donation Platform</div>

        <h1 style={{ fontSize: "50px", marginBottom: "10px" }}>
          Save <em>Lives</em> ❤️
        </h1>

        <p style={{ marginBottom: "20px" }}>
          Donate Blood • Be a Hero • Help Humanity
        </p>

        <div style={{ display: "flex", gap: "20px" }}>
          <Link to="/donate">
            <button style={{
              padding: "10px 20px",
              background: "white",
              color: "#c62828",
              borderRadius: "5px"
            }}>
              🩸 Donate Now
            </button>
          </Link>

          <Link to="/request">
            <button style={{
              padding: "10px 20px",
              background: "black",
              color: "white",
              borderRadius: "5px"
            }}>
              📋 Request Blood
            </button>
          </Link>
        </div>

        <div className="home-stats">
          <div>
            <div className="home-stat-num">10K+</div>
            <div className="home-stat-label">Donors</div>
          </div>
          <div className="home-divider" />
          <div>
            <div className="home-stat-num">50K+</div>
            <div className="home-stat-label">Lives Saved</div>
          </div>
          <div className="home-divider" />
          <div>
            <div className="home-stat-num">8</div>
            <div className="home-stat-label">Blood Types</div>
          </div>
        </div>

      </div>
    </>
  );
}