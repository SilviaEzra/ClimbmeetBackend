import { Request, Response } from 'express';
import Location from '../models/location';

export const addLocation = async (req: Request, res: Response) => {
  try {
    const { name, latitude, longitude, type } = req.body;
    const newLocation = await Location.create({ name, latitude, longitude, type });
    res.status(201).json(newLocation);
  } catch (error) {
    console.error('Error adding location:', error);
    res.status(500).json({ message: 'Error adding location', error });
  }
};

export const getLocations = async (req: Request, res: Response) => {
  try {
    const locations = await Location.findAll();
    res.status(200).json(locations);
  } catch (error) {
    console.error('Error getting locations:', error);
    res.status(500).json({ message: 'Error getting locations', error });
  }
};
