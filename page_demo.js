const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer( (req, res) =>{
    if(req.url == '/'){
        res.writeHead(200, {'Content-Type': 'text/html'});
        fs.readFile( path.join(__dirname, "public", "index.html"), (err, content) =>{
            if(err){
                if( err.code == ENONET){
                    res.end("No such a  file");
                }
            }
            res.end(content, "utf8");
        });
    }
    else if(req.url == '/users'){
        res.writeHead(200, {'Content-Type': 'application/json'});
        const users = [
            {user_id : 1, name: 'sara'},
            {user_id : 2, name: 'sarangan'},
        ];
        res.end(JSON.stringify(users));
    }
});

server.listen(3000, ()=>{
 console.log('server is running');
});