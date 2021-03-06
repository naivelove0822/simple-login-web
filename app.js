const express = require('express')
const app = express()
const exphbs = require('express-handlebars')
const session = require('express-session')


const routes = require('./routes')
require('./config/mongoose')

const port = 3000

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

app.use(express.urlencoded({ extended: true }))
app.use(session({
  secret: 'name',
  name: 'user',
  saveUninitialized: false,
  resave: true,
}))
app.use(routes)







app.listen(port, () => {
  console.log(`login is running on http:localhost:${port}`)
})

