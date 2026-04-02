import { useState } from "react";

function App() {
  const [image, setImage] = useState(null);
  const [result, setResult] = useState("");

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
      setResult("");
    }
  };

  const handleAnalyze = () => {
    setResult("🤖 AI analyzing...");

    setTimeout(() => {
      setResult("❌ Error Detected: NullPointerException\n✅ Fix: Add null check before usage");
    }, 2000);
  };

  return (
    <div style={{
      minHeight: "100vh",
      background: "#0f172a",
      color: "white",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontFamily: "sans-serif"
    }}>
      <div style={{
        width: "350px",
        background: "#1e293b",
        padding: "20px",
        borderRadius: "15px",
        textAlign: "center"
      }}>

        <h2>🚀 DevSnap AI</h2>

        {/* Upload */}
        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          style={{ marginTop: "15px" }}
        />

        {/* Preview */}
        {image && (
          <img
            src={image}
            alt="preview"
            style={{
              width: "100%",
              marginTop: "15px",
              borderRadius: "10px"
            }}
          />
        )}

        {/* Button */}
        {image && (
          <button
            onClick={handleAnalyze}
            style={{
              marginTop: "15px",
              padding: "10px",
              width: "100%",
              background: "#22c55e",
              border: "none",
              borderRadius: "8px",
              color: "black",
              fontWeight: "bold",
              cursor: "pointer"
            }}
          >
            Analyze Screenshot
          </button>
        )}

        {/* Result */}
        {result && (
          <div style={{
            marginTop: "15px",
            padding: "10px",
            background: "#0f172a",
            borderRadius: "8px",
            fontSize: "14px",
            whiteSpace: "pre-line"
          }}>
            {result}
          </div>
        )}

      </div>
    </div>
  );
}

export default App;