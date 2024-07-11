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
exports.getUserProfile = exports.updateUser = exports.loginUser = exports.newUser = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const user_1 = __importDefault(require("../models/user"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const newUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, password, firstName, lastName, email, address, gender, climbingType, climbingLevel } = req.body;
    console.log('Datos de entrada para registro:', req.body);
    if (!username || !password) {
        return res.status(400).json({
            msg: 'Faltan parámetros en la solicitud'
        });
    }
    try {
        const user = yield user_1.default.findOne({ where: { username: username } });
        if (user) {
            console.log('Usuario encontrado:', user);
            return res.status(400).json({
                msg: 'Ya existe un usuario con el nombre ' + username
            });
        }
        const hashedPassword = yield bcrypt_1.default.hash(password, 10);
        console.log('Contraseña hasheada:', hashedPassword);
        yield user_1.default.create({
            username,
            password: hashedPassword,
            firstName,
            lastName,
            email,
            address,
            gender,
            climbingType,
            climbingLevel
        });
        console.log('Usuario creado correctamente');
        res.json({
            msg: 'Usuario ' + username + ' creado correctamente',
        });
    }
    catch (error) {
        console.error('Error al crear usuario:', error);
        res.status(400).json({
            msg: 'Ups, ha habido un error al crear el usuario'
        });
    }
});
exports.newUser = newUser;
const loginUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, password } = req.body;
    console.log('Datos de entrada para login:', req.body);
    if (!username || !password) {
        return res.status(400).json({
            msg: 'Faltan parámetros en la solicitud'
        });
    }
    try {
        const user = yield user_1.default.findOne({ where: { username: username } });
        if (!user) {
            return res.status(400).json({
                msg: 'No existe un usuario con el nombre ' + username + ' en la base de datos'
            });
        }
        const passwordValid = yield bcrypt_1.default.compare(password, user.password);
        if (!passwordValid) {
            return res.status(400).json({
                msg: 'Password Incorrecto'
            });
        }
        const token = jsonwebtoken_1.default.sign({ id: user.id }, process.env.SECRET_KEY || 'pepito123', { expiresIn: '1h' });
        res.json({ token });
    }
    catch (error) {
        console.error('Error al iniciar sesión:', error);
        res.status(500).json({
            msg: 'Ups, ha habido un error al iniciar sesión'
        });
    }
});
exports.loginUser = loginUser;
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, firstName, lastName, email, address, gender, climbingType, climbingLevel } = req.body;
    console.log('Datos de entrada para actualización:', req.body);
    try {
        const user = yield user_1.default.findOne({ where: { username: username } });
        if (!user) {
            return res.status(400).json({
                msg: 'No existe un usuario con el nombre ' + username
            });
        }
        yield user_1.default.update({ firstName, lastName, email, address, gender, climbingType, climbingLevel }, { where: { username: username } });
        console.log('Usuario actualizado correctamente');
        res.json({
            msg: 'Usuario ' + username + ' actualizado correctamente',
        });
    }
    catch (error) {
        console.error('Error al actualizar usuario:', error);
        res.status(400).json({
            msg: 'Ups, ha habido un error al actualizar el usuario'
        });
    }
});
exports.updateUser = updateUser;
const getUserProfile = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const authHeader = req.headers.authorization;
    const token = authHeader === null || authHeader === void 0 ? void 0 : authHeader.split(' ')[1];
    if (!token) {
        console.error('No token provided');
        return res.status(401).json({ msg: 'No token provided' });
    }
    try {
        const decoded = jsonwebtoken_1.default.verify(token, process.env.SECRET_KEY || 'pepito123');
        const user = yield user_1.default.findOne({ where: { id: decoded.id } });
        if (!user) {
            console.error('User not found');
            return res.status(404).json({ msg: 'User not found' });
        }
        res.json(user);
    }
    catch (error) {
        console.error('Error fetching user profile:', error);
        res.status(500).json({ msg: 'Internal server error' });
    }
});
exports.getUserProfile = getUserProfile;
