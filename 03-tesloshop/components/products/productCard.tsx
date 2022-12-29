import { Card, CardActionArea, CardMedia, Grid } from "@mui/material"
import { FC } from "react";
import { IProducto } from '../../interfaces/productos';

interface Props {
    producto: IProducto
}
export const ProductCard: FC<Props> = ({ producto }) => {
  return (
    <Grid item xs={6} sm= {4} key={ producto.slug }>
      <Card>
        <CardActionArea>
            <CardMedia 
                component='img'
                image={ `products/${producto.images[0] }`} 
                alt = { producto.title }/>
        </CardActionArea>
      </Card>
    </Grid>
  )
}

