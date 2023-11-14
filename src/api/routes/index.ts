import { Router } from 'express';
import { readdirSync } from 'fs';

const PATH_ROUTER = `${__dirname}`;
const router = Router();

readdirSync(PATH_ROUTER).forEach((file) => {
    const fileName = file.split('.')[0];
    if (fileName !== 'index') {
        const routerFile = require(`./${fileName}`);
        router.use(`/${fileName}`, routerFile.default);
    }
});

export default router;