var mongoose = require("mongoose");
const crypto = require("crypto");
const uuidv1 = require("uuid/v1");

var userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      maxlength: 32,
      trim: true
    },
    lastname: {
      type: String,
      maxlength: 32,
      trim: true
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    mobile:{
        type:String,
        maxlength: 10,
        trim:true,
        unique:false
    },
    address: {
      type: String,
      trim: true
    },
    pincode:{
        type: String,
        maxlength:6,
        required:true
    },
    password: {
      type: String,
      required: true
    },
    purchases: {
      type: Array,
      default: []
    }
  },
  { timestamps: true }
);


userSchema.methods = {
  autheticate: function(plainpassword) {
    return plainpassword === this.password;
  },

  
};


module.exports = mongoose.model("User", userSchema);