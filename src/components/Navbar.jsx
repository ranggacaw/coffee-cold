import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box, IconButton, Badge } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

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
            component={Link} // Make it clickable like a link
            to="/cart" // Add the path you want to navigate to
          >
            <Badge badgeContent={cartCount} color="error">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>

          {/* Home Button */}
          <Button
            sx={{ color: '#F1E3D3', '&:hover': { color: '#D7CCC8' } }}
            component={Link}
            to="/" // Link to Home
          >
            Home
          </Button>

          {/* Menu Button */}
          <Button
            sx={{ color: '#F1E3D3', '&:hover': { color: '#D7CCC8' } }}
            component={Link}
            to="/menu" // Link to the menu page
          >
            All Menu
          </Button>

          {/* Contact Button */}
          <Button
            sx={{ color: '#F1E3D3', '&:hover': { color: '#D7CCC8' } }}
            component={Link}
            to="/contact" // Link to the contact page
          >
            Contact
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default DesktopNavbar;
