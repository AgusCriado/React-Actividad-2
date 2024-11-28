import * as React from 'react';
import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';


const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'nombre',
    headerName: 'Nombre',
    width: 200,
    editable: true,
  },
  {
    field: 'precio',
    headerName: 'Precio $ ARS',
    type: 'number',
    width: 150,
    editable: true,
  },
  {
    field: 'categoria',
    headerName: 'Categoría',
    width: 200,
    editable: true,
  },
];

const mockData = [
  { id: 1, nombre: "Auriculares Inalámbricos", precio: 120, categoria: "Electrónica" },
  { id: 2, nombre: "Silla de Escritorio", precio: 300, categoria: "Muebles" },
  { id: 3, nombre: "Cafetera Espresso", precio: 250, categoria: "Electrodomésticos" },
  { id: 4, nombre: "Juego de Mesa - Monopoly", precio: 50, categoria: "Juguetes" },
  { id: 5, nombre: "Libro de Programación en JavaScript", precio: 35, categoria: "Libros" },
];

export default function DataGridDemo() {
  const [rows, setRows] = useState([]); 
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const timeout = setTimeout(() => {
      setRows(mockData);
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timeout); 
  }, []);

  return (
    <div className="Tabla" >
      <Box sx={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
          pageSizeOptions={[5]}
          checkboxSelection
          disableRowSelectionOnClick
          loading={loading} 
        />
      </Box>
    </div>
  );
}