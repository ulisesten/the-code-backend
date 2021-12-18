'use strict'

/**Unused by now*/

import fastify from 'fastify';
import { readFile } from 'fs';
import publicationsController from '../src/Publications/PublicationsController.js';


const build = (opts={}) => {
    const app = fastify(opts)

    //publicationsController(app);

    app.get('/', (request, reply) => {
    
        readFile('./view/html/home.html', (err, fileBuffer) => {
            reply.header('Content-Type', 'text/html; charset=utf-8')
            reply.send( err || fileBuffer );
        });

    });


    app.get('/css/header.css',(request, reply) => {

        readFile('./view/css/header.css', (err, fileBuffer) => {
            reply.header('Content-Type', 'text/css')
            reply.send( err || fileBuffer );
        });

    });

    return app;
}

export default build;
