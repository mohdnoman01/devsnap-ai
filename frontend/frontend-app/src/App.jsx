import { useState } from "react";

function App() {
  const [image, setImage] = useState(null);
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const handleUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
      setResult("");
    }
  };

  const handleAnalyze = () => {
    setLoading(true);
    setResult("");

    setTimeout(() => {
      setResult("🔍 Detecting issues...");
    }, 1000);

    setTimeout(() => {
      setLoading(false);
      setResult(
        "❌ Error: NullPointerException\n\n💡 Fix:\nAdd null check before accessing object."
      );
    }, 2500);
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
        width: "800px",
        display: "flex",
        gap: "20px"
      }}>

        {/* LEFT PANEL */}
        <div style={{
          flex: 1,
          background: "#1e293b",
          padding: "20px",
          borderRadius: "12px"
        }}>
          <h3>📤 Upload Screenshot</h3>

          <input
            type="file"
            accept="image/*"
            onChange={handleUpload}
            style={{ marginTop: "10px" }}
          />

          {image && (
            <img
              src={image}
              alt="preview"
              style={{
                width: "100%",
                marginTop: "15px",
                borderRadius: "8px"
              }}
            />
          )}

          {image && (
            <button
              onClick={handleAnalyze}
              style={{
                marginTop: "15px",
                width: "100%",
                padding: "10px",
                background: "#22c55e",
                border: "none",
                borderRadius: "8px",
                fontWeight: "bold",
                cursor: "pointer"
              }}
            >
              Analyze
            </button>
          )}
        </div>

        {/* RIGHT PANEL */}
        <div style={{
          flex: 1,
          background: "#020617",
          padding: "20px",
          borderRadius: "12px"
        }}>
          <h3>🤖 AI Result</h3>

          {loading && <p>⏳ Processing...</p>}

          {result && (
            <pre style={{
              whiteSpace: "pre-line",
              fontSize: "14px"
            }}>
              {result}
            </pre>
          )}

          {!result && !loading && (
            <p style={{ opacity: 0.5 }}>
              Upload and analyze to see results
            </p>
          )}
        </div>

      </div>
    </div>
  );
}

export default App;