import { useEffect, useState } from "react";
import axios from "axios";

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=DM+Sans:wght@300;400;600&display=swap');

  .recent-donation-page {
    min-height: 100vh;
    background: linear-gradient(160deg, #fff8f0 60%, #fddede 100%);
    font-family: 'DM Sans', sans-serif;
    padding: 52px 48px;
  }

  .recent-donation-page h2 {
    font-family: 'Playfair Display', serif;
    font-size: 2.4rem;
    font-weight: 900;
    color: #1a0a0a;
    margin-bottom: 6px;
  }

  .recent-donation-page h2::after {
    content: '';
    display: block;
    width: 60px;
    height: 4px;
    background: linear-gradient(90deg, #e63946, #ff6b6b);
    border-radius: 999px;
    margin-top: 10px;
    margin-bottom: 6px;
  }

  .recent-donation-subtitle {
    color: #8a7070;
    font-size: 0.95rem;
    margin-bottom: 40px;
  }

  .recent-donation-page .grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
    gap: 22px;
    max-width: 1100px;
  }

  .recent-donation-page .card {
    background: #fff !important;
    border-radius: 20px !important;
    padding: 26px 24px !important;
    box-shadow: 0 8px 32px rgba(230,57,70,0.09) !important;
    border: 1.5px solid #f0dada !important;
    display: flex !important;
    align-items: center !important;
    gap: 18px !important;
    position: relative;
    overflow: hidden;
    transition: transform 0.2s, box-shadow 0.2s;
    animation: fadeUp 0.4s ease both;
  }

  .recent-donation-page .card:hover {
    transform: translateY(-4px);
    box-shadow: 0 18px 48px rgba(230,57,70,0.17) !important;
  }

  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(18px); }
    to   { opacity: 1; transform: none; }
  }

  .recent-donation-page .card::before {
    content: '';
    position: absolute;
    top: 0; left: 0;
    width: 4px; height: 100%;
    background: linear-gradient(180deg, #b5000f, #e63946, #ff6b6b);
    border-radius: 4px 0 0 4px;
  }

  .blood-type-badge {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 52px;
    height: 52px;
    border-radius: 16px;
    background: linear-gradient(135deg, #b5000f, #e63946);
    color: #fff;
    font-weight: 900;
    font-size: 0.95rem;
    font-family: 'Playfair Display', serif;
    box-shadow: 0 4px 14px rgba(230,57,70,0.35);
    flex-shrink: 0;
  }

  .recent-donation-page .card h3 {
    font-size: 1rem !important;
    font-weight: 700 !important;
    color: #1a0a0a !important;
    margin-bottom: 4px !important;
  }

  .recent-donation-page .card p {
    color: #8a7070 !important;
    font-size: 0.85rem !important;
    margin: 0 !important;
  }

  .pulse-dot {
    width: 9px;
    height: 9px;
    border-radius: 50%;
    background: #e63946;
    margin-left: auto;
    flex-shrink: 0;
    box-shadow: 0 0 0 3px rgba(230,57,70,0.2);
    animation: pulseDot 1.6s ease infinite;
  }

  @keyframes pulseDot {
    0%,100% { box-shadow: 0 0 0 3px rgba(230,57,70,0.2); }
    50%      { box-shadow: 0 0 0 7px rgba(230,57,70,0.06); }
  }

  .empty-state {
    text-align: center;
    padding: 90px 20px;
    color: #8a7070;
  }

  .empty-state-icon {
    font-size: 3.5rem;
    margin-bottom: 16px;
  }

  .empty-state-text {
    font-size: 1rem;
  }
`;

export default function RecentDonation() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/donation").then(res => setData(res.data));
  }, []);

  return (
    <>
      <style>{styles}</style>

      <div className="container recent-donation-page">
        <h2>Recent Donations</h2>
        <p className="recent-donation-subtitle">All blood donations made through LifeLink</p>

        {data.length === 0 ? (
          <div className="empty-state">
            <div className="empty-state-icon">🩺</div>
            <div className="empty-state-text">No donations yet. Be the first to donate!</div>
          </div>
        ) : (
          <div className="grid">
            {data.map((d, i) => (
  <div key={i} className="card">
    <div className="blood-type-badge">{d._id}</div>
    <div>
      <h3>{d._id} Blood</h3>
      <p>Units: {d.totalQuantity}</p>
    </div>
    <div className="pulse-dot" />
  </div>
))}
          </div>
        )}
      </div>
    </>
  );
}