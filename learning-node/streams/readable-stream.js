const { Readable } = require('stream');
const readableStrem = new Readable();

// el metodo push emite un chunk o 'trozo' de informacion
readableStrem.push(`${0/0}`.repeat(10).concat('Batman, Batman'));
// mandar un null cierra el stream 
readableStrem.push(null);
// pipe nos permite transformar la informacion , aplicarf funciones , en caso mandarlo al buffer de salida
readableStrem.pipe(process.stdout);