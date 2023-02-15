import { Box, Button, Chip, Grid, Typography } from '@mui/material';
import { ShopLayouts } from '../../components/layouts/ShopLayouts';
import { ProductSlideshow, SizeSelector } from '../../components/products';
import { ItemCounter } from '../../components/ui';

import { NextPage, GetServerSideProps, GetStaticPaths,GetStaticProps } from 'next';
import { dbProducto } from '../../database';
import { IProducto } from '../../interfaces/productos';

interface Props {
  producto: IProducto
}
const ProductPage:NextPage<Props> = ({ producto }) => {

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
              <ItemCounter />
              <SizeSelector 
                    // selectedSize= { producto.sizes[0]  }  
                    sizes={ producto.sizes } />
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
export const getStaticPaths: GetStaticPaths = async (ctx) => {

  const productsSlugs = await dbProducto.getAllProductSlugs();
  console.log(productsSlugs);
  return {
    paths: productsSlugs.map( ({ slug }) => ({
      params: {
        slug
      }
    })),
    fallback: "blocking"
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {

  const { slug = ''} = params as { slug: string };
  console.log(slug);
  const producto = await dbProducto.getProductoBySlug(slug); 
  if (!producto){
    return {
      redirect: { destination: '/', permanent: false }
   }
  }
  
  return {
    props: {
      producto
    },
    // revalidate: 60 * 60 * 24
  }
}

export default ProductPage

/*********** version2: GetServerSideProps (SSR)  ******************/
// export const getServerSideProps: GetServerSideProps = async ({ params }) => {

//   const { slug = '' } = params as { slug: string };
//   const producto = await dbProducto.getProductoBySlug(slug);
//   console.log(slug);
//   console.log(producto);
//   if (!producto){
//     return {
//       redirect: { destination: '/', permanent: false }
//     }
//   }
//   return {
//     props: {
//       producto
//     }
//   }
// }

// si hacemos la url permanentes, los bots de google indexaran que está página no trae producto
// y puede ser que el dia de mañana traiga un producto

/*********** version1: petición desde el cliente en SPA ***************** */
  //const router = useRouter();
  //renombramos en la desectructuracion. Petición SPA
  // const { productos:producto , isLoading } = useProducts(`/products/${ router.query.slug}`); 

  // const producto = productos[0];
  // console.log(producto);
  // if (isLoading){
  //   return <h2>Cargando ...</h2>
  // }