const source = require("../models");
const db = require("../db");

const createSource = async (req, res) => {
  try {
    const { id, sourceName } = req.body;
    if (!sourceName) {
      return res.status(400).json({ error: "Mandatory data missing" });
    }

    db.then(async (db) => {
      const collection = db.collection("source");
      const insertResult = await collection.insertOne({
        id,
        sourceName,
      });
      res.json({
        sourceName,
      });
      // res.status(200).json({ mensaje: "source Succesfully created" });
    });
  } catch (error) {
    console.error("Error creating source:", error);
    res.status(500).json({ error: "Error creating source" });
  }
};

const getSource = async (req, res) => {
  try {
    const id = req.params.id;
    if (!id) {
      return res.status(400).json({ error: "Mandatory data missing" });
    }

    db.then(async (db) => {
      const collection = db.collection("source");
      const sourceExist = await collection.findOne({ id });
      if (sourceExist) {
        const sourceFound = await collection.find({ id: id }).toArray();
        res.json(sourceFound);
      } else {
        return res.status(409).json({ message: "sourceID doesn't exist" });
      }
    });
  } catch (error) {
    console.error("Error getting sources:", error);
    res.status(500).json({ error: "Error getting sources" });
  }
};

const deleteSource = async (req, res) => {
  try {
    const id = req.params.id;

    if (!id) {
      return res.status(400).json({ error: "Mandatory data missing" });
    }

    db.then(async (db) => {
      const collection = db.collection("source");
      const sourceExist = await collection.findOne({ id });

      if (sourceExist) {
        res.send(
          "Aquí irá toda la lógica para borrar el elemento de la base de datos"
        );
      } else {
        return res.status(409).json({ message: "sourceID doesn't exist" });
      }
    });
  } catch (error) {
    console.error("error", error);
  }
};

module.exports = { createSource, getSource, deleteSource };
