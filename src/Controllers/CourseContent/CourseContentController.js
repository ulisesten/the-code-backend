/**Ulisesten at March 27, 2022 */

import CourseContentModel from "./CourseContentModel.js";

const CourseContentController = (app, opts, done) => {

    app.get('/api/contents/:id', getContent);
    //app.post('/api/contents/:id', setContent);

    done();
}

function getContent(request, reply) {
    const query = { id: request.params.id };

    CourseContentModel.findOne( query , (err, doc) => {
        
        if(err) {
            reply.notFound(err);
            return
        }
        
        reply.header('Content-Type', 'application/json; charset=utf-8');
        reply.send(doc);

    })
    
}

const setContent = (request, reply) => {
    

    reply.header('Content-Type', 'application/json; charset=utf-8');
    reply.send({
        "id": request.params.id,
        "content": "contents"
    });
}

export default CourseContentController;