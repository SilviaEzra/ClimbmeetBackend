"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/routes/events.ts
const express_1 = require("express");
const events_1 = require("../controllers/events");
const upload_1 = __importDefault(require("../middleware/upload"));
const router = (0, express_1.Router)();
router.post('/', upload_1.default.single('image'), events_1.createEvent);
router.get('/', events_1.getEvents);
router.delete('/:id', events_1.deleteEvent);
router.get('/:id', events_1.getEventById);
router.put('/:id', upload_1.default.single('image'), events_1.updateEvent);
exports.default = router;
