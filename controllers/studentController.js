const Student = require("../models/Student");

// Save a student
const saveStudent = async (req, res) => {
  try {
    const student = new Student(req.body);
    await student.save();
    res.json({ inserted: true });
  } catch (error) {
    res.json({ inserted: false, error: error.message });
  }
};

// Update a student’s fname and lname
const updateStudent = async (req, res) => {
  try {
    const updated = await Student.updateOne(
      { fname: req.body.fname },
      { $set: { fname: req.body.newFname, lname: "Parker" } }
    );
    res.json({ updated: updated.modifiedCount > 0 });
  } catch (error) {
    res.json({ error: error.message });
  }
};

// Remove a specific student
const removeUser = async (req, res) => {
  try {
    const deleted = await Student.deleteOne({ stdnum: req.body.stdnum });
    res.json({ deleted: deleted.deletedCount > 0 });
  } catch (error) {
    res.json({ error: error.message });
  }
};

// Remove all students
const removeAllUsers = async (req, res) => {
  try {
    const deleted = await Student.deleteMany({});
    res.json({ deleted: deleted.deletedCount > 0 });
  } catch (error) {
    res.json({ error: error.message });
  }
};

// Get a student by stdnum
const getUser = async (req, res) => {
  try {
    const student = await Student.find({ stdnum: req.query.stdnum });
    res.json(student);
  } catch (error) {
    res.json({ error: error.message });
  }
};

// Get all students
const getAllUsers = async (req, res) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (error) {
    res.json({ error: error.message });
  }
};

module.exports = { saveStudent, updateStudent, removeUser, removeAllUsers, getUser, getAllUsers };
