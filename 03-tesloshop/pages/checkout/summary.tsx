import { Typography, Grid, Card, CardContent, Divider, Box, Button, Link } from '@mui/material'
import { CartList, OrderSummary } from '../../components/cart'
import { ShopLayouts } from '../../components/layouts'
import NextLink from 'next/link';

const SummaryPage = () => {
  return (
    <ShopLayouts title={"Resumen de Orden"} pageDescription={"Resumen de la orden de compra"}>
        <Typography variant="h1" component='h1' >Resumen de la Orden </Typography>
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
                            <Button color="secondary" className="circular-btm" fullWidth>
                                Confirmar Orden
                            </Button>
                        </Box>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    </ShopLayouts>
  )
}

export default SummaryPage