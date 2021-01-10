var app_fireBase = {};

(function () {
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

    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    app_fireBase = firebase;
})()