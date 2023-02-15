import { NextPage } from 'next'
import { Typography } from '@mui/material';
import { ShopLayouts } from '../../components/layouts'
import { ProductList } from '../../components/products';
import { useProducts } from '../../hooks';
import { FullScreenLoading } from '../../components/ui';

const MenPage: NextPage = () => {
  
  const { productos, isLoading } = useProducts('/products?gender=men');
  console.log("p=", productos);
  return (
    //La página index.tsx llama al ShopLayouts.tsx 
      <ShopLayouts 
        title= {"TesloShop Mens"}
        pageDescription= { 'Encuentra los mejores productos de TesloShop para niños'}>
        <Typography variant='h1' component='h1'>Hombres</Typography>
        <Typography variant='h2' sx = {{ marginBottom: 1 }}>Productos para niñoas</Typography>
        {
          isLoading
            ? <FullScreenLoading />
            : <ProductList key={1} productos = { productos } />
        }
      </ShopLayouts>
  )
}

export default MenPage;