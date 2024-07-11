// src/routes/events.ts
import { Router } from 'express';
import { getEvents, createEvent, deleteEvent } from '../controllers/events';
import authenticateToken from '../middleware/authMiddleware';

const router = Router();

router.get('/', authenticateToken, getEvents);
router.post('/', authenticateToken, createEvent);
router.delete('/:id', authenticateToken, deleteEvent);

export default router;
