

const UserController = (app, opts, done) => {

    app.get('/api/user/:id', getUser);
    app.post('/api/user', createUser);

    done();
}


const getUser = (request, reply) => {
    //Required authentication

    reply.header('Content-Type', 'application/json; charset=utf-8');
    reply.send({
        "hello": "User controller",
        "method": "get",
        "mode": "one by id",
        "id": request.params.id
    });
}

const createUser = (request, reply) => {
    reply.header('Content-Type', 'application/json; charset=utf-8')
    reply.send(request.body);
}

export default UserController;