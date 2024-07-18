import express from 'express';
import cors from 'cors';
import userRoutes from '../routes/user';
import eventRoutes from '../routes/events';
import locationRoutes from '../routes/location'; // Importa las rutas de locations
import path from 'path';

export class Server {
  public app: express.Application;
  private port: string;

  constructor() {
    this.app = express();
    this.port = process.env.PORT || '3001';

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(cors({
      origin: 'http://localhost:4200', // Permitir el acceso desde tu frontend
      credentials: true
    }));

    this.app.use(express.json());

    // Servir la carpeta de uploads como estática
    this.app.use('/uploads', express.static(path.join(__dirname, '../../uploads')));
  }

  routes() {
    this.app.use('/api/users', userRoutes);
    this.app.use('/api/events', eventRoutes);
    this.app.use('/api/location', locationRoutes); // Agrega las rutas de locations
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`App corriendo en el puerto ${this.port}`);
    });
  }
}
