const express = require('express')
const app = express()
const http = require('http').createServer(app)
const io = require('socket.io')(http)
const router = require('./routes/router')
const expha = require('express-handlebars')

app.use(express.static('public'))
const hbs = expha.create({
  defaultLayout: 'main'
})

app.use(express.urlencoded({ extended: true }))

app.use(express.json())

app.engine('handlebars', hbs.engine)

app.set('view engine', 'handlebars')

app.use('/', router)

http.listen(3000, function () {
  console.log('listening on *:3000')
})

io.on('connection', (socket) => {
  console.log('connected')
  socket.emit('message', 'connected sucsessfully')
  socket.emit('index')
})
