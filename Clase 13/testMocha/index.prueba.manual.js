const Todos = require('./index');

const todos = new Todos();

//Cargar tareas
console.log(todos.list());
todos.add('Tarea 1');
console.log(todos.list());
todos.add('Tarea 2');
console.log(todos.list());
todos.add('Tarea 3');
console.log(todos.list());
//Completar tarea 1
todos.complete('Tarea 1');
console.log(todos.list());
