const Users = require("../models/userModel");

//@desc   Get users
//@route  Get/home/user
//@access Private

const getUsers = async (req, res) => {
  try {
    const users = await Users.find();
    res.status(200).json(users);
  } catch (err) {
    res.json({ message: err });
  }
};

const setUser = (req, res) => {
  if (!req.body) {
    res.status(400).send({ message: "content ca n not be empty" });
    return;
  }
  const user = new Users({
    fname: req.body.fname,
    lname: req.body.lname,
    username: req.body.username,
    email: req.body.email,
    phone: req.body.phone,
    societyname: req.body.societyname,
    isSocietyCreated: req.body.isSocietyCreated,
    featured: req.body.featured,
    password: req.body.password,
  });
  user
    .save(user)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "some error occurred",
      });
    });
};




module.exports = {
  getUsers,
  setUser,
};
