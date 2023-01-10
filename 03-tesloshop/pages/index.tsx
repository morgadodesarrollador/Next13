import { NextPage } from 'next'
import { Typography } from '@mui/material';
import { ShopLayouts } from '../components/layouts'
import { initialData } from '../database/products';
import { ProductList } from '../components/products';

import useSWR from 'swr'
const fetcher = (...args: [ key:string ]) => fetch(...args).then(res => res.json());

const HomePage: NextPage = () => {
  const { data, error, isLoading } = useSWR('/api/products', fetcher);
  if (error) return <div>failed to load</div>
  if (isLoading) return <div>loading...</div>

  return (
    //La página index.tsx llama al ShopLayouts.tsx 
      <ShopLayouts 
        title= {"TesloShop Home"}
        pageDescription= { 'Encuentra los mejores productos de TesloShop aqui...'}>
        { /* se instanciará al objeto children de ShopLayouts.tsx */}
        <Typography variant='h1' component='h1'>Tienda</Typography>
        <Typography variant='h2' sx = {{ marginBottom: 1 }}>Todos los productos</Typography>

        <ProductList 
            productos={ initialData.products as any }
        />
      </ShopLayouts>
  )
}


export default HomePage;