const request = require('request');

request('http://localhost:8080/api', (err, res, body) => {
    console.log('error', err);
    console.log('status code', res && res.statusCode); //Si hay respuesta imprime status code
    console.log('body', JSON.parse(body));
});
