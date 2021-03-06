/**Testing */

const PublicationsController = (app, opts, done) => {

    app.get('/api/publications', (request, reply) => {
        reply.header('Content-Type', 'application/json; charset=utf-8')
        reply.send({
            "hello": "controller",
            "method": "get",
            "mode": "all"
        });
        
    });

    app.get('/api/publications/:id', (request, reply) => {
        reply.header('Content-Type', 'application/json; charset=utf-8')
        reply.send({
            "hello": "controller",
            "method": "get",
            "mode": "one by id",
            "id": request.params.id
        });
        
    });

    app.post('/api/publications', (request, reply) => {
        reply.header('Content-Type', 'application/json; charset=utf-8')
        reply.send({
            "hello": "controller",
            "method": "post",
            "mode": "create"
        });
        
    });

    app.put('/api/publications/:id', (request, reply) => {
        reply.header('Content-Type', 'application/json; charset=utf-8')
        reply.send({
            "hello": "controller",
            "method": "put",
            "mode": "update"
        });
        
    });

    app.delete('/api/publications/:id', (request, reply) => {
        reply.header('Content-Type', 'application/json; charset=utf-8')
        reply.send({
            "hello": "controller",
            "method": "delete",
            "mode": "one by id"
        });
        
    });

    done();

}

export default PublicationsController;