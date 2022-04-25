import express from "express";
import ConnectDB from "./config/mongo_db_connect.js";
const app = express();

const PORT = process.env.PORT || 4000;

ConnectDB();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(() => console.log(`Express pp is running on port ${PORT} `));
