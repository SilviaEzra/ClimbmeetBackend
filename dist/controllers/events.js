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
exports.updateEvent = exports.getEventById = exports.deleteEvent = exports.createEvent = exports.getEvents = void 0;
const events_1 = __importDefault(require("../models/events"));
const getEvents = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const events = yield events_1.default.findAll();
        res.json(events);
    }
    catch (error) {
        console.error('Error al obtener los eventos:', error);
        res.status(500).send('Error al obtener los eventos');
    }
});
exports.getEvents = getEvents;
const createEvent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { title, description, location, address, date } = req.body;
    const image = req.file ? req.file.path : '';
    try {
        const event = yield events_1.default.create({ title, description, location, address, date, image });
        res.status(201).json(event);
    }
    catch (error) {
        console.error('Error al crear el evento:', error);
        res.status(500).send('Error al crear el evento');
    }
});
exports.createEvent = createEvent;
const deleteEvent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        yield events_1.default.destroy({ where: { id } });
        res.status(204).send();
    }
    catch (error) {
        console.error('Error al eliminar el evento:', error);
        res.status(500).send('Error al eliminar el evento');
    }
});
exports.deleteEvent = deleteEvent;
const getEventById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const event = yield events_1.default.findByPk(id);
        if (!event) {
            return res.status(404).json({ error: 'Event not found' });
        }
        res.json(event);
    }
    catch (error) {
        console.error('Error fetching event:', error);
        res.status(500).send('Error fetching event');
    }
});
exports.getEventById = getEventById;
const updateEvent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { title, description, location, address, date } = req.body;
    const image = req.file ? req.file.path : '';
    console.log('Update Event - ID:', id);
    console.log('Update Event - Body:', req.body);
    console.log('Update Event - File:', req.file);
    try {
        const event = yield events_1.default.findByPk(id);
        if (!event) {
            console.log('Event not found');
            return res.status(404).json({ error: 'Event not found' });
        }
        yield event.update({ title, description, location, address, date, image });
        console.log('Event updated:', event);
        res.json(event);
    }
    catch (error) {
        console.error('Error updating event:', error);
        res.status(500).send('Error updating event');
    }
});
exports.updateEvent = updateEvent;
