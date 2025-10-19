import express from 'express';
import RouterLibros from './router/libros.js';

class Server {
  #port = null;
  #routerLibros = null;

  constructor(port) {
    this.#port = port;
    this.#routerLibros = new RouterLibros().config();
  }

  start() {
    const app = express();

    app.use(express.json());
    app.use(express.urlencoded({ extended: true })); 

    app.use(express.static('public'));

    app.use('/api/libros', this.#routerLibros);

    const server = app.listen(this.#port, () =>
      console.log(`Servidor escuchando en http://localhost:${this.#port}`)
    );
    server.on('error', (err) => console.log(`Error en servidor: ${err.message}`));
  }
}

export default Server;
