const path = require('path');

console.log(path.basename(__filename)); //file name base is file name
console.log(path.basename(__filename, '.js')); // file name without ext
console.log(path.dirname(__filename)); // dir name
console.log(__dirname); // dir name
console.log(path.extname(__filename)); //ext name
console.log(path.delimiter); // delimiter :
console.log(path.sep); // separater /

let mypath = path.format({
    root: '/users',
    dir: '/booking',
    base: 'log.txt'
});

console.log(mypath); // /booking/log.txt
console.log(path.isAbsolute(__filename)); // check is full path only empty and . will exit

let temp_path = path.join("/users", "booking", "log.txt"); // join path
console.log(temp_path);

console.log(path.parse(__filename)); //obj

console.log(path.relative('/data/orandea/test/aaa', '/data/orandea/impl/bbb'));

console.log(path.resolve('/foo/bar', './baz/file')); //not sure