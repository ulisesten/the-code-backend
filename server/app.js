import fastify from 'fastify';
import MongoDB from 'mongodb';
import assert from 'assert';
import PublicationsController from '../src/Publications/PublicationsController.js';
import CoursesController from '../src/Courses/CoursesController.js';
import UserController from '../src/Users/UserController.js';

const opts = {
    logger: {
      level: 'info',
      prettyPrint: true
    }
};


const server = fastify(opts);

const url = process.env.MONGO_URL || 'mongodb+srv://trackitdb:KvFwYaQRzEDa0qVK@cluster0-ahslu.mongodb.net/trackitdb?retryWrites=true&w=majority';


//MongoDB.MongoClient.connect(url, (err, db) => {

  //  assert.equal(null, err);
  let db = 'db'

    server.register(PublicationsController, db);
    server.register(CoursesController     , db);
    server.register(UserController        , db);

    //db.close();
//})


export default server;