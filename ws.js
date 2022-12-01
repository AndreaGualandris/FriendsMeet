const io = require('socket.io')();

const EventEmitter = require('events');
const eventBus = new EventEmitter();

function init_socket(server) {

    console.log('Starting ws server');

    io.attach(server);

    io.on('connection', (socket) => {

        console.log('[-ws-] Client connected');

        //sends to all except the client that called the socket event 
        socket.on('updateEvent', (eventUpdated) => {
            console.log("----[BUS]---- "  + "UPDATED")
            socket.broadcast.emit("updateSong", eventUpdated);
        })

        socket.on('join', (id, num, nick) => {
            console.log("----[BUS]---- "  + "JOIN")
            socket.broadcast.emit("join", id, num, nick);
        })

        socket.on('disjoin', (id, num, nick) => {
            console.log("----[BUS]---- "  + "DISJOIN")
            socket.broadcast.emit("disjoin", id, num, nick);
        })

         //send to all
    
        
    })

    eventBus.on('newEvent', (result) => {
        console.log("----[BUS]---- " +  "CREATED")
        io.emit("newEvent",result);
    })

    eventBus.on('deleteEvent', (id, creator) => {
        console.log("----[BUS]---- " +  "DELETED")
        io.emit("deleteEvent", id, creator );
    })

    eventBus.on('updateEvent', (result, creator) => {
        console.log("----[BUS]---- " +  "UPDATED")
        io.emit("updateEvent", result, creator);
    })
}

module.exports.init_socket = init_socket;
module.exports.eventBus = eventBus
