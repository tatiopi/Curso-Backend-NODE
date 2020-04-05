const fs = require('fs');
const server = require('http').createServer();

server.on('request', (req, res) => {
    // leer nuestro stream como un string
    const src = fs.createReadStream('./big');
    src.pipe(res);
});

server.listen(8000);