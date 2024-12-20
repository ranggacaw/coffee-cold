import React, { useState } from 'react';
import { Box, Container, Grid, Card, CardContent, CardMedia, Typography, Button } from '@mui/material';

const CartPage = () => {
  const [cartItems] = useState([]);
  
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price, 0).toFixed(2);
  };

  return (
    <>
      <Box sx={{ backgroundColor: '#F1E3D3', minHeight: '100vh', paddingTop: 5, color: '#3E2723' }}>
        <Container maxWidth="lg">
          <Typography variant="h3" sx={{ textAlign: 'center', fontWeight: 'bold', marginBottom: 4 }}>
            Your Cart
          </Typography>

          {/* Display cart items */}
          {cartItems.length === 0 ? (
            <Typography variant="h5" sx={{ textAlign: 'center' }}>
              Your cart is empty. Add some coffee!
            </Typography>
          ) : (
            <Grid container spacing={3} justifyContent="center">
              {cartItems.map((item, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <Card sx={{ backgroundColor: '#3E2723', color: '#F1E3D3', boxShadow: 3, borderRadius: 2 }}>
                    <CardMedia component="img" height="200" image={item.image} alt={item.name} />
                    <CardContent>
                      <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                        {item.name}
                      </Typography>
                      <Typography variant="body2" sx={{ marginBottom: 2 }}>
                        {item.description}
                      </Typography>
                      <Typography variant="body1" sx={{ fontWeight: 'bold', marginBottom: 2 }}>
                        Rp {item.price.toFixed(3)}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          )}

          {/* Cart Total */}
          <Box sx={{ textAlign: 'center', marginTop: 5 }}>
            <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
              Total: Rp {calculateTotal()}
            </Typography>
            
            {/* Proceed to Checkout button */}
            <Button
              variant="contained"
              sx={{
                backgroundColor: '#3E2723',
                color: '#F1E3D3',
                '&:hover': { backgroundColor: '#5D4037' },
                marginTop: 2,
              }}
            >
              Proceed to Checkout
            </Button>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default CartPage;
