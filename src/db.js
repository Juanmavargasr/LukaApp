const { MongoClient } = require("mongodb");
require("dotenv").config();
// const uri = process.env.MONGO_URI;
const uri =
  "mongodb+srv://juanmavargasr2:kdaSVteJMVTc52Ha@lukaapp.hmskvbj.mongodb.net/";
const client = new MongoClient(uri);
// const client = new MongoClient("mongodb://127.0.0.1:27017");
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
