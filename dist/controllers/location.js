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
exports.getLocations = exports.addLocation = void 0;
const location_1 = __importDefault(require("../models/location"));
const addLocation = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, latitude, longitude, type } = req.body;
        const newLocation = yield location_1.default.create({ name, latitude, longitude, type });
        res.status(201).json(newLocation);
    }
    catch (error) {
        console.error('Error adding location:', error);
        res.status(500).json({ message: 'Error adding location', error });
    }
});
exports.addLocation = addLocation;
const getLocations = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const locations = yield location_1.default.findAll();
        res.status(200).json(locations);
    }
    catch (error) {
        console.error('Error getting locations:', error);
        res.status(500).json({ message: 'Error getting locations', error });
    }
});
exports.getLocations = getLocations;
