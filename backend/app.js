const express = require("express");
const dotenv = require("dotenv").config();
const {errorHandler} = require("./middleware/errorMiddleware");
const connectDB = require("./configDB/db");
const port = process.env.PORT || 5000;


const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}))

//routes
app.use('/home', require('./routes/users'));
app.use('/user', require('./routes/society'));

app.use(errorHandler)

app.listen(port, () => {
  console.log(`started on ${port}`);
});

connectDB();
app.use(express.json());

