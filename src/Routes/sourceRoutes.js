const express = require("express");
const {
  createSource,
  getSource,
  deleteSource,
} = require("../Controllers/sourceControllers");
const db = require("../db");

const sourceRoutes = express.Router();

sourceRoutes.post("/", createSource);
sourceRoutes.get("/:id", getSource);
sourceRoutes.delete("/:id", deleteSource);

module.exports = sourceRoutes;
