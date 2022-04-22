
import fastify from 'fastify';
import db from '../database/connect.js';

import PublicationsController  from '../src/api/Publications/PublicationsController.js';
import CoursesController       from '../src/api/Courses/CoursesController.js';
import UserController          from '../src/api/Users/UserController.js';
import SyllabusController      from '../src/api/Syllabus/SyllabusController.js';
import CourseContentController from '../src/api/CourseContent/CourseContentController.js'

import { notFound } from '../src/Utils/Decorators.js';

const opts = {
    logger: {
      level: 'info',
      prettyPrint: true
    }
};

const app = fastify(opts);

app.decorate('db', db.connection);
app.decorateReply('notFound', notFound);


app.register( PublicationsController  );
app.register( CoursesController       );
app.register( UserController          );
app.register( SyllabusController      );
app.register( CourseContentController );


export default app;