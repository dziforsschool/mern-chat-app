const express = require("express");
const dotenv = require("dotenv");
const { chats } = require("./data/data");
const connectDatabase = require("./config/databaseConnector");
const colors = require("colors");

const app = express();
dotenv.config();
connectDatabase();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/api/chat", (req, res) => {
  res.send(chats);
});

app.get("/api/chat/:id", (req, res) => {
  const singleChat = chats.find((c) => c._id === req.params.id);
  res.send(singleChat);
});

const port = process.env.PORT || 5000;

app.listen(port, console.log(`Server started on port ${port}`.yellow.bold));
