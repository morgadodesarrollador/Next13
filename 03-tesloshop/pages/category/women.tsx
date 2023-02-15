import { NextPage } from 'next'
import { Typography } from '@mui/material';
import { ShopLayouts } from '../../components/layouts'
import { ProductList } from '../../components/products';
import { useProducts } from '../../hooks';
import { FullScreenLoading } from '../../components/ui';

const WomenPage: NextPage = () => {
  
  const { productos, isLoading } = useProducts('/products?gender=women');
  console.log("p=", productos);
  return (
    //La página index.tsx llama al ShopLayouts.tsx 
      <ShopLayouts 
        title= {"TesloShop Womens"}
        pageDescription= { 'Encuentra los mejores productos de TesloShop para niños'}>
        <Typography variant='h1' component='h1'>Mujeres</Typography>
        <Typography variant='h2' sx = {{ marginBottom: 1 }}>Productos para Mujmeres</Typography>
        {
          isLoading
            ? <FullScreenLoading />
            : <ProductList key={1} productos = { productos } />
        }
      </ShopLayouts>
  )
}


export default WomenPage;