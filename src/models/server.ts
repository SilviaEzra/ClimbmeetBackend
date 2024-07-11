// src/models/server.ts
import express from 'express';
import cors from 'cors';
import userRoutes from '../routes/user';
import eventRoutes from '../routes/events';

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
      origin: 'http://localhost:4200',
      credentials: true
    }));
    this.app.use(express.json());
  }

  routes() {
    this.app.use('/api/users', userRoutes);
    this.app.use('/api/events', eventRoutes);
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`App corriendo en el puerto ${this.port}`);
    });
  }
}
