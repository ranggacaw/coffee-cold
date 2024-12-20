import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Footer from '../components/Footer';

const Contact = () => {
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
        <Container maxWidth="sm">
          {/* Contact Us Header */}
          <Typography
            variant="h3"
            sx={{
              textAlign: 'center',
              fontWeight: 'bold',
              marginBottom: 3,
            }}
          >
            Contact Us
          </Typography>

          {/* Intro Text */}
          <Typography
            variant="body1"
            sx={{ marginBottom: 4, textAlign: 'center', lineHeight: 1.8 }}
          >
            We’d love to hear from you! Whether you have questions, feedback, or just want to say hi, 
            feel free to get in touch with us.
          </Typography>

          {/* Contact Form */}
          <Box
            component="form"
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 2,
              marginBottom: 4,
            }}
          >
            <TextField
              label="Your Name"
              variant="outlined"
              required
              fullWidth
              sx={{
                '& .MuiOutlinedInput-root': {
                  backgroundColor: '#FFFFFF', 
                },
              }}
            />
            <TextField
              label="Your Email"
              variant="outlined"
              required
              fullWidth
              sx={{
                '& .MuiOutlinedInput-root': {
                  backgroundColor: '#FFFFFF',
                },
              }}
            />
            <TextField
              label="Your Message"
              variant="outlined"
              required
              multiline
              rows={4}
              fullWidth
              sx={{
                '& .MuiOutlinedInput-root': {
                  backgroundColor: '#FFFFFF',
                },
              }}
            />
            <Button
              type="submit"
              variant="contained"
              sx={{
                backgroundColor: '#3E2723', 
                color: '#F1E3D3', 
                '&:hover': {
                  backgroundColor: '#5D4037', 
                },
                paddingY: 1.5,
                fontWeight: 'bold',
                borderRadius: 2,
              }}
            >
              Send Message
            </Button>
          </Box>

          {/* Contact Information */}
          <Typography
            variant="h5"
            sx={{
              fontWeight: 'bold',
              textAlign: 'center',
              marginBottom: 2,
            }}
          >
            Get in Touch
          </Typography>
          <Typography variant="body1" sx={{ textAlign: 'center', marginBottom: 1 }}>
            📞 (021) 8888-9999
          </Typography>
          <Typography variant="body1" sx={{ textAlign: 'center', marginBottom: 1 }}>
            ✉️ contact@coffeecold.com
          </Typography>
        </Container>
      </Box>

      <Footer/>
    </>
  );
};

export default Contact;
