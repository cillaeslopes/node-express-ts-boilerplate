import healthSwagger from './health.swagger';

const SwaggerDocument = {
  openapi: '3.0.1',
  info: {
    version: '1.0.0',
    title: 'Boilerplate: NodeJS + Express + Typescript',
    description:
      'A boilerplate to a NodeJS Rest API using Express and TypeScript... and some other things',
  },
  tags: [{ name: 'Application Health' }],
  paths: {
    '/health': { get: healthSwagger },
  },
};

export default SwaggerDocument;
