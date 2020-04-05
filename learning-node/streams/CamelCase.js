const { Transform } = require('stream');
// Primera letra en mayuscula

const camelCaseTransform = new Transform({
    transform(chunk, encoding, callback) {
        let entrada = chunk.toString();
        entrada = entrada[0].toUpperCase() + entrada.substr(1, entrada.length).replace(/\s/g, '');
        console.log(entrada);
        callback();
    }
});

process.stdin.pipe(camelCaseTransform).pipe(process.stdout);