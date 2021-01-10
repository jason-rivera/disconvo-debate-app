const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const firebase = require('firebase');
const bodyParser=require('body-parser');
const backend = require('./backend');

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

//app.set('view engine', 'ejs');
app.set('views', __dirname+'/views');
app.engine('html',require('ejs').renderFile);
app.set('view engine', 'html');
app.use(express.static('static'));
jsonParser = bodyParser.json();

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

app.get('/swipecards', function(req, res) {
    var opinions = Opinions;
    var hello = "hello!!!!!!!!";
    res.render('swipecards.html', {opinions: Opinions, hello: hello});
});

app.get('/conversation/:roomno', function(req, res) {
    var room = req.params.roomno;
    res.render('conversation.html', {room: room});
});

app.get('/conversations/:userid', function(req, res) {
    var conversations = Conversations[req.params.userid] ?? [];
    res.render('conversation-list.html', {conversations: conversations});
});


app.post('/opinions/:opno/agree', jsonParser, function (req, res){
  console.log(req.body.userId);
  opinion = getOpinion(req.params.opno);
  if (opinion != null){
   convo = opinion.agree(req.body.userId);
   if (convo != null){
     res.redirect('/conversation.html?'+convo.room);
     return;
   }
  }
  console.log(Conversations);
  res.send('OK');
})

app.post('/opinions/:opno/disagree', jsonParser, function (req, res){
  opinion = getOpinion(req.params.opno);
  if (opinion != null){
   convo = opinion.disagree(req.body.userId);
   if (convo != null){
     res.redirect('/conversation.html?'+convo.room);
     return;
   }
  }
  res.send('OK');
})

// const io = require("socket.io")(3000, {
//     cors:{
//         origin:"*",
//     }
// });

// io.on('connection', socket => {
//     console.log('New User')
//     socket.emit('chat-message', 'Hello World')
// })