import React from 'react';
import { Box, Container, Grid, Card, CardContent, CardMedia, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { coffeeMenu } from '../components/data/menuData';
import Footer from '../components/Footer';

const MenuPage = ({ cartCount, setCartCount }) => {
  // Handle adding coffee to the cart
  const handleAddToCart = (id) => {
    setCartCount(cartCount + 1); 
    console.log(id);
  };

  return (
    <>
      <Box
        sx={{
          backgroundColor: '#F1E3D3',
          minHeight: '100vh',
          paddingTop: 5,
          color: '#3E2723',
        }}
      >
        <Container maxWidth="lg">
          <Typography
            variant="h3"
            sx={{
              textAlign: 'center',
              fontWeight: 'bold',
              marginBottom: 4,
            }}
          >
            Our Coffee Menu
          </Typography>

          <Grid container spacing={3} justifyContent="center">
            {coffeeMenu.map((coffee) => (
              <Grid item xs={12} sm={6} md={4} key={coffee.id}>
                <Card
                  sx={{
                    backgroundColor: '#3E2723',
                    color: '#F1E3D3',
                    boxShadow: 3,
                    borderRadius: 2,
                  }}
                >
                  <CardMedia
                    component="img"
                    height="200"
                    image={coffee.image}
                    alt={coffee.name}
                  />
                  <CardContent>
                    <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                      {coffee.name}
                    </Typography>
                    <Typography variant="body2" sx={{ marginBottom: 2 }}>
                      {coffee.description}
                    </Typography>
                    <Typography variant="body1" sx={{ fontWeight: 'bold', marginBottom: 2 }}>
                      Rp {coffee.price.toFixed(3)}
                    </Typography>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => handleAddToCart(coffee.id)}
                      sx={{
                        backgroundColor: '#5D4037', // Dark brown button
                        '&:hover': { backgroundColor: '#3E2723' },
                      }}
                    >
                      Add to Cart
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>

          {/* Cart and Navigation */}
          <Box sx={{ textAlign: 'center', marginTop: 5 }}>
            <Typography variant="h6">
              Items in Cart: {cartCount}
            </Typography>
            <Button
              component={Link}
              to="/cart"
              variant="contained"
              sx={{
                backgroundColor: '#3E2723',
                color: '#F1E3D3',
                '&:hover': { backgroundColor: '#5D4037' },
                marginTop: 2,
              }}
            >
              Go to Cart
            </Button>
          </Box>
        </Container>
      </Box>
      <Footer/>
    </>
  );
};

export default MenuPage;
