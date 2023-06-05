const express = require("express");
const {
  createEarning,
  getEarning,
  deleteEarning,
} = require("../Controllers/earningControllers");
const db = require("../db");

const earningRoutes = express.Router();

earningRoutes.post("/", createEarning);
earningRoutes.get("/:id", getEarning);
earningRoutes.delete("/:id", deleteEarning);

module.exports = earningRoutes;
