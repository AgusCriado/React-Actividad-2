import React, { useState } from 'react';

const FormularioProducto = ({ agregarProducto }) => {
  const [nombre, setNombre] = useState('');
  const [precio, setPrecio] = useState('');
  const [categoria, setCategoria] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nombre || !precio || !categoria) {
      alert('Todos los campos son obligatorios');
      return;
    }

    
    const nuevoProducto = {
      id: Date.now(), 
      nombre,
      precio: parseFloat(precio), 
      categoria,
    };

    agregarProducto(nuevoProducto); 
    setNombre('');
    setPrecio('');
    setCategoria('');
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <div style={styles.inputGroup}>
        <label>Nombre:</label>
        <input
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          style={styles.input}
        />
      </div>
      <div style={styles.inputGroup}>
        <label>Precio:</label>
        <input
          type="number"
          value={precio}
          onChange={(e) => setPrecio(e.target.value)}
          style={styles.input}
        />
      </div>
      <div style={styles.inputGroup}>
        <label>Categoría:</label>
        <input
          type="text"
          value={categoria}
          onChange={(e) => setCategoria(e.target.value)}
          style={styles.input}
        />
      </div>
      <button type="submit" style={styles.button}>Añadir Producto</button>
    </form>
  );
};

const styles = {
  form: {
    marginBottom: '20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '10px',
  },
  inputGroup: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    
  },
  input: {
    padding: '5px',
    width: '300px',
  },
  button: {
    padding: '10px 20px',
    backgroundColor: '#1976d2',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default FormularioProducto;
