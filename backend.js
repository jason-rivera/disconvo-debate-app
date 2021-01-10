


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