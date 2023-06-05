const express = require("express");
const {
  createExpense,
  getExpense,
  deleteExpense,
} = require("../Controllers/expenseControllers");
const db = require("../db");

const expenseRoutes = express.Router();

expenseRoutes.post("/", createExpense);
expenseRoutes.get("/:id", getExpense);
expenseRoutes.delete("/:id", deleteExpense);

module.exports = expenseRoutes;
