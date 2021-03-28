const socket = io();
const message = document.getElementById('message');
const send = document.getElementById('send');
const chatbox = document.getElementById('chatbox');

var jmeno = prompt("Please enter your name:");
socket.emit('login', jmeno);

send.addEventListener('click', function(e) {
    if(message.value)
        socket.emit('chat', message.value, jmeno);
});

socket.on('chat', (msg,name1) => {
    let datenow = new Date(Date.now());
    let time = datenow.getHours() + ":" + datenow.getMinutes();
    chatbox.innerHTML += "<p>"+time+" | "+name1+": "+msg+"</p>";
});
