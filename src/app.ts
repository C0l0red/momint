import express, { Request, Response } from 'express';
import users from './users';
import nfts from './nfts';
import connect from './config/database.config';
import paginationMiddleware from './middleware/pagination.middleware';
import {
  errorResponder,
  errorLogger,
  invalidPathHandler,
} from './middleware/error-handlers.middleware';

const app = express();
connect();

app.get('/', (req: Request, res: Response) => {
  res.send("Paschal's NFT API");
});

app.use(paginationMiddleware);
app.use('/user', users);
app.use('/nft', nfts);

app.use(errorResponder);
app.use(errorLogger);
app.use(invalidPathHandler);

export default app;

app.listen(5000, () => console.log('Server running'));
