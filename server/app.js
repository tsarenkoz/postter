import express from "express";

const app = express();

const PORT = process.env.PORT || 4000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(() => console.log(`Express pp is running on port ${PORT} `));
