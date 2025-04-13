import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [response, setResponse] = useState("");

  const sendName = async () => {
    const res = await fetch("http://localhost:5000/api/message", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name }),
    });
    const data = await res.json();
    setResponse(data.message);
  };

  return (
    <div style={{ textAlign: "center", marginTop: 100 }}>
      <h1>React + Node.js Demo</h1>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
      />
      <button onClick={sendName}>Send</button>
      <p>{response}</p>
    </div>
  );
}

export default App;

