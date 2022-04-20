/**Ulisesten at March 27, 2022 */

import CourseContentModel from "./CourseContentModel.js";

const CourseContentController = (app, opts, done) => {

    app.get('/api/contents/:id', getContent);
    app.post('/api/contents/', setContent);

    done();
}

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
        let courseContentModel = new CourseContentModel(request.body);
        
        courseContentModel.save((err, res) => {
            if(err){
                console.log("Error!!!!", err);
                return
            }

            reply.header('Content-Type', 'application/json; charset=utf-8');
        
            reply.send({
                "result": "Se guardó correctamente"
            });
        });

    } catch ( error ){

    }
    
}

export default CourseContentController;