const issues =  require("../models/reportIssueModel");


// const reportComplaint = async (req, res)=> {
//     const {fname, lname,societyname} = req.body;
//     const {complaint} = req.body;

//     if(!req.body) {
//         return res.status(400).json({ message: "content ca n not be empty" });
//     }
//     try {
//         const issocietyExist = await issues.findOne({ societyname:societyname});
//         console.log(issocietyExist);
//         if(issocietyExist) {
//             return res.status(422).json({error:"No Society Found"});
//         } else {
//             const newcomplaint = new issues({
//                 fname, lname,societyname,complaint,
//             });
//             const doc = await newcomplaint.save();
//             if(doc) {
//              res.status(201).json({ message: "Complaint registered successfully" });
//             }else {
//                 res.status(505).json({ message: "Not able to register your complaint..try after some time" });
//             }
//         }
//     } catch (err) {
//     console.log(err);
//   }
// }
const reportComplaint = (req, res) => {
  if (!req.body) {
    res.status(400).send({ message: "content ca n not be empty" });
    return;
  }

  const complaint = new issues({
    fname: req.body.fname,
    fname: req.body.lname,
    societyName: req.body.societyName,
    complaint: req.body.complaint,
  });
  complaint
    .save(complaint)
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
  reportComplaint,
};