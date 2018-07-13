const path = require('path')

const http = require('http')

const public = path.join(__dirname, '../public')


const express = require('express')

const socketIO = require('socket.io')


var app = express()

var server = http.createServer(app)
var io = socketIO(server)

app.use(express.static(public))


io.on('connection', (socket) => {

       console.log('new user connected')

       socket.emit('newEmail')

})


io.on('disconnect', ()=> {
    
    console.log('user disconnected')
})



server.listen(process.env.PORT || 5000, ()=> {

	  console.log('Running')
})