/**Ulisesten at March 27, 2022 */

import { nanoid } from 'nanoid'
import CourseContentModel from "./CourseContentModel.js";

const CourseContentController = (app, opts, done) => {

    app.get('/api/contents/:id', getContent);
    app.post('/api/contents', setContent);

    done();
}

/**
 * 
 * @param {*} request 
 * @param {*} reply 
 */
function getContent(request, reply) {

    let message = "";

    try {

        if(!request.params.id) throw new Error('No id parameter');
        
        const query = { id: request.params.id };

        CourseContentModel.findOne( query , (err, doc) => {
            
            if(err) throw err
            
            
            if(!doc) message = "No hay resultados";
            
            reply.header('Content-Type', 'application/json; charset=utf-8');
            reply.send({result: doc, message: message});

        });

    } catch( error ) {

        console.log('ContentController', error);
        reply.send({result: "No content", message: "Ocurrió un error inesperado"});

    }
    
}

function setContent(request, reply){
    
    try {
        request.body.id = nanoid();
        let courseContentModel = new CourseContentModel(request.body);
        
        courseContentModel.save((err, res) => {
            if(err) throw err

            reply.header('Content-Type', 'application/json; charset=utf-8');
        
            reply.send({ result: true, message: "" });

        });

    } catch ( error ){

        reply.send({ result: false,  message: ""});
        console.log(error);

    }
    
}

export default CourseContentController;