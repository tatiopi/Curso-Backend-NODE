const { Duplex } = require('stream');

// Duplex usa tanto ReadableStrem como WriteStream 

const duplexStream = new Duplex({
    write(chunk, encoding, callback) {
        console.log(chunk.toString());
        callback();
    },
    read() {
        // Si "stream" actual tiene una Z 
        if (this.currentCharCode > 90) {
            this.push(null);
            return;
        }

        this.push(String.fromCharCode(this.currentCharCode++));
    }
});

duplexStream.currentCharCode = 65;
process.stdin.pipe(duplexStream).pipe(process.stdout);