const express = require("express");
const {
  createUser,
  getUser,
  deleteUser,
} = require("../Controllers/userControllers");
const db = require("../db");

const userRoutes = express.Router();

userRoutes.post("/", createUser);
userRoutes.get("/:id", getUser);
userRoutes.delete("/:id", deleteUser);
// userRoutes.get("/prueba", (req, res) => {
//   res.send("el endpoint está funcionando");
//   console.log("El endpoint funciona");
// });

module.exports = userRoutes;
