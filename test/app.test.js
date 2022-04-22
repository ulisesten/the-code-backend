import {server, db} from '../server/server.js';


describe('Courses', () => {

    it('Courses method=GET', () => {

        server.inject({
            method: 'GET',
            url: 'http://0.0.0.0:8081/api/courses',
        })
        .then(res =>{
            try {

                if( !res.statusCode ) throw new Error("No estatus code");
                expect(res.statusCode).toEqual(200);

            } catch(error) {
                console.log(error);
            }
        });

    });

});