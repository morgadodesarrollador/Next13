import { Box, Card, CardActionArea, CardMedia, Grid, Link, Typography } from '@mui/material';
import { FC, useState, useMemo } from "react";
import { IProducto } from '../../interfaces/productos';
import NextLink from 'next/link';

interface Props {
    producto: IProducto
}
export const ProductCard: FC<Props> = ({ producto }) => {
 //controlar si el mouse está encima o no. Para cambiar de imagen del producto
  const [ isHovered, setisHovered ] = useState(false);
  const [ isImagedLoaded, setIsImagedLoaded ] = useState(false);
  
  //deseamos memorizar el productImage
  const productoImage = useMemo(() => {
      return isHovered
        ? `products/${ producto.images[1] }`
        : `products/${ producto.images[0] }`

  }, [isHovered, producto.images]);

  return (
    <Grid item 
          xs={6} sm= {4}
          onMouseEnter = { () => setisHovered(true) }
          onMouseLeave = { () => setisHovered(false) }>
      <Card>
          <Link href="/product/slug"  passHref component={ NextLink } prefetch={ false }>
              <CardActionArea>
                <CardMedia 
                    component='img'
                    className='fadeIn'
                    image={ productoImage } 
                    alt = { producto.title }
                    onLoad = { () => setIsImagedLoaded(true) }
                    />
              </CardActionArea>    
          </Link>
        
      </Card>
      <Box sx= {{ marginTop: 1, display: isImagedLoaded ? 'block' : 'none' }} className='fadeIn'>
        <Typography fontWeight={700}>{ producto.title }</Typography>
        <Typography fontWeight={500}>{ `$${producto.price}` }</Typography>
      </Box>
    </Grid>
  )
}



