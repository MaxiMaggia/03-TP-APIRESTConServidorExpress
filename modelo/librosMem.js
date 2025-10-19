class ModeloMem {
    #libros = [];
  
    constructor() {
      this.#libros = [
        { id: '1', titulo: 'El Hobbit', autor: 'J. R. R. Tolkien', año: 1937 },
        { id: '2', titulo: 'Cien años de soledad', autor: 'G. García Márquez', año: 1967 },
        { id: '3', titulo: 'Ficciones', autor: 'J. L. Borges', año: 1944 },
        { id: '4', titulo: 'Alas de Sangre', autor: 'Rebecca Yarros', año: 2023 },
        { id: '5', titulo: 'Alas de Hierro', autor: 'Rebecca Yarros', año: 2023 },
        { id: '6', titulo: 'Alas de Ónix', autor: 'Rebecca Yarros', año: 2024 },
        { id: '7', titulo: 'A Game of Thrones', autor: 'George R. R. Martin', año: 1996 },
        { id: '8', titulo: 'A Clash of Kings', autor: 'George R. R. Martin', año: 1998 },
        { id: '9', titulo: 'A Storm of Swords', autor: 'George R. R. Martin', año: 2000 }
      ];
    }
  
    obtenerLibros = async () => this.#libros;

  obtenerLibro = async (id) => {
    const lib = this.#libros.find((l) => l.id == id);
    return lib || {};
  };

  guardarLibro = async (libro) => {
    const nextId = String(parseInt(this.#libros[this.#libros.length - 1]?.id || 0) + 1);
    const nuevo = { id: nextId, ...libro, año: Number(libro.año) };
    this.#libros.push(nuevo);
    return nuevo;
  };

  actualizarLibro = async (id, libro) => {
    const idx = this.#libros.findIndex((l) => l.id == id);
    if (idx === -1) return {};
    const anterior = this.#libros[idx];
    const merged = { ...anterior, ...libro, id, año: Number(libro?.año ?? anterior.año) };
    this.#libros.splice(idx, 1, merged);
    return merged;
  };

  borrarLibro = async (id) => {
    const idx = this.#libros.findIndex((l) => l.id == id);
    if (idx === -1) return {};
    const [elim] = this.#libros.splice(idx, 1);
    return elim;
  };
}

export default ModeloMem;
  