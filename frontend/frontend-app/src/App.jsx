function App() {
  return (
    <div style={{
      minHeight: "100vh",
      background: "#0f172a",
      color: "white",
      padding: "20px",
      fontFamily: "sans-serif"
    }}>
      <h1 style={{
        fontSize: "28px",
        fontWeight: "bold"
      }}>
        🚀 DevSnap Dashboard
      </h1>

      <div style={{marginTop: "20px"}}>
        <h2>📊 Stats</h2>
        <p>Total Users: 1248</p>
        <p>Active Sessions: 87</p>
        <p>Server Status: Online</p>
      </div>

      <div style={{marginTop: "20px"}}>
        <h2>⚡ Feature Demo</h2>
        <p>Upload screenshot → AI analyzes → gives fix</p>
      </div>

      <button style={{
        marginTop: "20px",
        padding: "10px 20px",
        background: "#22c55e",
        border: "none",
        borderRadius: "8px",
        color: "black"
      }}>
        Upload Screenshot
      </button>
    </div>
  );
}

export default App;