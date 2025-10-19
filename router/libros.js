import express from 'express';
import Controlador from '../controlador/libros.js';

class Router {
  #controlador = null;

  constructor() {
    this.#controlador = new Controlador();
  }

  config() {
    const router = express.Router();


    router.get('/', this.#controlador.obtenerLibros);
    router.get('/:id', this.#controlador.obtenerLibros);

    router.post('/', this.#controlador.guardarLibro);

    router.put('/:id', this.#controlador.actualizarLibro);

    router.delete('/:id', this.#controlador.borrarLibro);

    return router;
  }
}

export default Router;
