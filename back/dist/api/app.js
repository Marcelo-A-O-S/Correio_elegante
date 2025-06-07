"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const HomeRouter_1 = require("./routes/HomeRouter");
class App {
    constructor(props) {
        this.server = (0, express_1.default)();
        this.port = props.port;
        this.listen(this.port);
        this.middleware();
        this.routes();
    }
    getApp() {
        return this.server;
    }
    listen(port) {
        this.server.listen(port, () => {
            console.log(`Escutando na porta: http://localhost:${port}`);
            console.log(`Documentção da aplicação: http://localhost:${port}/api-docs`);
        });
    }
    middleware() {
        console.log('Configurando middleware...');
        this.server.use((0, cors_1.default)());
        this.server.use(body_parser_1.default.json());
        console.log('Middleware configurado!');
    }
    routes() {
        this.server.use("/", (0, HomeRouter_1.HomeRoute)());
    }
}
exports.App = App;
