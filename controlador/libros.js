import Servicio from '../servicio/libros.js';

class Controlador {
  #servicio = null;

  constructor() {
    this.#servicio = new Servicio();
  }

  obtenerLibros = async (req, res) => {
    try {
      const { id } = req.params;
      const data = await this.#servicio.obtenerLibros(id);
      res.json(data);
    } catch (error) {
      res.status(500).json({ url: req.url, method: req.method, error: error.message });
    }
  };

  guardarLibro = async (req, res) => {
    try {
      const libro = req.body; 
      const creado = await this.#servicio.guardarLibro(libro);
      res.json(creado);
    } catch (error) {
      res.status(500).json({ url: req.url, method: req.method, error: error.message });
    }
  };

  actualizarLibro = async (req, res) => {
    try {
      const { id } = req.params;
      const libro = req.body;
      const actualizado = await this.#servicio.actualizarLibro(id, libro);
      res.json(actualizado);
    } catch (error) {
      res.status(500).json({ url: req.url, method: req.method, error: error.message });
    }
  };

  borrarLibro = async (req, res) => {
    try {
      const { id } = req.params;
      const eliminado = await this.#servicio.borrarLibro(id);
      res.json(eliminado);
    } catch (error) {
      res.status(500).json({ url: req.url, method: req.method, error: error.message });
    }
  };
}

export default Controlador;
