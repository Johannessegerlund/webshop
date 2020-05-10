const express = require('express')
const app = express()
const http = require('http').createServer(app)
const io = require('socket.io')(http)
const router = require('./routes/router')
const expha = require('express-handlebars')
const session = require('express-session')
require('./database/Conect.js')
require('dotenv').config()

app.use(express.static('public'))
const hbs = expha.create({
  defaultLayout: 'main'
})

app.use(express.urlencoded({ extended: true }))

app.use(express.json())

app.engine('handlebars', hbs.engine)

app.set('view engine', 'handlebars')

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: false
  }
}))

app.use('/', router)

const port = process.env.PORT || '3000'

app.set('port', port)

http.listen(port, function () {
  console.log('listening on *:3000')
})

io.on('connection', (socket) => {
  console.log('connected')
  socket.emit('message', 'connected sucsessfully')
  socket.emit('index')
})

app.use((req, res, next) => {
  res.status(404).send('not found 404')
})

app.use((err, req, res, next) => {
  console.log(err.stack)
  res.status(500).send('Ups something dident go correctly 500')
})
