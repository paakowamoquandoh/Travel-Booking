const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const app = express();
dotenv.config();

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
  } catch (error) {
    throw(error);
  }
}

app.listen(8800, () => {
  connect();
    console.log("Connected to LasVegas leisure center");
});
