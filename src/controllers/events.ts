// controllers/events.ts
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
  try {
    const event = await AppEvent.create(req.body);
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
