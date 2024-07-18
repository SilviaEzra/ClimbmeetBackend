import { Router } from 'express';
import { addLocation, getLocations } from '../controllers/location';

const router = Router();

router.post('/add', addLocation); // Ruta para agregar una ubicación
router.get('/all', getLocations); // Ruta para obtener todas las ubicaciones

export default router;
