const express = require("express");
const router = express.Router();
const {
  getUsers,
  setUser,
  setMembers,
} = require("../controllers/userController");


router.get("/user-data", getUsers);
router.post("/sign-up", setUser);


module.exports = router;
