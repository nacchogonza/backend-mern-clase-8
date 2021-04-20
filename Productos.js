class Productos {
  constructor() {
    this.productos = [];
  }

  getProductos () {
    return this.productos;
  }

  getProducto(id) {
    const product = this.productos.find((producto) => producto.id === parseInt(id))
    return product;
  }

  postProducto (producto) {
    producto.id = this.productos.length + 1;
    this.productos.push(producto);
    return producto;
  }
}

export { Productos };