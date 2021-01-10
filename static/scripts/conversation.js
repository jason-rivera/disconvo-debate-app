function Conversation(user1, user2, room, log, topic) {
    this.user1 = user1;
    this.user2 = user2;
    this.inProgress = false;
    this.room = room;
    this.chatLog = [];
    this.topic = topic;
    this.flagged = false;
}

function startConversation() {
    this.inProgress = true;
}

function completeConversation() {
    /***
     * Completes a conversation. Also increments the number of conversations
     * held if one (or both) of the users is registered.
     */


    /**this.inProgress = false;

    if (user1.registered == true) {
        user1.updateConversationHistory()
    }

    if (user2.registered == true) {
        user2.numConversations++;
    }*/

}

/**function updateUserConversationHistory(conversation) {
    this.conversationHistory.push(conversation);
    this.numConversations++;
}*/

function addMessage(message) {
    this.chatLog.push(message);
}
