const request = require('supertest')('http://localhost:8080');
const expect = require('chai').expect;
const generador = require('../generador/usuarios');

describe('test api rest full (GET/POST)', () => {
    describe('GET', () => {
        it('deberia retornar un status 200', async () => {
            let response = await request.get('/api');
            // console.log(response.status);
            // console.log(response.body);
            expect(response.status).to.eql(200);
        });
    });

    describe('POST', () => {
        it('deberia incorporar un usuario', async() => {
            // let usuario = {
            //     nombre: 'Pepe',
            //     email: 'p@gmail.com'
            // }
            let usuario = generador.get();
            let response = await request.post('/api').send(usuario);
            expect(response.status).to.eql(200);

            const user = response.body;
            expect(user).to.include.keys('nombre','email');
            expect(user.nombre).to.eql(usuario.nombre);
            expect(user.email).to.eql(usuario.email);
        });
    });
});
