import { Router } from 'express';
import swaggerUi from 'swagger-ui-express';
import SwaggerDocument from '../swagger/swagger';

const swaggerOptions = {
  customCss: '.swagger-ui table tbody tr td:first-of-type { min-width: 12em; }',
  customSiteTitle: 'Natura App BFF',
};

const swaggerRouter = Router();
swaggerRouter.use('/docs', swaggerUi.serve);
swaggerRouter.get('/docs', swaggerUi.setup(SwaggerDocument, swaggerOptions));

export default swaggerRouter;
