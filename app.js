const express = require("express");
const userRoutes = require("./src/Routes/userRoutes");
const sourceRoutes = require("./src/Routes/sourceRoutes");
const earningRoutes = require("./src/Routes/earningRoutes");
const expenseRoutes = require("./src/Routes/expenseRoutes");
const { earning } = require("./src/models");

const port = 3000;
const app = express();
// const path = require("path");

app.listen(port, () => {
  console.log(`server listening in port ${3000}`);
});

app.use(express.json());

app.use("/user", userRoutes);
app.use("/source", sourceRoutes);
app.use("/earning", earningRoutes);
app.use("/expense", expenseRoutes);

app.get("/", (req, res) => {
  res.send("Welcome to Luka!");
});
