const express = require('express');
const socketio = require('socket.io');
const http = require('http');
const path = require('path');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

app.use(express.static(path.join(__dirname, 'public')));

io.on('connection', (socket) => {
    socket.on('chat', (msg,name) => {
        io.emit('chat', msg, name);
    });

    socket.on('login', name => {
        console.log(name);
        io.emit('chat', "se přihlásil.", name);
    });
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, function(){
    console.log(`Server listening on port ${PORT}`);
}); 

