import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcrypt";

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "please an email"], 
    unique: true,
    lowercase: true,
    validate: [validator.isEmail,"please Enter the valid email"]
  },
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true
  },
    refreshToken: {
    type: String,
    default: null,
  },
  verified: {
    type: Boolean,
    default: false, // new field
  },
  emailToken: {
    type: String,
    default: null, 
  },
resetPasswordToken: { type: String, default: null },
resetPasswordExpires: { type: Date, default: null },

}); 
//fire a function after doc saved to db 
UserSchema.pre('save', async function () {
  if (!this.isModified('password')) return;
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

const User = mongoose.model('User', UserSchema)

export default User;