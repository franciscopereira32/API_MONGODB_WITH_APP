const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/users");
const errorHandler = require("./middlewares/errorHandler");
const app = express();
//! Connect to mongodb
mongoose
  .connect(
    "mongodb+srv://franciscopereira:senha1234@cluster0.x7j6y.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
//.connect("mongodb://cluster0.x7j6y.mongodb.net")
.then(() => console.log("Db connected successfully"))
.catch((e) => console.log(e));

//! Middlewares
app.use(express.json()); //pass incoming json data from the user
//!Routes
app.use("/", router);
//!error handler
app.use(errorHandler);
//! Start the server
const PORT = 8000;
app.listen(PORT, console.log(`Server is up and running`));
