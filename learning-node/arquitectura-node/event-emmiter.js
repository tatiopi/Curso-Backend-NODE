const EventEmitter = require('events');
var Util = require('util');

class Logger extends EventEmitter {
    execute(cb) {
        console.log('Before');
        this.emit('start');
        cb();
        this.emit('finish');
        console.log('after');
    }
}

const logger = new Logger();

logger.on('start', () => console.log('Starting'));
logger.on('finish', () => console.log('Finishing'));
logger.on('finish', () => console.log('it\'s done'));

logger.execute(() => console.log('hello world'));

var Arreglo = function() {
    this.data = [];
};

Arreglo.prototype.add = function(value) {
    this.data.push(value);
    // El segundo parametro son los datos que queremos pasarle 
    // a los objetos que estan subscritos a nuestro evento
    // podemos pasarle varios separados por coma
    this.emit('add', value);
};

Util.inherits(Arreglo, EventEmitter);

// subscribirse a un evento
const arr1 = new Arreglo();
arr1.on('add', function(v) {
    console.log(`Se ha añadido ${v}`);
});

arr1.add(123);
arr1.add('Hola!!');