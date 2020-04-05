const promiseFunction = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        if (Math.random() < 0.5) {
            resolve('hello world');
        } else {
            reject(new Error('hello error'));
        }
    }, 2000);
});

async function AsyncAwait() {
    try {
        const message = await promiseFunction();
        console.log('message', message);
    } catch (err) {
        console.log(err);
    }
}

AsyncAwait();