const fs = require('fs');

fs.mkdir('probando/que/hay/mas/una', { recursive: true }, (err) => {
    if (err) {
        return console.log(err);
    }
});