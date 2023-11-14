import express from 'express';
import cors from 'cors';

import router from "./api/routes";
import errorHandler from "./api/middlewares/errorHandler";

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api', router);

app.use(errorHandler);

export default app;