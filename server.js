require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const router = require("./routes/router");

const app = express();
app.use(express.json());
app.use(cors());

mongoose
  .connect("mongodb://127.0.0.1:27017/StudentDatabase")
  .then(() => console.log(" Connected to MongoDB"))
  .catch((err) => console.error(" MongoDB Connection Error:", err));

app.use("/", router);

app.listen(3000, () => {
  console.log(" Server running on http://localhost:3000");
});
