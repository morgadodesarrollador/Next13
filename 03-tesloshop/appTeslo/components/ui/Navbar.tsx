import NextLink from 'next/link';
import { AppBar, Badge, Box, Button, IconButton, Link, Toolbar, Typography } from '@mui/material';
import { SearchOutlined, ShoppingCartOutlined } from '@mui/icons-material';

export const Navbar = () => {
  return (
    <AppBar>
        <Toolbar>
          <Link href='/' passHref component={ NextLink } display= 'flex' alignItems='center'>
            <Typography variant='h6'>Teslo |</Typography>
            <Typography sx={{ marginLeft: 0.5 }}>Shop</Typography>
          </Link>
          <Box flex={1} />

          <Box sx={{ display: { xs: 'none', sm: 'flex' }}}>
            <Link href='/category/men' passHref component={ NextLink }>
              <Button>Hombres</Button>
            </Link>
            <Link href='/category/women' passHref component={ NextLink }>
              <Button>Mujeres</Button>
            </Link>
            <Link href='/category/kids' passHref component={ NextLink }>
              <Button>Niños</Button>
            </Link>
          </Box>
          <Box flex={1} />

          <IconButton>
            <SearchOutlined />
          </IconButton>
          <Link href='/cart' passHref component={NextLink}>
            <IconButton>
              <Badge badgeContent={2} color="secondary">
                <ShoppingCartOutlined />
              </Badge>
            </IconButton>
          </Link>
          <Button>
            Menu
          </Button>
        </Toolbar>
    </AppBar>
  )
}

