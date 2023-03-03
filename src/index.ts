import express, { Express } from 'express';
import cors from 'cors';
import appRoutes from './routes';
import { pgHelper } from './database/pg-helper';

const api = express();
const port = process.env.PORT || 8080;

api.use(express.json(), cors());
appRoutes(api)

pgHelper.connect().then(() => {
    api.listen(port, () => console.log(`Odete de patinete na porta: ${port}`));
}).catch((error) => console.error(error));
