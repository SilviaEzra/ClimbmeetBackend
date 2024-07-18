"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const user_1 = __importDefault(require("../routes/user"));
const events_1 = __importDefault(require("../routes/events"));
const location_1 = __importDefault(require("../routes/location")); // Importa las rutas de locations
const path_1 = __importDefault(require("path"));
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || '3001';
        this.middlewares();
        this.routes();
    }
    middlewares() {
        this.app.use((0, cors_1.default)({
            origin: 'http://localhost:4200', // Permitir el acceso desde tu frontend
            credentials: true
        }));
        this.app.use(express_1.default.json());
        // Servir la carpeta de uploads como estática
        this.app.use('/uploads', express_1.default.static(path_1.default.join(__dirname, '../../uploads')));
    }
    routes() {
        this.app.use('/api/users', user_1.default);
        this.app.use('/api/events', events_1.default);
        this.app.use('/api/location', location_1.default); // Agrega las rutas de locations
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log(`App corriendo en el puerto ${this.port}`);
        });
    }
}
exports.Server = Server;
