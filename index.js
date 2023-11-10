const express = require("express");
const dotenv = require("dotenv")
const app = express();
dotenv.config()

app.listen(8800, () => {
    console.log("Connected to LasVegas leisure center");
});
