const express = require("express");
const router = express.Router();
const { getUsers, setUser } = require("../controllers/userController");


router.get("/", getUsers);
router.post("/", setUser);

module.exports = router;
