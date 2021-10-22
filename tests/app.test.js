const { expect } = require('@jest/globals');
//const request = require('supertest');
const app = require('../server/app.js');

describe('Setting test', () => {

    it('server', () => {

        app().inject({
            method: 'GET',
            url: '/',
        })
        .then(res =>{
            expect(res.statusCode).toBe(200)
        });

    });

});