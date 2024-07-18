// src/routes/events.ts
import { Router } from 'express';
import { createEvent, getEvents, deleteEvent, getEventById, updateEvent } from '../controllers/events';
import upload from '../middleware/upload';

const router = Router();

router.post('/', upload.single('image'), createEvent);
router.get('/', getEvents);
router.delete('/:id', deleteEvent);
router.get('/:id', getEventById);
router.put('/:id', upload.single('image'), updateEvent);

export default router;
