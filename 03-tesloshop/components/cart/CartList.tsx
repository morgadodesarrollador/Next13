import { Typography } from '@mui/material';
import { initialData } from '../../database/products';


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
                <Typography key={producto.slug}> { producto.title }</Typography>
            ))
        }

    </>
  )
}
