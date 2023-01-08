import { CreditCardOffOutlined, CreditScoreOutlined } from "@mui/icons-material";
import { Typography, Grid, Card, CardContent, Divider, Box, Button, Link, Chip } from "@mui/material";
import NextLink from "next/link";
import { CartList, OrderSummary } from "../../components/cart";
import { ShopLayouts } from "../../components/layouts";

const OrderPage = () => {
  return (
    <ShopLayouts title="Resumen de Orden xxx" pageDescription={"Resumen de la orden de compra"}>
        <Typography variant="h1" component='h1' >Resumen de la Orden xxxx</Typography>
        {/* <Chip 
            sx={{ my: 2 }}
            label="Pendiente de Pago"
            variant="outlined"
            color="error"
            icon={ <CreditCardOffOutlined />}
        /> */}
        <Chip 
            sx={{ my: 2 }}
            label="Orden ya fua Pagada"
            variant="outlined"
            color="success"
            icon={ <CreditScoreOutlined />}
        />
        <Grid container>
            <Grid item xs={12} sm={7}>
                <CartList />
            </Grid>
            <Grid item xs={12} sm={ 5 }>
                <Card className="summary-card">
                    <CardContent>
                        <Typography variant="h2">Resumen (3 productos)</Typography>
                        <Divider sx= {{ my: 1 }} />
                        <Box display='flex' justifyContent='space-between'>
                            <Typography variant='subtitle1'>Dirección de entrega</Typography>
                            <Link href='/checkout/address' passHref component={NextLink} underline='always'>
                                Editar 
                            </Link>
                        </Box>
                        
                        <Typography>Jose A. Morgado</Typography>
                        <Typography>Avda. Guillermo Reyna. 34</Typography>
                        <Typography>Huércarl Overa (Almería)</Typography>
                        <Typography>España</Typography>
                        <Typography>+34 (950) 25-45-90</Typography>

                        <Divider sx= {{ my: 1 }} />

                        <Box display='flex' justifyContent='end' sx={{ mb: 1 }}>
                            <Link href='/cart' passHref component={NextLink} underline='always'>
                                Editar Productos 
                            </Link>
                        </Box>

                        <OrderSummary />
                        <Box sx= {{ mt: 3 }}>
                            {/* TODO */ }
                            <h2>Pagar</h2>
                            <Chip 
                                sx={{ my: 2 }}
                                label="Orden ya fua Pagada"
                                variant="outlined"
                                color="success"
                                icon={ <CreditScoreOutlined />}
                            />
                        </Box>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    </ShopLayouts>
  )
}


export default OrderPage;