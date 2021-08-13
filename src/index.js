const express = require("express");

const app = express();
app.use("/public", express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "public/About.html");
});

app.listen(3000, () => {
  console.log("App Started in port 3000");
});
