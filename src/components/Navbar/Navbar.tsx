import * as React from 'react';
import { AppBar, Button, Container, Toolbar } from '@mui/material';

import useAppSelector from '../../Hooks/useAppSelector';
import HamburgerMenu from './HamburgerMenu/HamburgerMenu';
import NavigationBar from './NavigationBar/NavigationBar';
import TooltipMenu from './TooltipMenu/TooltipMenu';
import Link from '../Link/Link';
import CartIcon from '../CartIcon/CartIcon';

const Navbar = () => {
  const { loggedIn } = useAppSelector((state) => state.auth);

  const { cartItems } = useAppSelector((state) => state.cart);

  return (
    <AppBar position="static" sx={{ background: '#0d2134' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <HamburgerMenu />
          <NavigationBar />

          {loggedIn ? (
            <TooltipMenu />
          ) : (
            <Link to="/login">
              <Button
                sx={{
                  my: 2,
                  color: 'white',
                  display: 'block',
                  margin: 'auto',
                  padding: '5px 10px',
                  border: '1px solid #d93226',
                }}
              >
                LOGIN
              </Button>
            </Link>
          )}

          <CartIcon ItemCount={cartItems.length} />
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
