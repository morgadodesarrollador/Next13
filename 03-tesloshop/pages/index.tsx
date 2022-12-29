import { NextPage } from 'next'
import { Typography } from '@mui/material';
import { ShopLayouts } from '../components/layouts'

const Home: NextPage = () => {
  return (
    //La página index.tsx llama al ShopLayouts.tsx 
      <ShopLayouts 
        title= {"TesloShop Home"}
        pageDescription= { 'Encuentra los mejores productos de TesloShop aqui...'}>
        { /* se instanciará al objeto children de ShopLayouts.tsx */}
        <Typography variant='h1' component='h1'>Tienda</Typography>
        <Typography variant='h2' sx = {{ marginBottom: 1 }}>Todos los productos</Typography>
      </ShopLayouts>
  )
}


export default Home;