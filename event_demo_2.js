const EventEmitter = require('events').EventEmitter;

const event = new EventEmitter();

function listenme(){
    console.log('i am listening');

    event.removeListener('mike', listenme);
}

event.on('mike', listenme);


event.emit('mike');