import UserModel from './UserModel.js'

const UserController = (app, opts, done) => {

    app.get('/api/user/:id', getUser);
    app.post('/api/user', createUser);

    //test
    app.get('/api/token', getToken)

    done();
}


const getUser = (request, reply) => {

    try{

        if(!request.params.id) throw new Error("No id field present");

        let query = {userid: request.params.id};


        UserModel.findOne(query, '-_id', (err, doc) => {

            if(err) throw err;

            reply.header('Content-Type', 'application/json; charset=utf-8');
            reply.send({result: doc, message: ""});

        });

    } catch(err){

        console.log(err);
        reply.send({result: null, message: "No se encontró la cuenta"});

    }
}

const getToken = (request, reply) => {
    reply.header('Content-Type', 'application/json; charset=utf-8');
    reply.send({result: {token: test123}, message: ""});
}

const createUser = (request, reply) => {

    try {
        request.body.id = nanoid();
        let UserModel = new UserModel(request.body);
        
        UserModel.save((err, res) => {

            if(err) throw err

            reply.header('Content-Type', 'application/json; charset=utf-8');
        
            reply.send({ result: true, message: "La cuenta se creó correctamente" });

        });

    } catch ( error ){

        console.log(error);
        reply.send({ result: false,  message: "Ocurrió un error al crear la cuenta"});

    }

}

export default UserController;