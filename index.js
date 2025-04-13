const express = require("express");
const route = require("./routes/routes");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const path =require('path')

const app = express();

//static files
app.use(express.static(path.join(__dirname,'public')))

const PORT = process.env.PORT || 4005;
app.use(bodyParser.urlencoded({ extended: true }));

app.use(route);

//connect db
mongoose
  .connect("mongodb://127.0.0.1:27017/emps")
  .then(() => console.log("dataconnection established"))
  .catch((err) => console.log(err.message));

app.set("view engine", "ejs");

app.listen(PORT, () => {
  console.log(`server is listen on port number ${PORT}`);
});
