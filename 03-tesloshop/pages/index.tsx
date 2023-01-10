import { NextPage } from 'next'
import { Typography } from '@mui/material';
import { ShopLayouts } from '../components/layouts'
import { initialData } from '../database/products';
import { ProductList } from '../components/products';
import { useProducts } from '../hooks';
import { FullScreenLoading } from '../components/ui';

const HomePage: NextPage = () => {
  
  const { productos, isLoading } = useProducts('/products');
  return (
    //La página index.tsx llama al ShopLayouts.tsx 
      <ShopLayouts 
        title= {"TesloShop Home"}
        pageDescription= { 'Encuentra los mejores productos de TesloShop aqui...'}>
        <Typography variant='h1' component='h1'>Tienda</Typography>
        <Typography variant='h2' sx = {{ marginBottom: 1 }}>Todos los productos</Typography>
        {
          isLoading
            ? <FullScreenLoading />
            : <ProductList productos = { productos } />
        }
      </ShopLayouts>
  )
}


export default HomePage;