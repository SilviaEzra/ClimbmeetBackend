"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const location_1 = require("../controllers/location");
const router = (0, express_1.Router)();
router.post('/add', location_1.addLocation); // Ruta para agregar una ubicación
router.get('/all', location_1.getLocations); // Ruta para obtener todas las ubicaciones
exports.default = router;
