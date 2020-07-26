const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, minlength: 5 },
  displayName: { type: String },
  isAdmin: {type: Boolean, default: false},
  isDonor: { type: Boolean },
  donorInfo: {
    
    bloodGroup: {type: String,
      validate: {
        validator: function(v) {
          return/(A|B|AB|O)/.test(v);
        }
      },
    },
    age: {type:Number},
    suburb: String,
    name: String,
   
    regEmail: {type: String, unique: true}
  }
});

module.exports = User = mongoose.model("user", userSchema);