import fastify from 'fastify';
import PublicationsController from '../src/Publications/PublicationsController.js';
import CoursesController from '../src/Courses/CoursesController.js';
import UserController from './Users/UserController.js';

const opts = {
    logger: {
      level: 'info',
      prettyPrint: true
    }
};

const server = fastify(opts);

server.register(PublicationsController);
server.register(CoursesController);
server.register(UserController);

export default server;