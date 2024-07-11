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
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const user_1 = __importDefault(require("../models/user"));
const authenticateJWT = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const token = (_a = req.header('Authorization')) === null || _a === void 0 ? void 0 : _a.split(' ')[1];
    if (token) {
        try {
            const decoded = jsonwebtoken_1.default.verify(token, process.env.SECRET_KEY || 'default_secret_key');
            const user = yield user_1.default.findOne({ where: { id: decoded.id } });
            if (user) {
                req.user = user;
                next();
            }
            else {
                res.status(401).send('Usuario no encontrado');
            }
        }
        catch (error) {
            res.status(401).send('Token no válido');
        }
    }
    else {
        res.status(401).send('Autorización requerida');
    }
});
exports.default = authenticateJWT;
