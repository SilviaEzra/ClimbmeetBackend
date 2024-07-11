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
exports.deleteLocation = exports.createLocation = exports.getLocations = void 0;
const location_1 = __importDefault(require("../models/location"));
const getLocations = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const locations = yield location_1.default.findAll();
    res.json(locations);
});
exports.getLocations = getLocations;
const createLocation = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, latitude, longitude } = req.body;
    const newLocation = yield location_1.default.create({ name, latitude, longitude });
    res.json(newLocation);
});
exports.createLocation = createLocation;
const deleteLocation = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const location = yield location_1.default.findByPk(id);
    if (location) {
        yield location.destroy();
        res.json({ message: 'Location deleted' });
    }
    else {
        res.status(404).json({ message: 'Location not found' });
    }
});
exports.deleteLocation = deleteLocation;
