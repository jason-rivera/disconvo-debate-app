const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

app.use(express.static('static'));

io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
  socket.on('chat message', msg => {
    io.emit('chat message', msg);
  });
});

http.listen(3000, () => {
  console.log('listening on *:3000');
});


// const io = require("socket.io")(3000, {
//     cors:{
//         origin:"*",
//     }
// });

// io.on('connection', socket => {
//     console.log('New User')
//     socket.emit('chat-message', 'Hello World')
// })