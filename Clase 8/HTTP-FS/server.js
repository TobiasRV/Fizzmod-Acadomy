const HTTP = require('http');
const fs = require('fs');

let visitas = 0;
const server = HTTP.createServer((req, res) => {
    // console.log(req);
    let  {url, method} = req;
    // console.log(url, method);

    if (method == 'GET'){
        if (url == '/'){
            let archivo = './public/index.html';

            // //Lectura sincronica bloqueante NO USAR!!!
            // try {
            //     let page = fs.readFileSync(archivo);
            //     res.writeHead(200, {'content-type': 'text/html'});
            //     res.end(page);

            // } catch (error) {
            //     res.writeHead(404, {'content-type': 'text/html'});
            //     res.end(`<h2 style = "color: red">ERROR 404: Resource <span style = "color: orange">${archivo}</span> not found</h2>`);
            // }

            // // Lectura async NO BLOQUEANTE
            // fs.readFile(archivo, (error, page) => {
            //     if(error){
            //         res.writeHead(404, {'content-type': 'text/html'});
            //         res.end(`<h2 style = "color: red">ERROR 404: Resource <span style = "color: orange">${archivo}</span> not found</h2>`);
            //     }else{
            //         res.writeHead(200, {'content-type': 'text/html'});
            //         res.end(page);
            //     }
            // })

            // //Lectura async (promsice then catch)
            // fs.promises.readFile(archivo)
            // .then( page => {
            //     res.writeHead(200, {'content-type': 'text/html'});
            //     res.end(page);
            // })
            // .catch( error => {
            //     res.writeHead(404, {'content-type': 'text/html'});
            //     res.end(`<h2 style = "color: red">ERROR 404: Resource <span style = "color: orange">${archivo}</span> not found</h2>`);
            // });

            //Lectura async (promise await)
            // try {
            //     let page = await fs.promises.readFile(archivo);
            //     res.writeHead(200, {'content-type': 'text/html'});
            //     res.end(page);
            // } catch (error) {
            //     res.writeHead(404, {'content-type': 'text/html'});
            //     res.end(`<h2 style = "color: red">ERROR 404: Resource <span style = "color: orange">${archivo}</span> not found</h2>`);
            // }
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
