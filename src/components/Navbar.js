import { Link } from "react-router-dom";

const navStyle = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=DM+Sans:wght@400;500;600&display=swap');

  .navbar {
    position: sticky;
    top: 0;
    z-index: 100;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 48px;
    height: 68px;
    background: rgba(26,10,10,0.97);
    backdrop-filter: blur(12px);
    border-bottom: 1.5px solid rgba(230,57,70,0.18);
    font-family: 'DM Sans', sans-serif;
  }

  .navbar h2 {
    font-family: 'Playfair Display', serif;
    font-size: 1.55rem;
    font-weight: 900;
    color: #fff;
    letter-spacing: -0.5px;
    margin: 0;
    animation: heartbeat 1.4s ease infinite;
  }

  @keyframes heartbeat {
    0%,100% { transform: scale(1); }
    14%      { transform: scale(1.08); }
    28%      { transform: scale(1); }
    42%      { transform: scale(1.05); }
    70%      { transform: scale(1); }
  }

  .navbar > div {
    display: flex;
    gap: 6px;
    align-items: center;
  }

  .navbar a {
    padding: 7px 16px;
    border-radius: 999px;
    color: rgba(255,255,255,0.72) !important;
    font-size: 0.88rem;
    font-weight: 500;
    text-decoration: none;
    transition: background 0.2s, color 0.2s;
    font-family: 'DM Sans', sans-serif;
  }

  .navbar a:hover {
    background: rgba(230,57,70,0.22);
    color: #fff !important;
  }

  .navbar a.active {
    background: #e63946;
    color: #fff !important;
  }
`;

export default function Navbar() {
  return (
    <>
      <style>{navStyle}</style>

      <nav style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "15px 30px",
        background: "#c62828",
        color: "white",
        boxShadow: "0 2px 8px rgba(0,0,0,0.2)"
      }} className="navbar">
        <h2>LifeLink ❤️</h2>

        <div style={{ display: "flex", gap: "20px" }}>
          <Link to="/" style={{ color: "white" }}>Home</Link>
          <Link to="/dashboard" style={{ color: "white" }}>Dashboard</Link>
          <Link to="/donate" style={{ color: "white" }}>Donate</Link>
          <Link to="/request" style={{ color: "white" }}>Request</Link>
          <Link to="/donations" style={{ color: "white" }}>Donations</Link>
          <Link to="/requests" style={{ color: "white" }}>Requests</Link>
        </div>
      </nav>
    </>
  );
}