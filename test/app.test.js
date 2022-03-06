import server from '../server/app.js';

describe('Testing controllers', () => {

    it('Courses method=GET', () => {

        server.inject({
            method: 'GET',
            url: '/api/courses',
        })
        .then(res =>{
            expect(res.statusCode).toBe(200)
        });

    });

});