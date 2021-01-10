const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const firebase = require('firebase');

var firebaseConfig = {
    apiKey: "AIzaSyD5h34c52OAQPx8uzVdCYITGT4jAZLxECQ",
    authDomain: "disagreement-app.firebaseapp.com",
    databaseURL: "https://disagreement-app-default-rtdb.firebaseio.com",
    projectId: "disagreement-app",
    storageBucket: "disagreement-app.appspot.com",
    messagingSenderId: "305406680698",
    appId: "1:305406680698:web:288a89b920eb88db9825c3",
    measurementId: "G-50DSSH0TT0"
};

firebase.initializeApp(firebaseConfig)
let database = firebase.database()

testobj = {"hello": "muddah"};
database.ref("test").set(testobj, function(error) {
    if (error) {
      // The write failed...
      console.log("Failed with error: " + error)
    } else {
      // The write was successful...
      console.log("success")
    }
})

database.ref('test').once('value')
.then(function(snapshot) {
    console.log( snapshot.val() )
})

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