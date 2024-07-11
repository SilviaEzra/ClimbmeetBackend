"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/index.ts
const connections_1 = __importDefault(require("./db/connections"));
const server_1 = require("./models/server");
const startServer = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield connections_1.default.sync({ force: true });
        console.log('Database synchronized');
        const server = new server_1.Server();
        server.listen();
    }
    catch (error) {
        console.error('Unable to synchronize the database:', error);
    }
});
startServer();
