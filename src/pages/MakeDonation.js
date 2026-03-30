import { useState } from "react";
import axios from "axios";

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=DM+Sans:wght@300;400;600&display=swap');

  .donation-page {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(160deg, #fff8f0 60%, #fddede 100%);
    font-family: 'DM Sans', sans-serif;
    padding: 40px 20px;
    position: relative;
    overflow: hidden;
  }

  .donation-page::before {
    content: '🩸';
    position: absolute;
    font-size: 18rem;
    opacity: 0.03;
    top: -40px;
    right: -40px;
    pointer-events: none;
    line-height: 1;
  }

  .donation-box {
    background: #fff;
    border-radius: 28px;
    padding: 48px 44px;
    box-shadow: 0 20px 60px rgba(230,57,70,0.15);
    width: 100%;
    max-width: 440px;
    position: relative;
    overflow: hidden;
    animation: fadeUp 0.45s ease both;
  }

  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(24px); }
    to   { opacity: 1; transform: none; }
  }

  .donation-box::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 5px;
    background: linear-gradient(90deg, #b5000f, #e63946, #ff6b6b);
  }

  .donation-box-icon {
    font-size: 2.8rem;
    margin-bottom: 14px;
    display: block;
  }

  .donation-box h2 {
    font-family: 'Playfair Display', serif;
    font-size: 1.9rem;
    font-weight: 900;
    color: #1a0a0a;
    margin-bottom: 6px;
  }

  .donation-desc {
    color: #8a7070;
    font-size: 0.9rem;
    margin-bottom: 32px;
    line-height: 1.6;
  }

  .donation-input-wrap {
    margin-bottom: 18px;
  }

  .donation-input-label {
    display: block;
    font-size: 0.78rem;
    font-weight: 600;
    color: #8a7070;
    letter-spacing: 1px;
    text-transform: uppercase;
    margin-bottom: 7px;
  }

  .donation-page input {
    width: 100%;
    padding: 13px 18px;
    border-radius: 12px;
    border: 1.5px solid #f0dada;
    background: #fff8f0;
    font-size: 0.95rem;
    font-family: 'DM Sans', sans-serif;
    color: #1a0a0a;
    transition: border-color 0.2s, box-shadow 0.2s;
    outline: none;
    display: block;
  }

  .donation-page input:focus {
    border-color: #e63946;
    box-shadow: 0 0 0 3px rgba(230,57,70,0.12);
    background: #fff;
  }

  .donation-page input::placeholder {
    color: #c4a0a0;
  }

  .donation-page button {
    width: 100%;
    padding: 15px;
    background: #e63946;
    color: #fff;
    border-radius: 12px;
    font-weight: 700;
    font-size: 1rem;
    border: none;
    cursor: pointer;
    font-family: 'DM Sans', sans-serif;
    margin-top: 8px;
    box-shadow: 0 4px 20px rgba(230,57,70,0.35);
    transition: transform 0.18s, box-shadow 0.18s, background 0.18s;
    letter-spacing: 0.3px;
  }

  .donation-page button:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 28px rgba(230,57,70,0.5);
    background: #ff2d3e;
  }

  .donation-badge {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    background: rgba(230,57,70,0.08);
    border: 1px solid rgba(230,57,70,0.2);
    color: #e63946;
    border-radius: 999px;
    padding: 5px 14px;
    font-size: 0.78rem;
    font-weight: 600;
    letter-spacing: 1px;
    text-transform: uppercase;
    margin-bottom: 20px;
  }
`;

export default function MakeDonation() {
  const [data, setData] = useState({});

  const submit = async () => {
    await axios.post("http://localhost:5000/api/donation", data, {
      headers: { Authorization: localStorage.getItem("token") }
    });
    alert("Donation Added");
  };

  return (
    <>
      <style>{styles}</style>

      <div className="donation-page">
        <div style={{
          width: "300px",
          margin: "100px auto",
          padding: "20px",
          background: "white",
          borderRadius: "10px",
          boxShadow: "0 2px 10px rgba(0,0,0,0.1)"
        }} className="donation-box">

          <span className="donation-box-icon">🩸</span>
          <div className="donation-badge">Save a Life Today</div>
          <h2>Donate Blood</h2>
          <p className="donation-desc">Your single donation can save up to 3 lives. Fill in the details below.</p>

          <div className="donation-input-wrap">
            <label className="donation-input-label">Blood Group</label>
            <input
              placeholder="e.g. O+, A-, B+"
              onChange={e => setData({...data, bloodGroup:e.target.value})}
            />
          </div>

          <div className="donation-input-wrap">
            <label className="donation-input-label">Quantity (Units)</label>
            <input
              placeholder="e.g. 2"
              onChange={e => setData({
                ...data,
                quantity: Number(e.target.value)
              })}
            />
            <input
  placeholder="City"
  onChange={e => setData({...data, city: e.target.value})}
/>

<input
  placeholder="Blood Bank Name"
  onChange={e => setData({...data, bloodBank: e.target.value})}
/>
          </div>

          <button onClick={submit}>❤️ Submit Donation</button>

        </div>
      </div>
    </>
  );
}