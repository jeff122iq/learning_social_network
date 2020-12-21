const express = require("express");
const config = require("config");
const app = express();
const PORT = config.get("PORT", "./config/default.json");
const cors = require("cors");

app.use(cors());
app.listen(PORT);

console.log("Server start on " + PORT);
