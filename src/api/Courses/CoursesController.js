/**Ulisesten at Dec 18, 2021 */

import CourseModel from './CoursesModel.js';

const CoursesController = (app, opts, done) => {

    app.get('/api/courses', getAllCourses);
    app.get('/api/courses/:id', getOneCourse);

    done();
}

///Avoiding arrow function to preserve fastify decoration object
function getAllCourses(request, reply) {
    
    try {
        CourseModel.find(null, (err, doc) => {
            
            if(err) throw err;
            if(!doc) throw new Error("No document found");
            
            reply.header('Content-Type', 'application/json; charset=utf-8');
            reply.send(doc);

        });
    } catch ( error ) {

        console.log(error);
        reply.send([]);

    }
   
}

const getOneCourse = (request, reply) => {
    reply.header('Content-Type', 'application/json; charset=utf-8');
    reply.send(
        {"id": request.params.id ,"course": "C", "id": "a98a9fd"});
}

export default CoursesController;