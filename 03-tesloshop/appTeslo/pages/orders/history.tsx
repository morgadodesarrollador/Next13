import React from 'react'
import { ShopLayouts } from '../../components/layouts/ShopLayouts';
import { Chip, Grid, Link, Typography } from '@mui/material';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import NextLink from 'next/link';
import { clear } from 'console';

const colums: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 100 },
    { field: 'fullname', headerName: 'Nombre Completo', width: 300 },   
    {
        field: 'paid',
        headerName: 'Pagada',
        description: 'Muestra información si la orden está pagada o no',
        width: 200,
        renderCell: (params: GridValueGetterParams) => {
            return (
                params.row.paid
                    ? <Chip color='success' label='Pagada' variant='filled' />
                    : <Chip color='error' label='No Pagada' variant='filled' />
            )
        }
    },
    {
        field: 'orden',
        headerName: 'Ver Orden',
        sortable: false,
        width: 200,
        renderCell: (params: GridValueGetterParams) => {
            return (
                <Link href={`/orders/${ params.row.id }`} passHref component={NextLink} underline='always'>
                    Ver Orden
                </Link>
            )
        }
    }
]
const rows = [
    { id: 1, paid: true, fullname: 'Ana Sancez'},
    { id: 2, paid: false, fullname: 'Jose Antonio Martinez'},
    { id: 3, paid: true, fullname: 'Luisa Fernandez'},
    { id: 4, paid: false, fullname: 'Maria Canovas'},
    { id: 5, paid: false, fullname: 'Juan Perez'},
    { id: 6, paid: true, fullname: 'Alfonso Cuartillo'}
]
const HistoryPage = () => {
  return (
    <ShopLayouts title={'Historial de órdenas'} pageDescription={'Historial de órdenes del cliente'}>
        <Typography variant='h1' component='h1'>Historial del Órdenes </Typography>
        <Grid container>
            <Grid item xs={12} sx={{ height: 650, width: '100%'}}>
                <DataGrid 
                    columns={ colums } 
                    rows={ rows }
                    pageSize={10}
                    rowsPerPageOptions={ [ 10 ]}
                />
            </Grid>
        </Grid>
    
    </ShopLayouts>
  )
}

export default HistoryPage
