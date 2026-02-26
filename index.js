const express = require("express");

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Serwer działa 🚀");
});

app.listen(3000, "0.0.0.0", () => {
  console.log("Server running on port 3000");
});
