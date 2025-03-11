const express = require("express");
const {
  saveStudent,
  updateStudent,
  removeUser,
  removeAllUsers,
  getUser,
  getAllUsers
} = require("../controllers/studentController");

const router = express.Router();

router.post("/save-student", saveStudent);
router.post("/update", updateStudent);
router.post("/remove-user", removeUser);
router.post("/remove-all-user", removeAllUsers);
router.get("/user", getUser);
router.get("/members", getAllUsers);

module.exports = router;
