const express = require("express");
const router = express.Router();
const { setSociety, setMembers } = require("../controllers/societyController");


router.post("/create-society", setSociety);
router.post("/add-members", setMembers)

module.exports = router;
