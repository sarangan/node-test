const person = require('./person');
const People = require('./people');

console.log("Hello from NodeJs");

console.log(person.name);

p1 = new People("john", 12);
p1.greeting();

console.log(__dirname);
console.log(__filename);


const Logger = require('./logger');
const logger = new Logger();
logger.on('logging', (data)=>{
    console.log(data);
});

logger.log('hi');
logger.log('hello');
logger.log('how are you');