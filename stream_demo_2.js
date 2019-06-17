const stream = require('stream');

const rs = new stream.Readable();

let a = 0;
let b = 1;

rs._read = function(){

    if(b < 144){
        let c = a + b;
        a = b;
        b = c;
        rs.push('' + c + '\n');
    }
    else{
        rs.push(null);
    }

}

rs.pipe(process.stdout);
process.stdout.on('error', process.exit);

