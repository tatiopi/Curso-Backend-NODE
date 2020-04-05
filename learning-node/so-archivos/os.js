const os = require('os');

console.log('CPU info', os.cpus());
console.log('IP Address', os.networkInterfaces().Ethernet.map(i => i.address));

console.log('Free memory', os.freemem());
console.log("Type: ", os.type());
console.log('SP version', os.release());
console.log('User info: ', os.userInfo());