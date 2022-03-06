import fastifyCors from 'fastify-cors';
import server from './app.js'

const PORT   = process.env.PORT || 8081;
const ADRESS = process.env.IP   || '0.0.0.0';


server.register(fastifyCors, {
    //origin: ['https://the-code-react.herokuapp.com','http://localhost:8080', 'http://localhost:41925/'],
    otigin: '*',
    optionsSuccessStatus: 200 
})



server.listen(PORT, ADRESS,(err, adress) => {
    if(err){
        console.log(err)
        process.exit(1)
    }
});
