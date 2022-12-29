import { Grid } from "@mui/material"
import { FC } from "react"
import { IProducto } from '../../interfaces/productos';
import { ProductCard } from "./productCard";


interface Props {
    productos: IProducto[];
}
export const ProductList:FC<Props> = ({ productos }) => {
  return (
    <Grid container spacing={4}>
        {
            productos.map ( producto => (
                <ProductCard
                    producto = { producto }
                    key = { producto.slug }
                />
            ))
        }
    </Grid>
  )
}

