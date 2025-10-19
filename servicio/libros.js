import ModeloMem from '../modelo/librosMem.js';

class Servicio {
  #modelo = null;

  constructor() {
    this.#modelo = new ModeloMem();
  }

  obtenerLibros = async (id) => {
    if (id) return await this.#modelo.obtenerLibro(id);
    return await this.#modelo.obtenerLibros();
  };

  guardarLibro = async (libro) => {
    if (!libro?.titulo || !libro?.autor || !libro?.año) {
      throw new Error('Faltan campos: titulo, autor, año');
    }
    return await this.#modelo.guardarLibro(libro);
  };

  actualizarLibro = async (id, libro) => {
    return await this.#modelo.actualizarLibro(id, libro);
  };

  borrarLibro = async (id) => {
    return await this.#modelo.borrarLibro(id);
  };
}

export default Servicio;
