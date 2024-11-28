
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

export default function DataGridDemo({ productos }){
  const [rows, setRows] = useState([]); 
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const timeout = setTimeout(() => {
      setRows(productos);
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timeout); 
  }, []);

  return (
    <div >
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