const fs = require('fs');

const out = fs.createWriteStream('./out.log');
const err = fs.createWriteStream('./err.log');

// La clase console recibe dos parametros 
// esto sera las funciones que se utilicen para salida y entrada
const consoleFile = new console.Console(out, err);

setInterval(() => {
    consoleFile.log(new Date());
    consoleFile.error(new Error('oops!'));
}, 2000);