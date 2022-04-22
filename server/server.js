import fastifyCors from 'fastify-cors';
import app from './app.js'


const PORT   = process.env.PORT || 8081;
const ADRESS = process.env.IP   || '0.0.0.0';


app.register(fastifyCors, {
    //origin: ['https://the-code-react.herokuapp.com'],
    otigin: '*',
    optionsSuccessStatus: 200 
})



app.listen(PORT, ADRESS,async (err, adress) => {
    if(err){
        console.log(err)
        process.exit(1)
    }
});