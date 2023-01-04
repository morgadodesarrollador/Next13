import { initialData } from '../../database/products';
import { ShopLayouts } from '../../components/layouts/ShopLayouts';
import { Box, Button, Chip, Grid, Typography } from '@mui/material';
import { ProductSlideshow } from '../../components/products';


const producto = initialData.products[0];
const ProductPage = () => {
  return (
    <ShopLayouts title={producto.title} pageDescription={producto.description}>

      <Grid container spacing={3}>
        <Grid item xs={12} sm={7}>
          <ProductSlideshow images={ producto.images } />
        </Grid>
        <Grid item xs={12} sm={5}>
          <Box display='flex' flexDirection='column'>
            {/* titulos */}
            <Typography variant='h1' component='h1'> { producto.title}</Typography>
            <Typography variant='subtitle1' component='h2'> { `$${producto.price}` }</Typography>

            {/* cantidad */}
            <Box sx={ {my: 2 }}>
              <Typography variant='subtitle2' component='h4'> Cantidad </Typography>
              {/* ItemCounter */}
            </Box>
            {/* Agregar al Carrito */}
            <Button color='secondary' className='circular-btn'>
              Agregar al Carrito
            </Button>
            {/* <Chip label="No hay disponibilidad" color="error" variant='outlined' /> */}

            { /* descripcion */ }
            <Box sx={{ mt: 3 }}>
              <Typography variant='subtitle2' component='h4'> Descripción </Typography>
              <Typography variant='body2' > { producto.description } </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ShopLayouts>
  )
}

export default ProductPage
