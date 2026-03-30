import { useEffect, useState } from "react";
import axios from "axios";

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=DM+Sans:wght@300;400;600&display=swap');

  .dashboard-page {
    min-height: 100vh;
    background: linear-gradient(160deg, #fff8f0 60%, #fddede 100%);
    font-family: 'DM Sans', sans-serif;
    padding: 48px;
  }

  .dashboard-page h2 {
    font-family: 'Playfair Display', serif;
    font-size: 2.4rem;
    font-weight: 900;
    color: #1a0a0a;
    margin-bottom: 6px;
  }

  .dashboard-page h2::after {
    content: '';
    display: block;
    width: 60px;
    height: 4px;
    background: linear-gradient(90deg, #e63946, #ff6b6b);
    border-radius: 999px;
    margin-top: 10px;
  }

  .dash-subtitle {
    color: #8a7070;
    font-size: 0.95rem;
    margin-bottom: 40px;
    margin-top: 6px;
  }

  .dashboard-page .grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 24px;
    max-width: 1100px;
  }

  .dashboard-page .card {
    background: #fff !important;
    border-radius: 22px !important;
    padding: 32px 28px !important;
    box-shadow: 0 8px 40px rgba(230,57,70,0.10) !important;
    border: 1.5px solid #f0dada !important;
    position: relative;
    overflow: hidden;
    transition: transform 0.2s, box-shadow 0.2s;
    cursor: default;
  }

  .dashboard-page .card:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 60px rgba(230,57,70,0.18) !important;
  }

  .dashboard-page .card::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 4px;
    background: linear-gradient(90deg, #b5000f, #e63946, #ff6b6b);
  }

  .dashboard-page .card::after {
    content: '🩸';
    position: absolute;
    bottom: 16px;
    right: 20px;
    font-size: 2.4rem;
    opacity: 0.08;
  }

  .dashboard-page .card h3 {
    font-size: 0.78rem;
    font-weight: 600;
    letter-spacing: 1.2px;
    text-transform: uppercase;
    color: #8a7070;
    margin-bottom: 16px;
  }

  .dashboard-page .card h1 {
    font-family: 'Playfair Display', serif;
    font-size: 3.5rem;
    font-weight: 900;
    color: #1a0a0a;
    line-height: 1;
  }

  .dash-card-icon {
    font-size: 1.8rem;
    margin-bottom: 14px;
    display: block;
  }

  @keyframes countUp {
    from { opacity: 0; transform: translateY(10px); }
    to   { opacity: 1; transform: none; }
  }

  .dashboard-page .card h1 {
    animation: countUp 0.5s ease both;
  }
`;

export default function Dashboard() {
  const [requests, setRequests] = useState([]);
  const [donations, setDonations] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/request")
      .then(res => setRequests(res.data));

    axios.get("http://localhost:5000/api/donation")
      .then(res => setDonations(res.data));
  }, []);

  return (
    <>
      <style>{styles}</style>

      <div className="container dashboard-page">
        <h2>Dashboard</h2>
        <p className="dash-subtitle">Live overview of donations and requests</p>

        <div className="grid">
          <div className="card">
            <span className="dash-card-icon">📋</span>
            <h3>Total Requests</h3>
            <h1>{requests.length}</h1>
          </div>

          <div className="card">
            <span className="dash-card-icon">🩸</span>
            <h3>Total Donations</h3>
            <h1>{donations.length}</h1>
          </div>
        </div>
      </div>
    </>
  );
}