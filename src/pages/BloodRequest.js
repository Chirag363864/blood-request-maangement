import { useState } from "react";
import axios from "axios";

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=DM+Sans:wght@300;400;600&display=swap');

  .request-page {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(160deg, #fff8f0 60%, #fddede 100%);
    font-family: 'DM Sans', sans-serif;
    padding: 40px 20px;
  }

  .request-page .card {
    background: #fff;
    border-radius: 28px;
    padding: 48px 44px;
    box-shadow: 0 20px 60px rgba(230,57,70,0.15);
    width: 100%;
    max-width: 450px;
    border: 1.5px solid #f0dada;
    position: relative;
  }

  .request-page .card h2 {
    font-family: 'Playfair Display', serif;
    font-size: 1.9rem;
    font-weight: 900;
    color: #1a0a0a;
    margin-bottom: 8px;
  }

  .request-page .input {
    width: 100%;
    padding: 13px 18px;
    border-radius: 12px;
    border: 1.5px solid #f0dada;
    background: #fff8f0;
    margin-bottom: 16px;
  }

  .request-page .btn {
    width: 100%;
    padding: 15px;
    background: #e63946;
    color: #fff;
    border-radius: 12px;
    font-weight: 700;
    border: none;
    cursor: pointer;
  }

  .result-card {
    background: #fff8f0;
    padding: 15px;
    border-radius: 12px;
    margin-top: 12px;
    border: 1px solid #f0dada;
  }
`;

export default function BloodRequest() {
  const [data, setData] = useState({});
  const [results, setResults] = useState([]);
const submit = async () => {
  try {
    console.log("Sending request:", data);

    // 🔴 1. SAVE REQUEST
    const saveRes = await axios.post(
      "http://localhost:5000/api/request",
      data
    );
    console.log("Request saved:", saveRes.data);

    // 🔵 2. FIND BLOOD
    const findRes = await axios.post(
      "http://localhost:5000/api/request/find-blood",
      { bloodGroup: data.bloodGroup }
    );
    console.log("Blood found:", findRes.data);

    setResults(findRes.data);

    alert("Success!");

  } catch (err) {
    console.error("FULL ERROR:", err);
    console.log("ERROR RESPONSE:", err.response);

    alert("Error sending request");
  }
};

  return (
  <>
    <style>{styles}</style>

    <div className="request-page">
      <div className="card">

        <h2>Request Blood</h2>

        <input
          className="input"
          placeholder="Blood Group"
          onChange={e => setData({ ...data, bloodGroup: e.target.value })}
        />

        <input
          className="input"
          placeholder="Quantity"
          onChange={e => setData({ ...data, quantity: e.target.value })}
        />

        <input
          className="input"
          placeholder="Your City"
          onChange={e => setData({ ...data, city: e.target.value })}
        />

        {/* ✅ ONLY ONE BUTTON */}
        <button className="btn" onClick={submit}>
          🩸 Submit Request
        </button>

        {/* 🔥 RESULTS SECTION */}
        {results.length > 0 && (
          <div style={{ marginTop: "25px" }}>
            <h3>Available Blood Banks</h3>

            {results.map((d, i) => {
              const bank = d._id?.bloodBank;
              const city = d._id?.city;

              return (
                <div
                  key={i}
                  style={{
                    background: "#fff8f0",
                    padding: "15px",
                    borderRadius: "12px",
                    marginBottom: "12px"
                  }}
                >
                  <h4>{bank || "Unknown Bank"}</h4>
                  <p>📍 {city || "Unknown City"}</p>
                  <p>🩸 Units: {d.totalUnits}</p>

                  {/* 🔥 VIEW LOCATION BUTTON */}
                  {bank && city && (
                    <a
                      href={`https://www.google.com/maps/search/${encodeURIComponent(
                        bank + " " + city
                      )}`}
                      target="_blank"
                      rel="noreferrer"
                      style={{
                        display: "inline-block",
                        marginTop: "8px",
                        padding: "8px 12px",
                        background: "#e63946",
                        color: "white",
                        borderRadius: "8px",
                        textDecoration: "none"
                      }}
                    >
                      📍 View Location
                    </a>
                  )}
                </div>
              );
            })}
          </div>
        )}

      </div>
    </div>
  </>
);}