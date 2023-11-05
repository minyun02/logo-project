import mongoose from "mongoose"

const connectDB = () => {
  mongoose.set('strictQuery', true)

  mongoose.connect(process.env.MONGODB_URL)
  .then(() => console.log('connected'))
  .catch((err) => console.log(err))
}

export default connectDB