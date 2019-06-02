const fs = require('fs');
const path = new require('path');

fs.mkdir(path.join(__dirname, "test"), {recursive: true}, (err) =>{
    if(err) throw err;
    console.log('folder created');
});

fs.writeFile( path.join(__dirname, "test", "text.txt"), "hello nodejs", (err) =>{
    if(err) throw err;
    console.log('file created');
});

fs.appendFile(path.join(__dirname, "test", "text.txt"), " how are you", (err) =>{
    if(err) throw err;
    console.log("file appended");
});

fs.readFile(path.join(__dirname, "test", "text.txt"), (err, data) =>{
    if(err) throw err;
    console.log(data);
    console.log(data.toString());
});

fs.readFile(path.join(__dirname, "test", "text.txt"), "utf-8", (err, data) =>{
    if(err) throw err;
    console.log(data);
});

fs.rename(path.join(__dirname, "test", "text.txt"), path.join(__dirname, "test", "vir.txt"), (err) =>{
    if(err) throw err;
    console.log('renamed');
});

