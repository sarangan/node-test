const os = require('os');

console.log(os.platform()); //darwin
console.log(os.arch()); //x64
console.log(os.cpus()); //[ { model, speed, time, { user, ...}}]
console.log(os.freemem()); //2548764672
console.log(os.totalmem()); //17179869184
console.log(os.type()); //Darwin
console.log(os.tmpdir()); // /var/folders/4y/k_3zb1nd65n9lqqj5m2cvhxh0000gn/T
console.log(os.homedir()); // /Users/sara
console.log(os.hostname()); //sarangans-MacBook-Pro.local
console.log(os.uptime()); //3906