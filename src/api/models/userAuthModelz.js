const mongoose = require('mongoose')

const userAuthSchema = new mongoose.Schema(
  {
    username: String,
    email: { type: String, unique: true },
    password: String,
  },
  {
    strict: true,
    versionKey: false,
    timestamps: true,
  }
)

const userAuthModel = mongoose.model('userAuthModel', userAuthSchema)
module.exports=userAuthModel