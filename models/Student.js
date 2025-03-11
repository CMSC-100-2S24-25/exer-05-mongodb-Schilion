const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  stdnum: { type: String, required: true, unique: true },
  fname: { type: String, required: true },
  lname: { type: String, required: true },
  age: { type: Number, required: true },
});

module.exports = mongoose.model("Student", studentSchema, "studentData");
