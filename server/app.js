
import fastify from 'fastify';
import fastifySwagger from 'fastify-swagger';

import PublicationsController  from '../src/Controllers/Publications/PublicationsController.js';
import CoursesController       from '../src/Controllers/Courses/CoursesController.js';
import UserController          from '../src/Controllers/Users/UserController.js';
import SyllabusController      from '../src/Controllers/Syllabus/SyllabusController.js';
import CourseContentController from '../src/Controllers/CourseContent/CourseContentController.js'

import db from '../database/connect.js';
import { notFound } from '../src/Utils/Decorators.js';

const opts = {
    logger: {
      level: 'info',
      prettyPrint: true
    }
};

const app = fastify(opts);

app.decorate('db', db);

app.decorateReply('notFound', notFound);


app.register( PublicationsController  );
app.register( CoursesController       );
app.register( UserController          );
app.register( SyllabusController      );
app.register( CourseContentController );

app.register(fastifySwagger, {
  routePrefix: '/documentation',
  exposeRoute: true,
  swagger: {
    info: {
      title: "The Code API",
      description: "Docs for the API",
      version: "1.0"
    },
    externalDocs: {
      url: 'http://localhost:8081/',
      description: 'Find more info here'
    },
    host: "/",
    schemes: ['http'],
    consumes: ['application/json'],
    produces: ['application/json'],
    tags: [
      { name: 'user', description: 'User related end-points' },
      { name: 'code', description: 'Code related end-points' }
    ],
    securityDefinitions: {
      apiKey: {
        type: 'apiKey',
        name: 'apiKey',
        in: 'header'
      }
    }
  }
});

app.ready(err => {
  if (err) throw err
  app.swagger()
})


export default app;