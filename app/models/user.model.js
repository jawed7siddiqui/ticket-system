const mongoose = require("mongoose");

const User = mongoose.model(
  "User",
  new mongoose.Schema({
    username: String,
    email: String,
    password: String,
    address: String,
    city: String,
    state: String,
    phone: String,
    roles: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Role"
      }
    ]
  })
);

//Update New field in existing model/collection
/*
User.updateMany(
  {}, 
  {$set: {address : '',city : '',state : '' ,phone : '' }},
  {multi:true}, 
    function(err, numberAffected){  
      console.log(numberAffected);
    });

    */

module.exports = User;
