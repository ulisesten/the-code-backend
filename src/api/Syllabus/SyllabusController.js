/**Ulisesten at Dec 18, 2021 */

import SyllabusModel from './SyllabusModel.js';
import CourseContentModel from '../CourseContent/CourseContentModel.js';

const SyllabusController = (app, opts, done) => {

    app.get('/api/syllabus/:id', getSyllabus);
    app.post('/api/syllabus/:id', setSyllabus);

    done();
}

function getSyllabus(request, reply){
    

    try{

        if(!request.params.id) throw new Error("No id field present");

        let id = request.params.id;
        let query = {courseID: id};


        CourseContentModel.find(query, '-content', (err, doc) => {

            if(err) throw err;

            reply.header('Content-Type', 'application/json; charset=utf-8');
            reply.send({result: doc, message: ""});

        });

    } catch(err){
        console.log(err);
        reply.send({result: [], message: "no se encontró el curso"});
    }

}

const setSyllabus = (request, reply) => {
    reply.header('Content-Type', 'application/json; charset=utf-8');
    reply.send({
        "id": request.params.id,
        "syllabus": "TEST: estas estableciendo el contenido de este curso"
    });
}

export default SyllabusController;