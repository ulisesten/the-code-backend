/**Ulisesten at Dec 18, 2021 */

const CoursesController = (app, opts, done) => {
    app.get('/api/courses', getAllCourses);
    app.get('/api/courses/:id', getOneCourse);

    done();
}

const getAllCourses = (request, reply) => {
    reply.header('Content-Type', 'application/json; charset=utf-8');
    reply.send([
        {"name": "Curso de C", "lang": "C", "id": "a98a9fd"},
        {"name": "Curso de C++","lang": "CPP", "id": "a98sdfd"}
    ]);
}

const getOneCourse = (request, reply) => {
    reply.header('Content-Type', 'application/json; charset=utf-8');
    reply.send(
        {"id": request.params.id ,"course": "C", "id": "a98a9fd"});
}

export default CoursesController;