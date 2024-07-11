"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_1 = require("../controllers/user");
const router = (0, express_1.Router)();
router.post('/register', user_1.newUser);
router.post('/login', user_1.loginUser);
router.put('/update', user_1.updateUser);
router.get('/profile', user_1.getUserProfile);
exports.default = router;
