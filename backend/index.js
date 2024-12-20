const express = require("express");
const cors = require("cors");

const PORT = process.env.PORT || 4000;

const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello from Node.js!");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
})
