const Login = require('../login')
const loginList = require('../../model.json').const
const db = require('../../config/mongoose')



db.once('open', () => {
  console.log('running loginSeeder script...')

  Login.create(loginList)
    .then(() => {
      console.log('done')
      db.close()
    })
    .catch(err => console.log(err))
})
