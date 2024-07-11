"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/routes/events.ts
const express_1 = require("express");
const events_1 = require("../controllers/events");
const authMiddleware_1 = __importDefault(require("../middleware/authMiddleware"));
const router = (0, express_1.Router)();
router.get('/', authMiddleware_1.default, events_1.getEvents);
router.post('/', authMiddleware_1.default, events_1.createEvent);
router.delete('/:id', authMiddleware_1.default, events_1.deleteEvent);
exports.default = router;
