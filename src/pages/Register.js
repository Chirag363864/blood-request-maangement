import { useState } from "react";
import axios from "axios";

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=DM+Sans:wght@300;400;600&display=swap');

  .register-page {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg, #1a0a0a 0%, #3d0000 60%, #1a0a0a 100%);
    font-family: 'DM Sans', sans-serif;
  }

  .register-form-box {
    background: #fff;
    border-radius: 28px;
    padding: 48px 44px;
    box-shadow: 0 24px 80px rgba(0,0,0,0.4);
    width: 100%;
    max-width: 440px;
  }

  .register-form-box h2 {
    font-family: 'Playfair Display', serif;
    font-size: 1.9rem;
    font-weight: 900;
    margin-bottom: 10px;
  }

  .register-desc {
    color: #8a7070;
    font-size: 0.9rem;
    margin-bottom: 25px;
  }

  .input {
    width: 100%;
    padding: 13px;
    margin-bottom: 15px;
    border-radius: 10px;
    border: 1px solid #ddd;
  }

  .btn {
    width: 100%;
    padding: 15px;
    background: #e63946;
    color: #fff;
    border-radius: 10px;
    border: none;
    cursor: pointer;
    font-weight: bold;
  }
`;

export default function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    bloodGroup: ""
  });

  const submit = async () => {
    try {
      await axios.post("http://localhost:5000/api/auth/register", form);

      alert("Registered Successfully ✅");

      // optional reset
      setForm({
        name: "",
        email: "",
        password: "",
        bloodGroup: ""
      });

    } catch (err) {
      console.error(err);
      alert("Registration Failed ❌");
    }
  };

  return (
    <>
      <style>{styles}</style>

      <div className="register-page">
        <div className="register-form-box">

          <h2>Join LifeLink</h2>
          <p className="register-desc">
            Create your account and start saving lives.
          </p>

          <input
            className="input"
            placeholder="Full Name"
            value={form.name}
            onChange={e => setForm({ ...form, name: e.target.value })}
          />

          <input
            className="input"
            placeholder="Email"
            value={form.email}
            onChange={e => setForm({ ...form, email: e.target.value })}
          />

          <input
            className="input"
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={e => setForm({ ...form, password: e.target.value })}
          />

          <input
            className="input"
            placeholder="Blood Group (A+, O-, etc)"
            value={form.bloodGroup}
            onChange={e => setForm({ ...form, bloodGroup: e.target.value })}
          />

          <button className="btn" onClick={submit}>
            🩸 Create Account
          </button>

        </div>
      </div>
    </>
  );
}