import { Router } from 'express';
import { readdirSync } from 'fs';

const PATH_ROUTER = `${__dirname}`;
const router = Router();

readdirSync(PATH_ROUTER).forEach((file) => {
    const fileName = file.endsWith(".ts") ? file.substring(0, file.length - 3) : file;
    if (fileName !== 'index') {
        const routerName = fileName.substring(0, fileName.length - 6);
        router.use(`/${routerName}`, require(`./${fileName}`).default);
        console.log(`Router ${routerName} loaded`);
    }
});

export default router;