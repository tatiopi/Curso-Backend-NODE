//require('dotenv').config();
require('dotenv').config({ path: __dirname + '/../.env' });

const config = {
    dev: process.env.NODE_ENV !== 'production',
    port: process.env.PORT || 3000,
    corts: process.env.CORS,
    DB_USER: process.env.DB_USER,
    DB_PASSWORD: process.env.DB_PASSWORD,
    DB_HOST: process.env.DB_HOST,
    DB_NAME: process.env.DB_NAME
};

module.exports = { config };