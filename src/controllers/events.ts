// src/controllers/events.ts
import { Request, Response } from 'express';
import AppEvent from '../models/events';

export const getEvents = async (req: Request, res: Response) => {
  try {
    const events = await AppEvent.findAll();
    res.json(events);
  } catch (error) {
    console.error('Error al obtener los eventos:', error);
    res.status(500).send('Error al obtener los eventos');
  }
};

export const createEvent = async (req: Request, res: Response) => {
  const { title, description, location, address, date } = req.body;
  const image = req.file ? req.file.path : '';

  try {
    const event = await AppEvent.create({ title, description, location, address, date, image });
    res.status(201).json(event);
  } catch (error) {
    console.error('Error al crear el evento:', error);
    res.status(500).send('Error al crear el evento');
  }
};

export const deleteEvent = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await AppEvent.destroy({ where: { id } });
    res.status(204).send();
  } catch (error) {
    console.error('Error al eliminar el evento:', error);
    res.status(500).send('Error al eliminar el evento');
  }
};

export const getEventById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const event = await AppEvent.findByPk(id);

    if (!event) {
      return res.status(404).json({ error: 'Event not found' });
    }

    res.json(event);
  } catch (error) {
    console.error('Error fetching event:', error);
    res.status(500).send('Error fetching event');
  }
};

export const updateEvent = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { title, description, location, address, date } = req.body;
  const image = req.file ? req.file.path : '';

  console.log('Update Event - ID:', id);
  console.log('Update Event - Body:', req.body);
  console.log('Update Event - File:', req.file);

  try {
    const event = await AppEvent.findByPk(id);

    if (!event) {
      console.log('Event not found');
      return res.status(404).json({ error: 'Event not found' });
    }

    await event.update({ title, description, location, address, date, image });
    console.log('Event updated:', event);
    res.json(event);
  } catch (error) {
    console.error('Error updating event:', error);
    res.status(500).send('Error updating event');
  }
};
