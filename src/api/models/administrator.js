const mongoose = require('mongoose')

const adminSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    phone: {
      type: Number,
      required: true,
    },
    gender: {
      type: String,
      required: true
    },
    role: {
      type: String,
      required: true,
      default: "admin"
    },
    school_name: {
      type: String,
      required: true,
    },
    uid: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    files: {
      type: String,
      required: true
    }
  },
  {
    strict: true,
    versionKey: false,
    timestamps: true,
  }
)

const adminModel = mongoose.model('admin', adminSchema)
module.exports=adminModel