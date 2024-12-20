import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box, IconButton, Badge } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';

const DesktopNavbar = ({ cartCount, loggedIn, handleLogout, user }) => {
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: '#3E2723',
        color: '#F1E3D3',
      }}
    >
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        {/* Left Side */}
        <Box sx={{ flex: 1, display: 'flex', alignItems: 'center' }}>
          <Typography variant="h6" sx={{ fontFamily: 'Georgia, serif', color: '#D7CCC8' }}>
            Coffee Cold
          </Typography>
        </Box>

        {/* Centered Links */}
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button
            sx={{ color: '#F1E3D3', '&:hover': { color: '#D7CCC8' } }}
            component={Link}
            to="/"
          >
            Home
          </Button>
          <Button
            sx={{ color: '#F1E3D3', '&:hover': { color: '#D7CCC8' } }}
            component={Link}
            to="/menu"
          >
            All Menu
          </Button>
          <Button
            sx={{ color: '#F1E3D3', '&:hover': { color: '#D7CCC8' } }}
            component={Link}
            to="/contact"
          >
            Contact
          </Button>
        </Box>

        {/* Right Side */}
        <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: 2 }}>
          {/* Cart Icon */}
          <IconButton
            aria-label="cart"
            sx={{ color: '#F1E3D3', '&:hover': { color: '#D7CCC8' } }}
            component={Link}
            to="/cart"
          >
            <Badge badgeContent={cartCount} color="error">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>

          {/* User Authentication and Actions */}
          {loggedIn ? ( // show only if logged in
            <>
              <Typography variant="body1" sx={{ color: '#F1E3D3' }}>
                Hello, {user?.email || "User"}!
              </Typography>
              <Button
                sx={{ color: '#F1E3D3', '&:hover': { color: '#D7CCC8' } }}
                onClick={handleLogout}
              >
                Logout
              </Button>
            </>
          ) : (
            <Button
              sx={{ color: '#F1E3D3', '&:hover': { color: '#D7CCC8' } }}
              component={Link}
              to="/login"
            >
              Login
            </Button>
          )}

          {/* Register Button */}
          {!loggedIn && ( // show only if not logged in
            <Button
              sx={{ color: '#F1E3D3', '&:hover': { color: '#D7CCC8' } }}
              component={Link}
              to="/register"
            >
              Register
            </Button>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default DesktopNavbar;
