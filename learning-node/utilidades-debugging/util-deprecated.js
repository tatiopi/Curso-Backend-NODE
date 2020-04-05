const util = require('util');

const helloPluto = util.deprecate(() => {
    console.log('hello pluto');
}, 'pluto is deprecated. Is it not a planet anyomore');

helloPluto();