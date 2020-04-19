const express = require('express');
const app = express();
const { config } = require('./config/index.js');
const moviesApi = require('./routes/movies.js');
const { logErrors, errorHandler } = require('./utils/middlewares/errorHandlers');

app.use(express.json());
app.use(logErrors);
app.use(errorHandler);

moviesApi(app);

app.listen(config.port, () => {
    console.log(`Listening http://localhost:${config.port}`);
});






// clases anteriores
// app.get('/', (req, res) => {
//     res.send('hello word');
//     res.end();
// });

// app.get('/json', (req, res) => {
//     res.json({ hello: 'hello word' });
//     res.end();
// });


// app.get('/bisiesto', (req, res) => {
//     let anyo = req.params.anyo;
//     let esBisiesto = (anyo) => anyo % 4 === 0 && anyo % 100 != 0 && anyo % 400 == 0 ? 'Es bisiesto' : 'No es bisiesto';
//     res.send({ anyo: esBisiesto(anyo) });
//     res.end();
// });

// GET /user/glrodasz
// req.params.name; => "glrodasz"

// GET /shoes?order=desc&shoe[color]=blue&shoe[type]=converse
// req.query.order; => "desc"
// req.query.shoe.color => blue
// req.query.shoe.type => "converse"