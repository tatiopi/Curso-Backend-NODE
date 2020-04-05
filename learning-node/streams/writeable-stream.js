const { Writable } = require('stream');

// Metodo write
// chunck : porcion de informacion
// encoding : codifiacion 
// callback : funcio que ese ejecuta una vez terminado
const writeableStram = new Writable({
    write(chunk, encoding, callback) {
        console.log(chunk.toString());
        callback();
    }
});

// process.stdin: funcionalidad nativa para leer los datos
process.stdin.pipe(writeableStram);