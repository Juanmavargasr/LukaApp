const { MongoClient } = require("mongodb");
require("dotenv").config();
// const uri = process.env.MONGO_URI;
const uri =
  "mongodb+srv://juanmavargasr2:kdaSVteJMVTc52Ha@lukaapp.hmskvbj.mongodb.net/";
const client = new MongoClient(uri);
const dbName = "Luka";

const connect = async () => {
  try {
    await client.connect();
    console.log("Connecting to database");
  } catch (error) {
    console.error("error:", error);
  }
  return client.db(dbName);
};

const db = connect();

module.exports = db;
