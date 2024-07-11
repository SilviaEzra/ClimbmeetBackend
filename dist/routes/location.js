"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// src/routes/locationRoutes.ts
const express_1 = require("express");
const location_1 = require("../controllers/location");
const router = (0, express_1.Router)();
router.get('/locations', location_1.getLocations);
router.post('/locations', location_1.createLocation);
router.delete('/locations/:id', location_1.deleteLocation);
exports.default = router;
