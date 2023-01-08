import { ShopLayouts } from "../../components/layouts"
import { Typography, Grid, Card, CardContent, Divider, Box, Button } from '@mui/material';
import { CartList, OrderSummary } from "../../components/cart";

const CartPage = () => {
  return (
    <ShopLayouts title={"Carrito - 3 elementos"} pageDescription={"Productos del Carritos de Compras"}>
        <Typography variant="h1" component='h1' >Carrito </Typography>
        <Grid container>
            <Grid item xs={12} sm={7}>
                {/* Compoenente: CarList - elementos del carrito LocalStorage/Coockies */}
                <CartList editable />
            </Grid>
            <Grid item xs={12} sm={ 5 }>
                <Card className="summary-card">
                    <CardContent>
                        <Typography variant="h2">Orden</Typography>
                        <Divider sx= {{ my: 1 }} />
                        {/* Compoenente: OrderSumary- lee el carrito, el total, el impuesto ... */}
                        <OrderSummary />
                        <Box sx= {{ mt: 3 }}>
                            <Button color="secondary" className="circular-btm" fullWidth>
                                Checkout
                            </Button>
                        </Box>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    </ShopLayouts>
  )
}

export default CartPage;