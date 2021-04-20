import express from 'express';
import { Productos } from './Productos.js';

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));

const productos = new Productos();

app.get('/api/productos', (req, res) => {
  const data = productos.getProductos()
  if (!data.length) {
    res.json({error: 'no hay productos cargados'})
  }
  res.json(data);
})

app.post('/api/productos', (req, res) => {
  const newProduct = productos.postProducto(req.body)
  res.json(newProduct);
})

app.get('/api/productos/:id', (req, res) => {
  const filterProduct = productos.getProducto(req.params.id);
  if (!filterProduct) res.json({error: 'producto no encontrado'})
  res.json(filterProduct);
})


const PORT = 8080;

const server = app.listen(PORT, () => {
  console.log(`servidor inicializado en ${server.address().port}`)
})

server.on("error", error => console.log(`error en el servidor: ${error.message}`))