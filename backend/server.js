require("dotenv").config();
const { application } = require("express");
const express = require("express");
const chats = require("./data/data");
const connectDB = require("./config/db");

const app = express();
const PORT = process.env.PORT || 5000;
connectDB();

app.get("/", (req, res) => {
  res.send("API is Running.");
});

app.get("/api/chat", (req, res) => {
  res.send(chats);
});
app.get("/api/chat/:id", (req, res) => {
  const singleChat = chats.find((c) => c._id === req.params.id);
  res.send(singleChat);
});

app.listen(PORT, () => {
  console.log(`Server connected on port ${PORT}`);
});
