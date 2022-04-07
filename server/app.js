
import fastify from 'fastify';

import PublicationsController  from '../src/Controllers/Publications/PublicationsController.js';
import CoursesController       from '../src/Controllers/Courses/CoursesController.js';
import UserController          from '../src/Controllers/Users/UserController.js';
import SyllabusController      from '../src/Controllers/Syllabus/SyllabusController.js';
import CourseContentController from '../src/Controllers/CourseContent/CourseContentController.js'

import db from '../Database/connect.js';
import { notFound } from '../src/Utils/Decorators.js';

const opts = {
    logger: {
      level: 'info',
      prettyPrint: true
    }
};

const server = fastify(opts);

server.decorate('db', db);

server.decorateReply('notFound', notFound);


server.register( PublicationsController  );
server.register( CoursesController       );
server.register( UserController          );
server.register( SyllabusController      );
server.register( CourseContentController );


export default server;