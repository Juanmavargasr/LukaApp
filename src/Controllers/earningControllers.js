const earnign = require("../models");
const db = require("../db");
const { ObjectId } = require("mongodb");

const createEarning = async (req, res) => {
  try {
    const {
      earningName,
      earningQuantity,
      recurrent,
      Frecuency,
      paymentDate1,
      received,
    } = req.body;

    if (
      !earningName ||
      !earningQuantity ||
      !recurrent ||
      !Frecuency ||
      !paymentDate1 ||
      !received
    ) {
      return res.status(400).json({ error: "Mandatory data missing" });
    }

    db.then(async (db) => {
      const collection = db.collection("earnings");
      const insertResult = await collection.insertOne({
        earningName,
        earningQuantity,
        recurrent,
        Frecuency,
        paymentDate1,
        received,
      });
      res.json({
        earningName,
        earningQuantity,
        recurrent,
        Frecuency,
        paymentDate1,
        received,
      });
      // res.status(200).json({ mensaje: "Earning succesfully created" });
    });
  } catch (error) {
    console.error("Error creating earning:", error);
    res.status(500).json({ error: "Error creating earning" });
  }
};

const getEarning = async (req, res) => {
  try {
    const id = req.params.id;
    if (!id || id.length !== 24) {
      return res.status(400).json({ error: "Invalid or non exist ID" });
    }

    db.then(async (db) => {
      const collection = db.collection("earnings");
      const earningExist = await collection.findOne({ _id: new ObjectId(id) });
      if (earningExist) {
        const earningFound = await collection
          .find({ _id: new ObjectId(id) })
          .toArray();
        res.json(earningFound);
      } else {
        return res.status(409).json({ message: "earningID doesn't exist" });
      }
    });
  } catch (error) {
    console.error("Error getting earnings:", error);
    res.status(500).json({ error: "Error getting earnings" });
  }
};

const deleteEarning = async (req, res) => {
  try {
    const id = req.params.id;

    if (!id) {
      return res.status(400).json({ error: "Mandatory data missing" });
    }

    db.then(async (db) => {
      const collection = db.collection("earnings");
      const userEarning = await collection.findOne({ id });

      if (userEarning) {
        res.send(
          "Aquí irá toda la lógica para borrar el elemento de la base de datos"
        );
      } else {
        return res.status(409).json({ message: "UserID doesn't Earning" });
      }
    });
  } catch (error) {
    console.error("error", error);
  }
};

module.exports = { createEarning, getEarning, deleteEarning };
