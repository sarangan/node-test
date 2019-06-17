const fs = require('fs');

const stream = fs.createReadStream(__dirname + "/people.js");
const writeStream = fs.createWriteStream(__dirname + "/people.js.backup");

stream.pipe(writeStream);

let content = '';
stream.on('data', (chunk) =>{
    //console.log(chunk.toString());
    content += chunk
});

stream.on('end', ()=>{
   console.log(content.toString());
});