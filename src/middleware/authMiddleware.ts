import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import User from '../models/user';

const authenticateJWT = async (req: Request, res: Response, next: NextFunction) => {
  const token = req.header('Authorization')?.split(' ')[1];

  if (token) {
    try {
      const decoded: any = jwt.verify(token, process.env.SECRET_KEY || 'default_secret_key');
      const user = await User.findOne({ where: { id: decoded.id } });
      if (user) {
        req.user = user;
        next();
      } else {
        res.status(401).send('Usuario no encontrado');
      }
    } catch (error) {
      res.status(401).send('Token no válido');
    }
  } else {
    res.status(401).send('Autorización requerida');
  }
};

export default authenticateJWT;
