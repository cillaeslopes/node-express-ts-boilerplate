const healthSwagger = {
  tags: ['Application Health'],
  description: 'Returns a health check for the server',
  responses: {
    200: {
      content: {
        'application/json': {
          schema: {
            type: 'object',
            properties: {
              uptime: { type: 'string' },
              message: { type: 'string' },
              timestamp: { type: 'string' },
            },
          },
        },
      },
    },
  },
};

export default healthSwagger;
