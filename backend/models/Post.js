import mongoose from "mongoose";

const Post = new mongoose.Schema({
  userId: { type: String, required: true},
  username: { type: String, required: true},
  teamName: { type: String, required: true},
  sportsType: { type: String, required: true},
  photo: { type: String, required: true}
})

const PostSchema = mongoose.model('Post', Post)

export default PostSchema