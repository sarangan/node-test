const http = require('http');
const fs = require('fs');


const server = http.createServer( (req, res) =>{
    res.writeHead(200, {'content-type' : 'text/html'});
    if(req.url == '/'){
        fs.readFile(__dirname + '/index.html', (err, content)=>{
            res.end(content, "utf8");
        });
        
        /*
        const readStream = fs.createReadStream(__dirname + "/index.html");
        let content = '';
        readStream.on('data', (chunk)=>{
            content += chunk
            res.write(content.toString());
        });

        readStream.on('end', ()=>{
            //res.end(content.toString(), "utf8");
            res.end();
        });
        */
        
    }
});

// io.emit('chat message', { for: 'everyone' });

const io = require('socket.io')(http);

io.on('connection', function(socket){
    console.log('a user connected');

    let st = setInterval( ()=>{
        socket.emit('chat message',  Math.random());
    }, 300 )
    
   
    //io.emit('some event', { for: 'everyone' });

    socket.on('chat message', function(msg){
        console.log('message: ' + msg);
    });

    socket.broadcast.emit('chat message', 'global message');

    socket.on('disconnect', function(){
        console.log('user disconnected');
        clearInterval(st);
    });

});


server.listen(3000, ()=>{
    console.log('server is running');
});

io.listen(server);