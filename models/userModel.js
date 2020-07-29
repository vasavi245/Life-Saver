const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, minlength: 5 },
  fullName: { type: String },
    
    bloodGroup: {type: String, },
    age: {type:Number, },
    suburb: {type: String, },
    gender: {type: String, }
 
});

module.exports = User = mongoose.model("user", userSchema);