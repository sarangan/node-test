const http = require('http');

const server = http.createServer( (req:any, res:any)=>{
    res.end("hi ts");
});

server.listen(3000, ()=>{
    console.log('server is running');
} );