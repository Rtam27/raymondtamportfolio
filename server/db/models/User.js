const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const axios = require("axios");
const Schema = mongoose.Schema;


const SALT_ROUNDS = 5;

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minlength: 3,
    },
    password: {
      type: String,
      required: true,
      trim: true,
      minlength: 3,
    },
  },
  { timestamps: true }
);

// userSchema.post("save", (user) => {
//   console.log("hook worked");
//   hashPassword(user);
// });

userSchema.pre("save", async function(next){
  console.log("before save", this)
  this.password = await bcrypt.hash(this.password, SALT_ROUNDS);
  next()

})

const User = mongoose.model("User", userSchema);

User.correctPassword = function (candidatePwd,user) {
  //we need to compare the plain version to an encrypted version of the password
  console.log('this is working',candidatePwd)
  console.log(user.password)
  return bcrypt.compare(candidatePwd, user.password);
};

User.generateToken = async function (user) {
 
  console.log(typeof(user._id))

  return jwt.sign({ username: user.username }, process.env.JWT);
};

/**
 * classMethods
 */
User.authenticate = async function ({ username, password }) {

  const user = await this.find({ username: username  });

  if (!user || !(await this.correctPassword(password,user[0]))) {
    const error = Error("Incorrect username/password");
    error.status = 401;
    throw error;
  }
  return this.generateToken(user[0]);
};

User.findByToken = async function (token) {
  try {
      
      const {username} = await jwt.verify(token, process.env.JWT);
 
      const user = await User.find({username:username})
    
      if (!user) {
        throw "nooo";
      }
      console.log('returning user',user)
      return user;

  } catch (ex) {
    const error = Error("bad token");
    error.status = 401;
    throw error;
  }
};

/**
 * hooks
 */
//   const hashPassword = async (user) => {

//   };


module.exports = User;
