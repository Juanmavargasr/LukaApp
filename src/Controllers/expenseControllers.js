const earnign = require("../models");
const db = require("../db");
const { ObjectId } = require("mongodb");

const createExpense = async (req, res) => {
  try {
    const { expenseName, expenseQuantity, recurrent, frecuency } = req.body;

    if (!expenseName || !expenseQuantity || !recurrent || !frecuency) {
      return res.status(400).json({ error: "Mandatory data missing" });
    }

    db.then(async (db) => {
      const collection = db.collection("earnings");
      const insertResult = await collection.insertOne({
        expenseName,
        expenseQuantity,
        recurrent,
        frecuency,
      });
      res.json({
        expenseName,
        expenseQuantity,
        recurrent,
        frecuency,
      });
      // res.status(200).json({ mensaje: "Earning succesfully created" });
    });
  } catch (error) {
    console.error("Error creating earning:", error);
    res.status(500).json({ error: "Error creating earning" });
  }
};

const getExpense = async (req, res) => {
  try {
    const id = req.params.id;
    if (!id || id.length !== 24) {
      return res.status(400).json({ error: "Invalid or non exist ID" });
    }
    db.then(async (db) => {
      const collection = db.collection("expenses");
      const expenseExist = await collection.findOne({ _id: new ObjectId(id) });
      if (expenseExist) {
        const expenseFound = await collection
          .find({ _id: new ObjectId(id) })
          .toArray();
        res.json(expenseFound);
      } else {
        return res.status(409).json({ message: "expenseID doesn't exist" });
      }
    });
  } catch (error) {
    console.error("Error getting expenses:", error);
    res.status(500).json({ error: "Error getting expenses" });
  }
};

const deleteExpense = async (req, res) => {
  try {
    const id = req.params.id;

    if (!id) {
      return res.status(400).json({ error: "Mandatory data missing" });
    }

    db.then(async (db) => {
      const collection = db.collection("expenses");
      const userExpense = await collection.findOne({ id });

      if (userExpense) {
        res.send(
          "Aquí irá toda la lógica para borrar el elemento de la base de datos"
        );
      } else {
        return res.status(409).json({ message: "UserID doesn't Expense" });
      }
    });
  } catch (error) {
    console.error("error", error);
  }
};

module.exports = { createExpense, getExpense, deleteExpense };
