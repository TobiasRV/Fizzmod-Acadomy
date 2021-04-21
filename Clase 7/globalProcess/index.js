// Global Process (process): Objeto global de NodeJS

// 1) Eventos
// 2) Propiedades o atributos
// 3) Metodos

// console.log(process);

// 1) Eventos
console.log('\n----- Process Events -----\n');
process.on('exit', code => {
    setTimeout(() =>{
        console.log('Esto no corre');
    }, 1000);
    console.log('Salida con codigo ' + code);
})

// 2) Propiedades o atributos
console.log('\n----- Process Properties -----\n');

process.stdout.write('>Hello there\n');
process.stdout.write('>General ');
process.stdout.write('Kenobi\n\n');


process.argv.forEach( (arg, index) => {
    console.log(index + ':' + arg + '\n');
})

console.log(`ExecPath: ${process.execPath}`);
console.log(`Platform: ${process.platform}`);
console.log(`Process ID: ${process.pid}`);
console.log(`NodeJS version: ${process.version}`);


// 3) Metodos
console.log('\n----- Process Methods -----\n');

console.log('Carpeta corriente(process.cwd()): ', process.cwd());
console.log('Carpeta corriente(__dirname): ', __dirname);
console.log('Carpeta corriente(__filename): ', __filename);
console.log('Uso de memoria(process.memoryUsage()): ', process.memoryUsage());
process.exit(0);
// process.exit(1); // Salida por error 1

console.log('\n\nFin del programa\n');
