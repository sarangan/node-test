const EventEmitter = require('events').EventEmitter;

const event = new EventEmitter();

event.on('mike', ()=>{
    console.log('i am listening');
});

event.emit('mike');