/**Ulisesten at Dec 18, 2021 */

import SyllabusModel from './SyllabusModel.js';

const SyllabusController = (app, opts, done) => {

    app.get('/api/syllabus/:id', getSyllabus);
    app.post('/api/syllabus/:id', setSyllabus);

    done();
}

function getSyllabus(request, reply){
    
    let id = request.params.id;
    let query = {courseID: id};

    SyllabusModel.find(query, (err, doc) => {
        
        if(err) {
            reply.notFound(err);
            return
        }
        
        reply.header('Content-Type', 'application/json; charset=utf-8');
        reply.send(doc);

    })

}

const setSyllabus = (request, reply) => {
    reply.header('Content-Type', 'application/json; charset=utf-8');
    reply.send({
        "id": request.params.id,
        "syllabus": "TEST: estas estableciendo el contenido de este curso"
    });
}

export default SyllabusController;