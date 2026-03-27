import express, { Express } from "express";
import bodyParser from 'body-parser';
import cors from 'cors'
import { Config } from "..";
import { HomeRoute } from "./routes/HomeRouter";

export class App{
    private server: express.Application;
    private port: number;
    constructor(props: Config){
        this.server = express();
        this.port = props.port;
        this.listen(this.port);
        this.middleware();
        this.routes();
    }
    getApp():express.Application{
        return this.server;
    }
    listen(port:number):void{
        this.server.listen(port,()=>{
            console.log(`Escutando na porta: http://localhost:${port}`);
            console.log(`Documentção da aplicação: http://localhost:${port}/api-docs`);
        })
    }
    private middleware(){
        console.log('Configurando middleware...');
        const corsOptions = {
            origin: [
                'http://localhost:3000',
                'https://localhost:3000',
                // Add production domains when available
                // 'https://yourdomain.com'
            ],
            methods: ['GET'],
            credentials: true,
            optionsSuccessStatus: 204
        };
        this.server.use(cors(corsOptions));
        this.server.use(bodyParser.json());
        console.log('Middleware configurado!');
    }
    private routes(){
        this.server.use("/", HomeRoute());
    }
}