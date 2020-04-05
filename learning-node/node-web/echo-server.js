const http = require('http');
const server = http.createServer();
process.env.PORT = 8001;

server.on('request', (req, res) => {
    if (req.method === 'POST' && req.url === '/echo') {
        let body = [];
        req.on('data', chunk => {
            body.push(chunk);
        }).on('end', () => {
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            body = Buffer.concat(body).toString();
            res.end(body);
        });
    } else {
        res.statusCode = 404;
        res.end();
    }
});

// Ejercicios
// server.on('request', (req, res) => {
//     let body = [];
//     if (req.method === "POST") {
//         req.on('data', data => {
//             body.push(data);
//         }).on('end', () => {
//             body = Buffer.concat(body).toString();
//             let day = body.substr(0, 2);
//             let month = body.substr(3, 2);
//             let year = body.substr(6, 4);

//             let dayOfWeek = new Date(year, month, day).getDay();
//             switch (dayOfWeek) {
//                 case 1:
//                     dayOfWeek = 'Monday';
//                     break;
//                 default:
//                     dayOfWeek = 'Me la suda';
//             }
//             res.end(dayOfWeek);
//         });
//     }
// });

server.listen(8001);
console.log(`Servidor en la url http://localhost:${process.env.PORT}`);