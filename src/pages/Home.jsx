import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Footer from '../components/Footer';
import DesktopNavbar from '../components/Navbar';

const Home = () => {
  return (
    <>
      <Box
        sx={{
          backgroundColor: '#F1E3D3', 
          minHeight: '100vh',
          color: '#3E2723', 
          paddingTop: 5,
          fontFamily: 'Georgia, serif', 
        }}
      >

        <Container maxWidth="md" className=''>
          {/* Shop Introduction */}
          <Typography
            variant="h3"
            sx={{
              textAlign: 'center',
              fontWeight: 'bold',
              marginBottom: 3,
            }}
          >
            Welcome to Coffee Cold
          </Typography>

          <Typography
            variant="body1"
            sx={{
              textAlign: 'center',
              marginBottom: 5,
              lineHeight: 1.8,
              fontSize: '1.1rem',
            }}
          >
            At Coffee Cold, we serve more than just coffee. We serve an experience. 
            Relax in our cozy atmosphere and enjoy a wide selection of freshly brewed 
            coffee, delicious pastries, and handcrafted beverages. Our mission is to provide
            a warm, welcoming space for all coffee lovers.
          </Typography>

          {/* Coffee Shop Menu Section */}
          <Typography
            variant="h4"
            sx={{
              fontWeight: 'bold',
              textAlign: 'center',
              marginBottom: 4,
            }}
          >
            Our Menu
          </Typography>

          {/* Grid of Menu Items */}
          <Grid container spacing={3} justifyContent="center">
            <Grid item xs={12} sm={6} md={4}>
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
                  image="https://kopikita.id/wp-content/uploads/2022/12/espresso-vs-expresso.jpg" 
                  alt="Coffee"
                />
                <CardContent>
                  <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                    Espresso
                  </Typography>
                  <Typography variant="body2">
                    A bold, rich, and intense shot of espresso made with the finest beans.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
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
                  image="https://guide.horego.com/wp-content/uploads/2024/02/latte-coffee-scaled.webp"
                  alt="Latte"
                />
                <CardContent>
                  <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                    Latte
                  </Typography>
                  <Typography variant="body2">
                    A creamy, smooth, and comforting latte made with freshly steamed milk.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
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
                  image="https://www.thespruceeats.com/thmb/oUxhx54zsjVWfPlrgedJU0MZ-y0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/how-to-make-cappuccinos-766116-hero-01-a754d567739b4ee0b209305138ecb996.jpg"
                  alt="Cappuccino"
                />
                <CardContent>
                  <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                    Cappuccino
                  </Typography>
                  <Typography variant="body2">
                    A balanced cappuccino with a rich shot of espresso, steamed milk, and foam.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>

          {/* Call to Action Button */}
          <Box sx={{ textAlign: 'center', marginTop: 5 }}>
            <Button
              component={Link} 
              to="/menu"
              variant="contained"
              sx={{
                backgroundColor: '#3E2723', 
                color: '#F1E3D3',
                '&:hover': {
                  backgroundColor: '#5D4037', 
                },
                padding: '10px 20px',
                fontWeight: 'bold',
                borderRadius: 2,
              }}
            >
              Explore Our Full Menu
            </Button>
          </Box>

        </Container>

      </Box>
      <Footer/>
    </>
  );
};

export default Home;
