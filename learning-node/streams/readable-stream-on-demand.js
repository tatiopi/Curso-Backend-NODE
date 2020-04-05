const { Readable } = require('stream');
const readableStrem = new Readable({
    read(size) {
        setTimeout(() => {
            if (this.currentCharCode >= 90) {
                this.push(null);
                return;
            } else {
                this.push(String.fromCharCode(this.currentCharCode++));
            }
        }, 100);
    }
});

readableStrem.currentCharCode = 65;

readableStrem.pipe(process.stdout);