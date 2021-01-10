var socket = io()
const messageForm = document.getElementById('send-container')

socket.on('chat-message', data =>{
    console.log(data)
})

messageForm.addEventListener('submit', e =>{
    e.preventDefault()
})