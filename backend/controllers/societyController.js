const Society = require("../models/societyModel");
const societyMember = require("../models/membersModel");

const setSociety = (req, res) => {
  if (!req.body) {
    res.status(400).send({ message: "content ca n not be empty" });
    return;
  }
  const society = new Society({
    societyname: req.body.societyname,
    address: req.body.address,
    eventAreaCount: req.body.eventAreaCount,
    guestRoomCount: req.body.guestRoomCount,
    isGymAvailable: req.body.isGymAvailable,
    admin: req.body.admin,
  });
  society
    .save(society)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "some error occurred",
      });
    });
  //console.log(comitteeMembers);
};

const setMembers = (req, res) => {
  if (!req.body) {
    res.status(400).send({ message: "content ca n not be empty" });
    return;
  }
  
  const membersdb = new societyMember({
    
    societyName: req.body.societyName,
    trk: req.body.trk
  });
  membersdb
    .save(membersdb)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "some error occurred",
      });
    });
    console.log(req.body.username);
};

module.exports = {
  setSociety,
  setMembers,
};
