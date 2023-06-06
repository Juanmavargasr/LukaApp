const user = require("../models");
const db = require("../db");
const { ObjectId } = require("mongodb");

const createUser = async (req, res) => {
  try {
    const { firstName, lastName, email, phone, profileImage } = req.body;

    if (!firstName || !lastName || !email || !phone) {
      return res.status(400).json({ error: "Mandatory data missing" });
    }

    db.then(async (db) => {
      const collection = db.collection("user");
      const insertResult = await collection.insertOne({
        firstName,
        lastName,
        email,
        phone,
        profileImage,
      });
      res.json({
        firstName,
        lastName,
        email,
        phone,
        profileImage,
      });
      // res.status(200).json({ mensaje: "User succesfully created" });
    });
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ error: "Error creating user" });
  }
};

const getUser = async (req, res) => {
  try {
    const id = req.params.id;
    // id = Number(id);
    if (!id || id.length !== 24) {
      return res.status(400).json({ error: "Invalid or non exist ID" });
    }

    db.then(async (db) => {
      const collection = db.collection("user");
      const userExist = await collection.findOne({ _id: new ObjectId(id) });
      if (userExist) {
        const userFound = await collection
          .find({ _id: new ObjectId(id) })
          .toArray();
        res.json(userFound);
      } else {
        return res.status(409).json({ message: "UserID doesn't exist" });
      }
    });
  } catch (error) {
    console.error("Error getting users:", error);
    res.status(500).json({ error: "Error getting users" });
  }
};

const deleteUser = async (req, res) => {
  try {
    const id = req.params.id;

    if (!id) {
      return res.status(400).json({ error: "Mandatory data missing" });
    }

    db.then(async (db) => {
      const collection = db.collection("user");
      const userExist = await collection.findOne({ id });

      if (userExist) {
        res.send(
          "Aquí irá toda la lógica para borrar el elemento de la base de datos"
        );
      } else {
        return res.status(409).json({ message: "UserID doesn't exist" });
      }
    });
  } catch (error) {
    console.error("error", error);
  }
};

module.exports = { createUser, getUser, deleteUser };

// const getUsers = async (req, res) => {
//   try {
//     db.then(async (db) => {
//       console.log("BASE DE DATOS CONECTADA");
//       const collection = db.collection("user");
//       const findResult = await collection.find().toArray();
//       // const users = findResult;
//       res.json(findResult);
//     });
//   } catch (error) {
//     console.error("Error getting users:", error);
//     res.status(500).json({ error: "Error getting users" });
//   }
// };
