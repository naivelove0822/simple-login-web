const mongoose = require('mongoose')
const Login = require('../login')
const loginList = require('../../model.json').const

mongoose.connect('mongodb://localhost/login')
const db = mongoose.connection

db.on('error', () => {
  console.log('mongodb error!')
})

db.once('open', () => {
  console.log('running loginSeeder script...')

  Login.create(loginList)
    .then(() => {
      console.log('done')
      db.close()
    })
    .catch(err => console.log(err))
})
