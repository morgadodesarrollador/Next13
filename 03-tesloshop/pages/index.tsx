import { NextPage } from 'next'
import { CardActionArea, CardMedia, Grid, Typography } from '@mui/material';
import { ShopLayouts } from '../components/layouts'
import { initialData } from '../database/products';
import { ProductionQuantityLimits } from '@mui/icons-material';

const Home: NextPage = () => {
  return (
    //La página index.tsx llama al ShopLayouts.tsx 
      <ShopLayouts 
        title= {"TesloShop Home"}
        pageDescription= { 'Encuentra los mejores productos de TesloShop aqui...'}>
        { /* se instanciará al objeto children de ShopLayouts.tsx */}
        <Typography variant='h1' component='h1'>Tienda</Typography>
        <Typography variant='h2' sx = {{ marginBottom: 1 }}>Todos los productos</Typography>

        <Grid container spacing={4}>
          {
            initialData.products.map ( product => (
              <Grid item xs={6} sm= {4} key={ product.slug }>
                <CardActionArea>
                  <CardMedia 
                    component='img'
                    image={ `products/${product.images[0] }`} 
                    alt = { product.title }/>
                </CardActionArea>
              </Grid>
            ))
          }
        </Grid>
      </ShopLayouts>
  )
}


export default Home;