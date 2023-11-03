import mongoose from "mongoose";

const User = new mongoose.Schema({
  userId: { type: String, required: true},
  name: { type: String, required: true},
  gender: {type: String, required: true}
})

const UserSchema = mongoose.model('User', User)

export default UserSchema