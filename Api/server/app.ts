import { json, urlencoded } from 'body-parser';
import express, { NextFunction, Request, Response } from 'express';
// import swaggerUi from 'swagger-ui-express';

import RegisterRouter from '../routes/register/register.routes';

class App {
    public httpServer = express();

    constructor() {
        this.httpServer.use(json({ limit: '500mb' }));

        this.httpServer.use(urlencoded({ extended: true, limit: '500mb' }));
        this.httpServer.use((req: Request, res: Response, next: NextFunction) => {
            res.header('Access-Control-Allow-Origin', 'http://localhost:4200');
            res.header(
                'Access-Control-Allow-Headers',
                'Origin, X-Requested-With, Content-Type, Accept, Cache-Control, Authorization, X-CSRFToken, X-Authorization',
            );
            res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, PATCH, OPTIONS, DELETE');
            res.header('Access-Control-Allow-Credentials', 'true');
            next();
        });

        this.httpServer.set('trust proxy', true);

        this.httpServer.get('/', (req: Request, res: Response) => {
            console.log('Welcome to Training Dashboard API');
            res.send('Welcome to Training Dashboard API');
        });



        this.httpServer.use('/api/register', RegisterRouter);


        this.httpServer.use((err: Error, req: Request, res: Response, next: NextFunction) => {
            console.log(`error in url ${req.originalUrl} - error: ${err}`);
            res.send(err.message);
            next();
        });

        process.once('uncaughtException', (err: Error) => {
            console.log(err.name, err.message);
            console.log('UNCAUGHT EXCEPTION!  Shutting down...');
            process.exit(1);
        });

        process.once('unhandledRejection', (reason: Error) => {
            console.log(reason.name, reason.message);
            console.log('UNHANDLED REJECTION! 💥 Shutting down...');
            process.exit(1);
        });
    }
}

export default new App().httpServer;