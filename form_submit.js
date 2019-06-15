const http = require('http');
const queryString = require('querystring');

const server = http.createServer(function (req, res) {
    

    const html = `<h1>Contact me</h1>
        <form method="POST" action="/">
            <div>
                <span>Enter name</span>
                <input type="text" name="name"/>
            </div>
            <div>
                <span>Enter age</span>
                <input type="text" name="age" />
            </div>
            <div>
                <input type="submit" value="Submit">
            </div>
        </form>
    `;

    if(req.method === 'POST'){
        let body = '';
        req.on('data', (chunk)=>{
            body += chunk;
        });

        req.on('end', ()=>{
            console.log(body);
           // console.log(queryString.parse(body) ) ;
            res.writeHead(200, {'content-type': 'application/json'} );
            res.end( JSON.stringify(queryString.parse(body) ) );
        });

    }
    else{
        res.writeHead(200, {'content-type': 'text/html'} );
        res.end(html, "utf8");
    }


    
});

server.listen(3000, function () {
    console.log('server is running');
});
