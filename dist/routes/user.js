"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/routes/user.ts
const express_1 = require("express");
const user_1 = require("../controllers/user");
const authMiddleware_1 = __importDefault(require("../middleware/authMiddleware"));
const upload_1 = __importDefault(require("../middleware/upload"));
const router = (0, express_1.Router)();
router.post('/register', user_1.newUser);
router.post('/login', user_1.loginUser);
router.put('/profile', authMiddleware_1.default, upload_1.default.single('profileImage'), user_1.updateUser);
router.get('/profile', authMiddleware_1.default, user_1.getUserProfile);
exports.default = router;
