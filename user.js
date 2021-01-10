function User(accountid,reports){
	this.interests=[];
	this.opinions=[];
	this.accountid=accountid;
	this.reports=reports;
}

User.prototype.startConversation = function(conversation){
	this.ActiveConversations.push(conversation)
}

User.prototype.endConversation(){}

User.prototype.AddOpinion(){}

User.prototype.RemoveOpinion(){}