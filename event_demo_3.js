const EventEmitter = require('events').EventEmitter;
const util = require('util');

function Users(){
    this.users = [];
    EventEmitter.call(this);
}

util.inherits(Users, EventEmitter);

Users.prototype.add = function(user){
    this.users.push(user);
    this.emit('add_user', user);
}

const user = new Users();

user.on('add_user', (user)=>{
    console.log(user);
});


user.add('sara');
user.add('man');