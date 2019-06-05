const util = require('util');
const EventEmitter = require('events').EventEmitter;

function UserList(){
    this.list = [];
    EventEmitter.call(this);
}

util.inherits(UserList, EventEmitter);

UserList.prototype.add = function(name){
    this.list.push(name);
    this.emit('new-user', name);
}


const list = new UserList();
list.on('new-user', function(name){
    console.log(name);
});

list.add('sara');
list.add('man');