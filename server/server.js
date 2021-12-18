//import app from './app.js';
//import fastify from 'fastify';
import fastifyCors from 'fastify-cors';
//import PublicationsController from '../src/Publications/PublicationsController.js';
import server from '../src/Main.js'

const PORT   = process.env.PORT || 8081;
const ADRESS = process.env.IP   || '0.0.0.0';

/*const opts = {
    logger: {
      level: 'info',
      prettyPrint: true
    }
};

const server = fastify(opts);

server.register(PublicationsController)*/



server.register(fastifyCors, {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200 
})



server.listen(PORT, ADRESS,(err, adress) => {
    if(err){
        console.log(err)
        process.exit(1)
    }
});
