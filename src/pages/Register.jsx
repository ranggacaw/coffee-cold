import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from "firebase/auth"
import { Box, Container, TextField, Button, Typography, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { auth } from '../utils/firebaseConfig';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle login logic here
    
    try {
      await createUserWithEmailAndPassword(
        auth,
        email,
        password
      )
      
      console.log('success');
      alert('Account created successsfully')
      navigate('/')
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <>
      <Box
        sx={{
          backgroundColor: '#F1E3D3',
          minHeight: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: 3,
        }}
      >
        <Container maxWidth="sm">
          <Paper elevation={3} sx={{ padding: 4, backgroundColor: '#FFFFFF' }}>
            <Typography variant="h4" sx={{ textAlign: 'center', marginBottom: 3 }}>
              Register
            </Typography>
            <form onSubmit={handleSubmit}>
              <TextField
                label="Email"
                variant="outlined"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                fullWidth
                sx={{ marginBottom: 2 }}
              />
              <TextField
                label="Password"
                variant="outlined"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                fullWidth
                sx={{ marginBottom: 2 }}
              />
              <Button
                type="submit"
                variant="contained"
                fullWidth
                sx={{
                  backgroundColor: '#3E2723',
                  color: '#F1E3D3',
                  '&:hover': { backgroundColor: '#5D4037' },
                  paddingY: 1.5,
                  fontWeight: 'bold',
                  borderRadius: 2,
                }}
              >
                Register
              </Button>
            </form>
          </Paper>
        </Container>
      </Box>
    </>
  );
};

export default Register;