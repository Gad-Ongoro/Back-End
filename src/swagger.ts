import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import { Express } from 'express';
import path from 'path';

const options: swaggerJsdoc.Options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Task Tracker API',
      version: '1.0.0',
      description: 'API documentation for Task Tracker',
    },
    servers: [
      {
        url: 'https://task-tracker-backend-qt3n.onrender.com',
        description: 'Production server',
      },
      {
        url: 'http://localhost:8080',
        description: 'Development server',
      },
    ],
  },
  apis: [
    path.join(__dirname, '../dist/routes/**/*.js'),
    path.join(__dirname, '../src/routes/**/*.ts'),
  ],
};

const swaggerSpec = swaggerJsdoc(options);

function swaggerDocs(app: Express) {
  // === API documentation route ===
  app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

  // === Route to serve the Swagger JSON ===
  app.get('/docs.json', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(swaggerSpec);
  });

}

export default swaggerDocs;
