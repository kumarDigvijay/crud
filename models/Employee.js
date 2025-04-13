const mongoose = require("mongoose");

let employeeScheema = new mongoose.Schema({
  image:{
    type:String,
    required:false
  },  
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
});
module.exports =mongoose.model('Employee',employeeScheema)