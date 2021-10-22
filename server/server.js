import server from './app.js';

const opts = {
    logger: {
      level: 'info',
      prettyPrint: true
    }
};

server(opts).listen(8080,(err, adress) => {
    if(err){
        console.log(err)
        process.exit(1)
    }

});