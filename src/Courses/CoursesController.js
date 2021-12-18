/**Ulisesten at Dec 18, 2021 */

const CoursesController = (app, opts, done) => {
    app.get('/api/courses', getAllCourses);

    done();
}

const getAllCourses = (request, reply) => {
    reply.header('Content-Type', 'application/json; charset=utf-8');
    reply.send([
        {"course": "C", "id": "a98a9fd"},
        {"course": "CPP", "id": "a98sdfd"}
    ]);
}

export default CoursesController;