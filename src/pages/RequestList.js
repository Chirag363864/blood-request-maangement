import { useEffect, useState } from "react";
import axios from "axios";

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=DM+Sans:wght@300;400;600&display=swap');

  .request-list-page {
    min-height: 100vh;
    background: linear-gradient(160deg, #fff8f0 60%, #fddede 100%);
    font-family: 'DM Sans', sans-serif;
    padding: 52px 48px;
  }

  .request-list-page h2 {
    font-family: 'Playfair Display', serif;
    font-size: 2.4rem;
    font-weight: 900;
    color: #1a0a0a;
    margin-bottom: 6px;
  }

  .request-list-page h2::after {
    content: '';
    display: block;
    width: 60px;
    height: 4px;
    background: linear-gradient(90deg, #e63946, #ff6b6b);
    border-radius: 999px;
    margin-top: 10px;
    margin-bottom: 6px;
  }

  .request-list-subtitle {
    color: #8a7070;
    font-size: 0.95rem;
    margin-bottom: 40px;
  }

  .request-list-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
    gap: 22px;
    max-width: 1100px;
  }

  .request-list-card {
    background: #fff;
    border-radius: 20px;
    padding: 26px 24px;
    box-shadow: 0 8px 32px rgba(230,57,70,0.09);
    border: 1.5px solid #f0dada;
    display: flex;
    align-items: center;
    gap: 18px;
    position: relative;
    overflow: hidden;
    transition: transform 0.2s, box-shadow 0.2s;
    animation: fadeUp 0.4s ease both;
  }

  .request-list-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 18px 48px rgba(230,57,70,0.17);
  }

  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(18px); }
    to   { opacity: 1; transform: none; }
  }

  .request-list-card::before {
    content: '';
    position: absolute;
    top: 0; left: 0;
    width: 4px; height: 100%;
    background: linear-gradient(180deg, #b5000f, #e63946, #ff6b6b);
    border-radius: 4px 0 0 4px;
  }

  .request-blood-badge {
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

  .request-list-card-info {
    flex: 1;
  }

  .request-list-card-title {
    font-weight: 700;
    font-size: 1rem;
    color: #1a0a0a;
    margin-bottom: 4px;
  }

  .request-list-card-sub {
    color: #8a7070;
    font-size: 0.85rem;
  }

  .urgent-dot {
    width: 9px;
    height: 9px;
    border-radius: 50%;
    background: #e63946;
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

export default function RequestList() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/request").then(res => setData(res.data));
  }, []);

  return (
    <>
      <style>{styles}</style>

      <div className="request-list-page">
        <h2>Blood Requests</h2>
        <p className="request-list-subtitle">Urgent blood requests from patients in need</p>

        {data.length === 0 ? (
          <div className="empty-state">
            <div className="empty-state-icon">🩺</div>
            <div className="empty-state-text">No requests at the moment.</div>
          </div>
        ) : (
          <div className="request-list-grid">
            {data.map((r, i) => (
              <div key={i} className="request-list-card">
                <div className="request-blood-badge">{r.bloodGroup}</div>
                <div className="request-list-card-info">
                  <div className="request-list-card-title">{r.bloodGroup} Blood</div>
                  <div className="request-list-card-sub">{r.quantity} unit{r.quantity > 1 ? "s" : ""} needed</div>
                </div>
                <div className="urgent-dot" />
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}