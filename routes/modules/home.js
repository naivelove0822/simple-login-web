const express = require('express')
const router = express.Router()
const Login = require('../../models/login')



router.get('/', (req, res) => {
  return res.render('index')
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
      } else {
        req.session.user = data.firstName
        return res.redirect('/success')
      }
    })
})

router.get('/success', (req, res) => {
  const user = req.session.user
  return Login.findOne({ firstName: user })
    .lean()
    .then(user => {
      if (user) {
        console.log('authenticated')
        return res.render('success', { user })
      } else {
        console.log('not authenticated')
        return res.render('index')
      }
    })
})


router.get('/logout', (req, res) => {
  req.session.destroy()
  console.log('session destroyed')
  res.redirect('/')
})



module.exports = router