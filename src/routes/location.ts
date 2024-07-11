// src/routes/locationRoutes.ts
import { Router } from 'express';
import { getLocations, createLocation, deleteLocation } from '../controllers/location';

const router = Router();

router.get('/locations', getLocations);
router.post('/locations', createLocation);
router.delete('/locations/:id', deleteLocation);

export default router;
