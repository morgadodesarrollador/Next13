import { RemoveShoppingCartOutlined } from '@mui/icons-material';
import { Box, Link, Typography } from '@mui/material';
import { ShopLayouts } from '../../components/layouts/ShopLayouts';
import NextLink from 'next/link';

const emptyPage = () => {
  return (
    <ShopLayouts title="Carrito Vacio" pageDescription="No hay artículos en el carrito de compras">
        <Box 
            display='flex' justifyContent='center' alignItems='center' 
            height='calc(100vh - 200px)'
            sx={{ flexDirection: { xs: 'column', sm: 'row' }}}
        >
            <RemoveShoppingCartOutlined sx={{ fontSize: 100 }} />
            <Box display='flex' alignItems='center' flexDirection='column'>
                <Typography marginLeft={2}>Su carrito está vacío</Typography>
                <Link href='/' passHref component={ NextLink } typography='h4' color='secondary'>
                    Regresar
                </Link>
            </Box>

        </Box>
    </ShopLayouts>
  )
}

export default emptyPage; 