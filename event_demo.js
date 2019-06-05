const EventEmitter = require('events');

class MyEventEmitter extends EventEmitter{
}

const tempEvent = new MyEventEmitter();


tempEvent.on('custom_event', function(p){
    console.log('custom event called');
    setImmediate(()=>{ //async method
        console.log('immgidiate effect ', p);
    });
    console.log(p);
    console.log(this===tempEvent);
});


tempEvent.emit('custom_event', 12);
tempEvent.emit('custom_event');
tempEvent.emit('custom_event');

//unregister and fire once 
tempEvent.once('once', (p)=>{
    console.log('fire me', p);
});

tempEvent.emit('once', 1);
tempEvent.emit('once',2);
tempEvent.emit('once',3);


tempEvent.on('error', (err)=>{
   console.error('there is an error'); 
});

tempEvent.emit('error', new Error('whoops'));


tempEvent.on('nomad', (p)=>{
    console.log('nomad 1 - ', p);
});


tempEvent.on('nomad', (p)=>{
    console.log('nomad 2 - ', p);
});

tempEvent.emit('nomad', 'A');

tempEvent.removeListener('nomad', ()=>{
    console.log('removed event');
});

tempEvent.emit('nomad', 'B');

console.log(tempEvent.eventNames());