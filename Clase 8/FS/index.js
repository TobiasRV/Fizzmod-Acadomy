const fs = require('fs');

// console.log('Inicio del programa');
// // Read/Write file system (forma sincronica)
// try{
//     //Leo un archivo en forma sincronica
//     let datos = fs.readFileSync('../datos.txt', 'utf-8');
//     console.log('RD1 OK ->', datos, datos.length);

//     //Escribo un archivo en forma sincronica
//     fs.writeFileSync('../datos.txt', 'General Kenovi, you are a bold one');
//     console.log('WR OK');

//     //Leo un archivo en forma sincronica
//     datos = fs.readFileSync('../datos.txt', 'utf-8');
//     console.log('RD2 OK ->', datos, datos.length);
// }catch(error){
//     console.log(`Error en lectura de archivo: ${error}`);
// }
// console.log('Fin del programa');


// //Forma async (callbacks)
// console.log('Inicio del programa');

// //Leo un archivo en forma sincronica
// fs.readFile('../datos.txt', 'utf-8', (error, datos) => {
//     if(error){
//         return `Error en lectura de archivo ${error}`;
//     }
//     console.log('RD1 OK ->', datos, datos.length);

//     fs.writeFile('../datos.txt', 'General Kenovi, you are a bold one', (error) => {
//         if(error){
//             return `Error en escritura de archivo ${error}`;
//         }
//         console.log('WR OK');

//         fs.readFile('../datos.txt', 'utf-8', (error, datos) => {
//             if(error){
//                 return `Error en lectura de archivo ${error}`;
//             }
//             console.log('RD2 OK ->', datos, datos.length);
//         });
//     });

// });

// console.log('Fin del programa');


// Forma async (Promesas)

// console.log('Inicio del progama');

// fs.promises.readFile('../datos.txt', 'utf-8')
// .then( datos => {
//     console.log('RD1 OK ->', datos, datos.length);

//     fs.promises.writeFile('../datos.txt', `${datos}General Kenovi, you are a bold one`)
//     .then( () => {
//         console.log('WR OK');

//         fs.promises.readFile('../datos.txt', 'utf-8')
//         .then( datos => console.log('RD1 OK ->', datos, datos.length))
//         .catch(error => console.log(`Error en escritura de archivo ${error}`));
//     })
//     .catch( error => console.log(`Error en escritura de archivo ${error}`));
// })
// .catch(error => console.log(`Error en escritura de archivo ${error}`));

// console.log('Fin del progama');

//Forma async (async/await promises)

console.log('Inicio del progama');
( async () => {

    try{
        let datos = await fs.promises.readFile('../datos.txt', 'utf-8');
        console.log('RD1 ok ->', datos);

        await fs.promises.writeFile('../datos.txt', `${datos}General Kenovi, you are a bold one`);
        console.log('WR OK');

        datos = await fs.promises.readFile('../datos.txt', 'utf-8');
        console.log('RD2 ok ->', datos);
    }catch(error){
        console.log(`Error en escritura de archivo ${error}`);
    }
})();
