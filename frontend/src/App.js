import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:4000")
      .then(response => {
        setMessage(response.data); // Axios stores the response body in 'data'
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div>
      <h1>React + Axios Lab</h1>
      <p>{message}</p>
    </div>
  );
}

export default App;
