// firebase.initializeApp(firebaseConfig)
// let database = firebase.database()

// testobj = {"hello": "muddah"};
// database.ref("test").set(testobj, function(error) {
//     if (error) {
//       // The write failed...
//       console.log("Failed with error: " + error)
//     } else {
//       // The write was successful...
//       console.log("success")
//     }
// })

// database.ref('test').once('value')
// .then(function(snapshot) {
//     console.log( snapshot.val() )
// })
//to hell with that garbage

function Opinion(topic){
	this.topic=topic;
	this.agreed=null;
	this.disagreed=null;
}

Opinion.prototype.agree = function (agreed) {
	this.agreed=agreed;
	if (this.disagreed != null){
			convo = new Conversation(this);
			return convo;
	}
	else return null;
}

Opinion.prototype.disagree = function (disagreed) {
	this.disagreed=disagreed;
	if (this.agreed != null){
			convo = new Conversation(this);
			return convo;
	}
	else return null;
}

Opinions = [new Opinion("card2")];

getOpinion = function(opNo){
	return Opinions[opNo];
}

addOpinion = function(topic){
	Opinions.push(new Opinion(topic));
	return Opinions.length-1;
}
// getOpinion = async function(opNo){
// 	var snapshot = await database.ref('opNo').once('value');
// 	return snapshot;
// }

function Conversation(opinion){
	this.topic=opinion.topic;
	this.agreed=opinion.agreed;
	this.disagreed=opinion.disagreed;
	this.room=Math.floor(Math.random()*256000).toString();
}

module.exports = {Opinion, addOpinion, getOpinion};