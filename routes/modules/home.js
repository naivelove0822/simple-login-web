const express = require('express')
const router = express.Router()

const Login = require('../../models/login')

router.get('/', (req, res) => {
  res.render('index')
})

router.post('/', (req, res) => {
  //解構賦值
  const { email, password } = req.body
  //Mongoose語法 findOne()
  Login.findOne({ email: email })
    .lean()
    .then((data) => {
      if (!data) {
        return res.render('index', { email: email })
      }
      else if (data.password !== password) {
        return res.render('index', { password: password })
      }
      return res.render('success', { firstName: data.firstName })
    })
})

module.exports = router