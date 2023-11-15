import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import authRoute from "./routes/auth.js";
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
  console.log("lasvegas disconnected");
})

// mongoose.connection.on("connected", () => {
//   console.log("lasvegas connected");
// })

// app.get("/", (req,res) => {
//   res.send("something")
// })


//middlewares
app.use("auth", authRoute)

app.listen(8800, () => {
  connect()
  console.log("Connected to LasVegas leisure center");
});
  