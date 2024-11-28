
import React, { useState } from 'react';
import DataGridDemo from './Components/Tabla/Tabla';
import FormularioProducto from './Components/Form/Form';
import './app.css';

function App() {
  
  const [productos, setProductos] = useState([
    { id: 1, nombre: "Auriculares Inalámbricos", precio: 120, categoria: "Electrónica" },
    { id: 2, nombre: "Silla de Escritorio", precio: 300, categoria: "Muebles" },
    { id: 3, nombre: "Cafetera Espresso", precio: 250, categoria: "Electrodomésticos" },
    { id: 4, nombre: "Juego de Mesa - Monopoly", precio: 50, categoria: "Juguetes" },
    { id: 5, nombre: "Libro de Programación en JavaScript", precio: 35, categoria: "Libros" },
  ]);
  
  const agregarProducto = (nuevoProducto) => {
    setProductos((prevProductos) => [...prevProductos, nuevoProducto]);
  };
  return (
    <div className="Tabla">
      
      <DataGridDemo productos={productos}/>
      <FormularioProducto agregarProducto={agregarProducto}/>
    </div>
  );
}

export default App;
