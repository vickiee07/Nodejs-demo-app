const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("🚀 Hello from Node.js CI/CD Pipeline!");
});

app.listen(3180, () => console.log("Server running on port 3180"));
