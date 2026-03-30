import { useState } from "react";
import axios from "axios";

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=DM+Sans:wght@300;400;600&display=swap');

  .login-page {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg, #1a0a0a 0%, #3d0000 60%, #1a0a0a 100%);
    font-family: 'DM Sans', sans-serif;
    padding: 40px 20px;
    position: relative;
    overflow: hidden;
  }

  .login-page::before {
    content: '';
    position: absolute;
    width: 600px; height: 600px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(230,57,70,0.18) 0%, transparent 70%);
    top: -160px; left: -180px;
    pointer-events: none;
  }

  .login-page::after {
    content: '';
    position: absolute;
    width: 400px; height: 400px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(230,57,70,0.13) 0%, transparent 70%);
    bottom: -100px; right: -80px;
    pointer-events: none;
  }

  .login-form-box {
    background: #fff;
    border-radius: 28px;
    padding: 48px 44px;
    box-shadow: 0 24px 80px rgba(0,0,0,0.4);
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

  .login-form-box::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 5px;
    background: linear-gradient(90deg, #b5000f, #e63946, #ff6b6b);
  }

  .login-form-icon {
    font-size: 2.8rem;
    margin-bottom: 14px;
    display: block;
  }

  .login-form-box h2 {
    font-family: 'Playfair Display', serif;
    font-size: 1.9rem;
    font-weight: 900;
    color: #1a0a0a;
    margin-bottom: 6px;
  }

  .login-form-desc {
    color: #8a7070;
    font-size: 0.9rem;
    margin-bottom: 32px;
    line-height: 1.6;
  }

  .login-input-label {
    display: block;
    font-size: 0.78rem;
    font-weight: 600;
    color: #8a7070;
    letter-spacing: 1px;
    text-transform: uppercase;
    margin-bottom: 7px;
  }

  .login-input-wrap {
    margin-bottom: 18px;
  }

  .login-page input {
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

  .login-page input:focus {
    border-color: #e63946;
    box-shadow: 0 0 0 3px rgba(230,57,70,0.12);
    background: #fff;
  }

  .login-page input::placeholder {
    color: #c4a0a0;
  }

  .login-page button {
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

  .login-page button:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 28px rgba(230,57,70,0.5);
    background: #ff2d3e;
  }

  .login-footer {
    text-align: center;
    margin-top: 22px;
    font-size: 0.87rem;
    color: #8a7070;
  }

  .login-footer a {
    color: #e63946;
    font-weight: 600;
    text-decoration: none;
  }

  .login-footer a:hover {
    text-decoration: underline;
  }
`;

const containerStyle = {
  minHeight: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const formStyle = {
  width: "300px",
};

const inputStyle = {
  width: "100%",
  marginBottom: "12px",
};

const buttonStyle = {
  width: "100%",
};

export default function Login() {
  const [form, setForm] = useState({});

  const submit = async () => {
    const res = await axios.post("http://localhost:5000/api/auth/login", form);
    localStorage.setItem("token", res.data.token);
    alert("Login Success");
  };

  return (
    <>
      <style>{styles}</style>

      <div style={containerStyle} className="login-page">
        <div style={formStyle} className="login-form-box">

          <span className="login-form-icon">🔐</span>
          <h2>Welcome Back</h2>
          <p className="login-form-desc">Login to manage your donations and requests.</p>

          <div className="login-input-wrap">
            <label className="login-input-label">Email</label>
            <input placeholder="you@example.com"
              style={inputStyle}
              onChange={e => setForm({...form, email:e.target.value})}
            />
          </div>

          <div className="login-input-wrap">
            <label className="login-input-label">Password</label>
            <input placeholder="••••••••"
              type="password"
              style={inputStyle}
              onChange={e => setForm({...form, password:e.target.value})}
            />
          </div>

          <button style={buttonStyle} onClick={submit}>🔑 Login</button>

          <div className="login-footer">
            Don't have an account? <a href="/register">Register here</a>
          </div>

        </div>
      </div>
    </>
  );
}