const express = require("express");
const userRoutes = require("./src/Routes/userRoutes");

const port = 3000;
const app = express();
// const path = require("path");

app.listen(port, () => {
  console.log(`server listening in port ${3000}`);
});

app.use(express.json());
app.use("/user", userRoutes);
app.get("/", (req, res) => {
  res.send("Welcome to Luka!");
});
