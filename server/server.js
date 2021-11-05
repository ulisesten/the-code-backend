import server from './app.js';

const PORT   = process.env.PORT || 8080;
const ADRESS = process.env.IP   || '0.0.0.0';

const opts = {
    logger: {
      level: 'info',
      prettyPrint: true
    }
};

server(opts).listen(PORT, ADRESS,(err, adress) => {
    if(err){
        console.log(err)
        process.exit(1)
    }

});