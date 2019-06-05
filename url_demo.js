const url = require('url');
const myUrl = new URL('https://www.google.com:1200/users?userid=12#foo');
console.log(myUrl.href); //https://www.google.com:1200/users?userid=12#foo
console.log(myUrl.toString()); //https://www.google.com:1200/users?userid=12#foo
console.log(myUrl.host);  //www.google.com:1200
console.log(myUrl.hostname); //www.google.com
console.log(myUrl.origin); //https://www.google.com:1200
console.log(myUrl.hash); //#foo
console.log(myUrl.pathname); // /users
console.log(myUrl.port); //1200
console.log(myUrl.search); //?userid=12 GET & SET
console.log(myUrl.protocol); // https http
console.log(myUrl.searchParams); // URLSearchParams { 'userid' => '12' }
console.log(myUrl.searchParams.get('userid')); // 12
myUrl.searchParams.append('email', 'a@b.com'); //https://www.google.com:1200/users?userid=12&email=a%40b.com#foo
console.log(myUrl.href); 
myUrl.searchParams.forEach((v,k) => {
    console.log(k , v);
});