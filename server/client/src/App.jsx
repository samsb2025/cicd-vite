import React, { useEffect, useState } from "react";
import { api } from "./api";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    api.get("/")
      .then(res => setMessage(res.data.message))
      .catch(() => setMessage("Error connecting to backend"));
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h1>CI/CD + Vite + Node + MongoDB</h1>
      <p>{message}</p>
    </div>
  );
}

export default App;

