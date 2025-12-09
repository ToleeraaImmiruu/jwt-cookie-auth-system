import mongoose from "mongoose";


const UserVerification = new mongoose.Schema({
  userId: {
    type: String,
  },
  uniqueString: {
    type: String,
  },
  createdAt: {
    type: Date,
  },
    expireAt: {
    type: Date,
  },
  
}); 
//fire a function after doc saved to db 

const User = mongoose.model('UserVerification', UserVerification)

export default UserVerification;