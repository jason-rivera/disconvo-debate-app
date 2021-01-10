function loadProfileInfo() {

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

    var user = firebase.auth().currentUser;
    var name, photoUrl, convoNumber, kudosNumber, about, interests;

    if (user != null) {
        name = user.name;
        photoUrl = user.photoURL;
        convoNumber = user.convoNumber;
        kudosNumber = user.kudosNumber;
        about = user.about;
    }


    loadUsername(name);
    loadImage(photoUrl);
    loadNumberOfConvos(convoNumber);
    loadNumberOfKudos(kudosNumber);
    loadAbout(about);
    generateItems(interests);
}

function loadUsername(username) {
    //let username = "<h2>FeralCourgette2349</h2>";

    document.getElementById('username').innerHTML = username;
}

function loadImage(photoUrl) {
    img = document.createElement('img');
    //img.src = "./images/nico.png";
    img.src = photoUrl;
    document.getElementById('profile-picture').appendChild(img);
}

function loadNumberOfConvos(convoNumber) {
    //let convoNumber = 8;

    document.getElementById('num-conversations').innerHTML = '<b>' + convoNumber + '</b></br>' + "Conversations";
}

function loadNumberOfKudos(kudosNumber) {
    //let kudosNumber = 3;
    document.getElementById('num-kudos').innerHTML = '<b>' + kudosNumber + '</b></br>' + "Kudos";
}

function loadAbout(about) {
    //let about = "Hello there!";
    var metaDiv = document.getElementById('about');
    metaDiv.innerHTML = '<b>About:</b></br>' + about;
}


function generateItems(interestsList) {

    //let interestsList = ["Sports", "Donald Trump", "Video Games", "Travel"];

    //ul = document.createElement('ul');

    var metaDiv = document.getElementById('interests');
    metaDiv.innerHTML = ('<b>Interests:</b></br>');

    //document.getElementById('interests').appendChild(ul);

    interestsList.forEach(function (interest) {
    //let li = document.createElement('li');
    //ul.appendChild(li);

    //li.innerHTML += interest;

    let span = document.createElement('span');
    span.innerText = interest;
    metaDiv.appendChild(span);
});

}