// Crea tu consola a partir de la clase Console

const miConsola = new console.Console(process.stdout, process.stderr);

miConsola.imprimirInfo = (msg = '') => {
    console.log('-> [Informacion] %s', msg);
};

miConsola.imprimirWarning = (msg = '') => {
    console.log('-> [Warning] %s', msg);
};

miConsola.imprimirError = (msg = '') => {
    console.log('-> [Error] %s', msg);
};

miConsola.imprimirInfo('hola buenas tardes');