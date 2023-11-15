const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const app = express();
dotenv.config();

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("it works");
  } catch (error) {
    throw(error);
  }
}

mongoose.connection.on("disconnected", () => {
  console.log("mongo disconnected");
})

mongoose.connection.on("connected", () => {
  console.log("mongo is connected");
})

app.get("/", (req,res) => {
  res.send("something")
})

app.listen(8800, () => {
  connect()
  console.log("Connected to LasVegas leisure center");
});
