import { useState } from "react";

function App() {
  const [message, setMessage] = useState("");

  const handleUpload = () => {
    setMessage("📤 Uploading screenshot...");

    setTimeout(() => {
      setMessage("🤖 AI analyzing image...");
    }, 1000);

    setTimeout(() => {
      setMessage("✅ Issue Found: NullPointerException → Suggested Fix Applied");
    }, 2500);
  };

  return (
    <div style={{
      minHeight: "100vh",
      background: "#0f172a",
      color: "white",
      fontFamily: "sans-serif",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }}>
      <div style={{
        width: "350px",
        background: "#1e293b",
        padding: "25px",
        borderRadius: "15px",
        textAlign: "center",
        boxShadow: "0 0 20px rgba(0,0,0,0.5)"
      }}>

        <h1 style={{ marginBottom: "20px" }}>
          🚀 DevSnap AI
        </h1>

        <div style={{ marginBottom: "20px" }}>
          <h3>📊 Stats</h3>
          <p>Total Users: 1248</p>
          <p>Active Sessions: 87</p>
          <p>Status: 🟢 Online</p>
        </div>

        <div style={{ marginBottom: "20px" }}>
          <h3>⚡ AI Feature</h3>
          <p style={{ fontSize: "14px", opacity: 0.8 }}>
            Upload screenshot → AI detects error → gives fix
          </p>
        </div>

        <button
          onClick={handleUpload}
          style={{
            padding: "12px 20px",
            background: "linear-gradient(90deg,#22c55e,#4ade80)",
            border: "none",
            borderRadius: "10px",
            color: "black",
            fontWeight: "bold",
            cursor: "pointer"
          }}
        >
          Upload Screenshot
        </button>

        {message && (
          <p style={{ marginTop: "20px", fontSize: "14px" }}>
            {message}
          </p>
        )}

      </div>
    </div>
  );
}

export default App;