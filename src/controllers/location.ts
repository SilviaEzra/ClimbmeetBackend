import { Request, Response } from 'express';
import Location from '../models/location';

export const getLocations = async (req: Request, res: Response) => {
  const locations = await Location.findAll();
  res.json(locations);
};

export const createLocation = async (req: Request, res: Response) => {
  const { name, latitude, longitude } = req.body;
  const newLocation = await Location.create({ name, latitude, longitude });
  res.json(newLocation);
};

export const deleteLocation = async (req: Request, res: Response) => {
  const { id } = req.params;
  const location = await Location.findByPk(id);
  if (location) {
    await location.destroy();
    res.json({ message: 'Location deleted' });
  } else {
    res.status(404).json({ message: 'Location not found' });
  }
};
