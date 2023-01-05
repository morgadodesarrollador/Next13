import { Typography, Grid, Link, CardActionArea, CardMedia, Box, Button } from '@mui/material';
import NextLink from 'next/link';
import { initialData } from '../../database/products';
import { ItemCounter } from '../ui';


const productIsCart = [
    initialData.products[0],
    initialData.products[1],
    initialData.products[2],
    
]
export const CartList = () => {
  return (
    <>
        {
            productIsCart.map( producto => (
                <Grid container spacing={2} sx={{ mb: 1, mt: 1 }} key={ producto.slug }>
                    <Grid item xs={3}>
                        { /* llevar a la página del producto */}
                        <Link href='/product/slug' passHref component={NextLink}>
                            <CardActionArea>
                                <CardMedia
                                    image={ `products/${ producto.images[0]}` }
                                    component= 'img'
                                    sx= {{ borderRadius: '5px'}}
                                />
                            </CardActionArea>
                        </Link>
                    </Grid>
                    <Grid item xs={7}>
                        <Box display='flex' flexDirection='column'>
                            <Typography variant='body1'>{ producto.title }</Typography>
                            <Typography variant='body1'>Talla: <strong>M</strong></Typography>
                            { /* Condicional */}
                            <ItemCounter />
                        </Box>
                    </Grid>
                    <Grid item xs={2} display='flex' alignItems='center' flexDirection='column'>
                        <Typography variant='subtitle1'>{ ` $${ producto.price }`}</Typography>
                        { /* editable */ }
                        <Button variant='text' color='secondary'>
                            Borrar
                        </Button>
                    </Grid>
                </Grid>
            ))
        }

    </>
  )
}
