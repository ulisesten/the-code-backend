/**Ulisesten at March 27, 2022 */

import CourseContentModel from "./CourseContentModel.js";

/**
 * 
 * HTTP
 * get
 * post 
 * put       
 * delete
 */

const CourseContentController = (app, opts, done) => {

    app.get('/api/contents/:id', getContent);
    app.post('/api/contents/', setContent);
    app.put('/api/contents/:id', updateContent);

    done();
}

/**
 * 
 * @param {*} request 
 * @param {*} reply 
 */
function getContent(request, reply) {

    try {

        if(!request.params.id) throw new Error('No id parameter');
        
        const query = { id: request.params.id };

        CourseContentModel.findOne( query , (err, doc) => {
            
            if(err) throw err
            
            reply.header('Content-Type', 'application/json; charset=utf-8');
            reply.send(doc);

        });

    } catch( error ) {

        console.log('ContentController', error);
        reply.send({result: "Something went wrong!"});

    }
    
}

function setContent(request, reply){
    
    try {

        /**
         * @Todo Validar los campos del body
         * */

        let courseContentModel = new CourseContentModel(request.body);
        
        courseContentModel.save((err, res) => {
            if(err) throw err

            reply.header('Content-Type', 'application/json; charset=utf-8');
        
            reply.send({
                "result": "Se guardó correctamente"
            });
        });

    } catch ( error ) {

        reply.send({result: "Something went wrong!!"});
        console.log(error);

    }
    
}

function updateContent(request, reply){

    const id = request.params.id

    reply.header('Content-Type', 'application/json; charset=utf-8');
        
    reply.send({
        "result": "Se guardó correctamente"
    });

}

export default CourseContentController;