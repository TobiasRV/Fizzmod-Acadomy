const HTTP = require('http');

const getPage = () => { return `<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HTML desde nodejs</title>
    <style>
        h1{
            color: purple;
        }
        p{
            color: blue;
        }
    </style>
</head>
<body>

    <h1>Titulo H1</h1>
    <p>lorem ipsum dolor sit amet, consectet</p>

</body>
</html>
`};

let visitas = 0;
const server = HTTP.createServer((req, res) => {
    // console.log(req);
    let  {url, method} = req;
    // console.log(url, method);

    if (method == 'GET'){
        if (url == '/'){
            res.writeHead(200, {'content-type': 'text/html'});
            res.end(getPage());
        }
        if (url == '/datos'){
            res.writeHead(200, {'content-type': 'text/html'});
            res.write('<h2 style = "color: blue">Hola soy un servidor HTTP</h2>');
            res.write(`<h3 style = "color: crimson"> Cantidad de visitas: ${++visitas}</h3>`);
            res.end(`<p style = "color: purple"> La fecha y hora actual es: ${new Date().toLocaleString()}</p>`);
        }else if(url == '/reset'){
            visitas = 0;
            res.writeHead(200, {'content-type': 'text/html'});
            res.end('<i>OK reset</i>');
        }else {
            res.writeHead(404, {'content-type': 'text/html'});
            res.write(`<h2 style = "color: red">ERROR 404: Resource <span style = "color: orange">${url}</span> not found</h2>`);

        }
    }else {
        res.writeHead(500, {'content-type': 'text/html'});
        res.write(`<h2 style = "color: red">ERROR 500: Method <span style = "color: orange">${method}</span> not implemented in route ${url}</h2>`);
    }
});

const PORT = process.env.PORT ||8080;
server.listen(PORT, () => {
    console.log(`Servido escuchando en port ${PORT}`);
});
