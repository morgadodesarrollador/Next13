import NextLink from 'next/link';
import { AppBar, Badge, Box, Button, IconButton, Link, Toolbar, Typography } from '@mui/material';
import { SearchOutlined, ShoppingCartOutlined } from '@mui/icons-material';
import { useRouter } from 'next/router';
import { useContext } from 'react';
import { UiContext } from '../../context/ui/UiContext';

export const Navbar = () => {
  const { asPath} = useRouter();
  const { toggleSideMenu } = useContext(UiContext);
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
              <Button color= { asPath === '/category/men' ? 'primary':'info'}>Hombres</Button>
            </Link>
            <Link href='/category/women' passHref component={ NextLink }>
              <Button color= { asPath === '/category/women' ? 'primary':'info'}>Mujeres</Button>
            </Link>
            <Link href='/category/kids' passHref component={ NextLink }>
              <Button color= { asPath === '/category/kids' ? 'primary':'info'}>Niños</Button>
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
          <Button onClick={ toggleSideMenu }>
            Menu
          </Button>
        </Toolbar>
    </AppBar>
  )
}

