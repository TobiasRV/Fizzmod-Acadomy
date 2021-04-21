const assert = require('assert');

assert(15 > 14);

var x = { a: { n: 0}}
var y = { a: { n: 0}}
var z = { a: { n: 1}}

assert.deepStrictEqual(x, y); //OK
// assert.deepStrictEqual(x, z); //Mal (===)
assert.notDeepStrictEqual(x, z); //OK
// assert.notDeepStrictEqual(x, y); //Mal

// assert.strictEqual(13,14); //Mal
// assert.strictEqual(13,'14'); //Mal (===)
assert.strictEqual(13,13); //Ok
assert.notStrictEqual(13,'13');

assert.equal(13, '13'); // OK (==)

assert.ok(true);// true: OK, false: Mal

// Si hay error salta
assert.ifError(null);//OK
// assert.ifError(0); //error
// assert.ifError('error'); //error
// assert.ifError(new Error()); //error


let err;

(() => {
    err = null;
})()

assert.ifError(err);
