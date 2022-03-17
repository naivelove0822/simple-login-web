const mongoose = require('mongoose')
const Schema = mongoose.Schema
const loginSchema = newSchema({
  firstname: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
})

module.exports = mongooes.model('Login', loginSchema)