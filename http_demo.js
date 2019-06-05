const http = require('http');
const url = require('url');

const proxy = http.createServer((req, res) =>{
    res.writeHead(200, {'Content-Type': 'text/html' })
    res.write("Hello Node");

    res.write('<br/><h1>hi man</h1>');
    
    // const myUrl =  url.parse(req.url); //new URL(req.url);
    // // console.log(myUrl.searchParams.get('u'));
    // console.log();

    
    res.end('end node'); // if its not then it will go into infinite loop
});

const PORT = process.env.PORT || 3000;

proxy.listen(PORT, ()=>{
    console.log("server is running...", PORT);
});