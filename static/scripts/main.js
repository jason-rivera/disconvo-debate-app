var mainApp = {};

(function () {
    var firebase = app_firebase;
var uid = null;
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            // User is signed in.
            uid = user.uid;
        } else {
            // Redirect to login page
            uid = null;
            window.location.replace("registration.html");
        }
    });

    function logOut(){
        firebase.auth().signOut();
    }
    mainApp.logOut = logOut;
})()