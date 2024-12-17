import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box, IconButton, Badge } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom'; 

const DesktopNavbar = ({ cartCount }) => {
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: '#3E2723',
        color: '#F1E3D3',
      }}
    >
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1, fontFamily: 'Georgia, serif', color: '#D7CCC8' }}>
          Coffee Cold
        </Typography>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
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

          {/* Home Button */}
          <Button
            sx={{ color: '#F1E3D3', '&:hover': { color: '#D7CCC8' } }}
            component={Link}
            to="/"
          >
            Home
          </Button>

          {/* Menu Button */}
          <Button
            sx={{ color: '#F1E3D3', '&:hover': { color: '#D7CCC8' } }}
            component={Link}
            to="/menu" 
          >
            All Menu
          </Button>

          {/* Contact Button */}
          <Button
            sx={{ color: '#F1E3D3', '&:hover': { color: '#D7CCC8' } }}
            component={Link}
            to="/contact"
          >
            Contact
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default DesktopNavbar;
