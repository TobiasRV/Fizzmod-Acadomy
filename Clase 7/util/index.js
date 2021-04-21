const util = require('util');

console.log(util.inspect.styles);
console.log(util.inspect.colors);

util.inspect.styles.boolean = 'red';
util.inspect.styles.number = 'magenta';
util.inspect.styles.string = 'yellow';


var hoy = new Date();

var test = {
    a:{                             // profundida 0
        b:{                         // profundida 1
            c:{                     // profundida 2
                d: {                // profundida 3
                    e: 'test'       // profundida 4
                }
            },
            c2: 3.77
        },
        b2: true
    },
    a2: hoy
}

console.log('\nConsole.log\n');
console.log(test);
console.log('\nConsole.log(util.inspect)\n');
console.log(util.inspect(test, {depth: 4, colors: true}));
console.log('\nConsole.dir\n');
console.dir(test);
console.log('\nConsole.dir(con arg de inspect)\n');
console.dir(test, {depth: 4, colors: true});
console.log('\nJSON.stringify\n');
console.log(JSON.stringify(test));
console.log('\nJSON.stringify(con argumentos)\n');
console.log(JSON.stringify(test, null, 2));

console.log('\n JSON \n');
let obj = {x:1, y:2, z:3};
console.log('\nobj\n');
console.log(obj);
let objSerializado = JSON.stringify(obj, ['x', 'z'], 4);
console.log('\nobj serializado\n');
console.log(objSerializado);
let objDeserializado = JSON.parse(objSerializado);
console.log('\nobj deserializado\n');
console.log(objDeserializado);

console.log('\n Util.format \n');
console.log(util.format('\n%s %s [Procentaje %d%%] %j\n', 'Hello', 'there', 23, {x: {y: {z: 5}}}));

console.log('\n console.time \n');
console.time('delay');
for(let index = 0; index < 100000; index++);
console.timeEnd('delay');
